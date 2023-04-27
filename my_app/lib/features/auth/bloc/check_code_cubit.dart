import 'package:dental_plaza/features/auth/repository/auth_repository.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'check_code_cubit.freezed.dart';

class CheckCodeCubit extends Cubit<CheckCodeState> {
  CheckCodeCubit(
    this._authRepository,
  ) : super(const CheckCodeState.initialState());
  final IAuthRepository _authRepository;

  Future<void> checkCode({
    required String email,
    required String code,
  }) async {
    emit(const CheckCodeState.loadingState());

    final result = await _authRepository.checkCode(
      email: email,
      code: code,
    );

    result.when(
      success: (response) {
        emit(
          CheckCodeState.loadedState(message: response.message ?? "Success"),
        );
      },
      failure: (e) {
        e.maybeWhen(
          orElse: () {
            emit(CheckCodeState.errorState(message: e.msg ?? 'Ошибка логина'));
          },
        );
      },
    );
  }
}

@freezed
class CheckCodeState with _$CheckCodeState {
  const factory CheckCodeState.initialState() = _InitialState;

  const factory CheckCodeState.loadedState({
    required String message,
  }) = _LoadedState;

  const factory CheckCodeState.loadingState() = _LoadingState;

  const factory CheckCodeState.errorState({
    required String message,
  }) = _ErrorState;
}
