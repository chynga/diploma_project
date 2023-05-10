import 'dart:convert';
import 'dart:developer';

import 'package:dental_plaza/core/enum/environment.dart';
import 'package:dental_plaza/features/auth/model/user_dto.dart';
import 'package:dental_plaza/features/auth/repository/auth_repository.dart';
import 'package:dental_plaza/features/chat/model/message_dto.dart';
import 'package:dental_plaza/features/main/repository/main_repository_ds.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:web_socket_channel/web_socket_channel.dart';

part 'chat_cubit.freezed.dart';

class ChatCubit extends Cubit<ChatState> {
  ChatCubit(
    this._mainRepository,
    this._authRepository,
  ) : super(const ChatState.initialState());
  final IMainRepository _mainRepository;
  final IAuthRepository _authRepository;

  List<MessageDTO> _messages = [];
  late WebSocketChannel chatWebSocket; //initialize a websocket channel
  bool isWebsocketRunning = false;
  int retryLimit = 3;

  Future<void> connectWebSocket() async {
    log(isWebsocketRunning.toString(), name: 'isWebsocketRunning');
    final UserDTO? userFromCache = await _authRepository.getUserFromCache();
    // if (isWebsocketRunning) return;
    if (userFromCache != null && userFromCache.accessToken != null) {
      chatWebSocket = WebSocketChannel.connect(
        Uri.parse(
          '$kBaseUrlWSocket/chat?token=${userFromCache.accessToken!}',
        ),
      );
      log('CONNECTED');
      try {
        chatWebSocket.stream.listen(
          (message) {
            log('message');
            _messages.insert(
              0,
              MessageDTO.fromJson(
                jsonDecode(message as String) as Map<String, dynamic>,
              ),
            );
            emit(ChatState.newMessageState(messages: _messages));
            emit(ChatState.loadedState(messages: _messages));
            if (((jsonDecode(message) as Map<String, dynamic>)['writerId']) ==
                userFromCache.id) {
              log(';wejflidsjkljnfalksdfnjliaenf', name: "READ MESSAGE");
              readMessage();
            }
          },
          onDone: () {
            isWebsocketRunning = true;
          },
          onError: (err) {
            isWebsocketRunning = false;
            if (retryLimit > 0) {
              retryLimit--;
              connectWebSocket();
            }
          },
        );
      } on Exception catch (e) {
        log(e.toString());
      }
    }
  }

  void sendMessage({
    required String message,
  }) {
    try {
      log('SENDING MESSAGE: $message');
      chatWebSocket.sink.add(jsonEncode({'body': message}));
    } on Exception catch (e) {
      log(e.toString());
    }
  }

  void closeWebSocket() {
    isWebsocketRunning = false;
    log('DISCONNECTED');
    chatWebSocket.sink.close();
  }

  Future<void> getMessages() async {
    emit(const ChatState.loadingState());

    final result = await _mainRepository.getMessages();

    result.when(
      success: (messages) {
        _messages = messages;
        emit(
          ChatState.loadedState(
            messages: _messages,
          ),
        );
      },
      failure: (e) {
        e.maybeWhen(
          orElse: () {
            emit(
              ChatState.errorState(
                message: e.msg ?? 'Ошибка при получение сообщении',
              ),
            );
          },
        );
      },
    );
  }

  void readMessage() {
    emit(ChatState.readMessageState(messages: _messages));
    emit(ChatState.loadedState(messages: _messages));
  }

  @override
  Future<void> close() {
    closeWebSocket();
    return super.close();
  }
}

@freezed
class ChatState with _$ChatState {
  const factory ChatState.initialState() = _InitialState;

  const factory ChatState.loadedState({
    required List<MessageDTO> messages,
  }) = _LoadedState;

  const factory ChatState.newMessageState({
    required List<MessageDTO> messages,
  }) = _NewMessageState;

  const factory ChatState.readMessageState({
    required List<MessageDTO> messages,
  }) = _ReadMessageState;

  const factory ChatState.loadingState() = _LoadingState;

  const factory ChatState.errorState({
    required String message,
  }) = _ErrorState;
}
