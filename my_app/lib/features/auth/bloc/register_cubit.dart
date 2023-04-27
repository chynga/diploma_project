import 'package:dental_plaza/core/network/basic_response.dart';
import 'package:dental_plaza/features/auth/repository/auth_repository.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'register_cubit.freezed.dart';

class RegisterCubit extends Cubit<RegisterState> {
  RegisterCubit(
    this._authRepository,
  ) : super(const RegisterState.loadingState());
  final IAuthRepository _authRepository;

  Future<void> register({
    required String phone,
    required String password,
    required String email,
    required String name,
  }) async {
    emit(const RegisterState.loadingState());

    final result = await _authRepository.register(
      phone: phone,
      password: password,
      email: email,
      name: name,
    );

    result.when(
      success: (BasicResponse response) {
        emit(RegisterState.loadedState(message: response.message ?? "Success"));
      },
      failure: (e) {
        e.maybeWhen(
          orElse: () {
            emit(RegisterState.errorState(message: e.msg ?? 'Ошибка логина'));
          },
        );
      },
    );
  }
}

@freezed
class RegisterState with _$RegisterState {
  const factory RegisterState.initialState() = _InitialState;

  const factory RegisterState.loadedState({
    required String message,
  }) = _LoadedState;

  const factory RegisterState.loadingState() = _LoadingState;

  const factory RegisterState.errorState({
    required String message,
  }) = _ErrorState;
}
