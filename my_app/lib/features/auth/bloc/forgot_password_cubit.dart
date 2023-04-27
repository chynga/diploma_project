import 'package:dental_plaza/features/auth/repository/auth_repository.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'forgot_password_cubit.freezed.dart';

class ForgotPasswordCubit extends Cubit<ForgotPasswordState> {
  ForgotPasswordCubit(
    this._authRepository,
  ) : super(const ForgotPasswordState.initialState());
  final IAuthRepository _authRepository;

  Future<void> sendCode({
    required String email,
  }) async {
    emit(const ForgotPasswordState.loadingState());

    final result = await _authRepository.sendCode(email: email);

    result.when(
      success: (response) {
        emit(
          ForgotPasswordState.loadedState(
            message: response.message ?? "Success",
          ),
        );
      },
      failure: (e) {
        e.maybeWhen(
          orElse: () {
            emit(
              ForgotPasswordState.errorState(
                message: e.msg ?? 'Ошибка логина',
              ),
            );
          },
        );
      },
    );
  }
}

@freezed
class ForgotPasswordState with _$ForgotPasswordState {
  const factory ForgotPasswordState.initialState() = _InitialState;

  const factory ForgotPasswordState.loadedState({
    required String message,
  }) = _LoadedState;

  const factory ForgotPasswordState.loadingState() = _LoadingState;

  const factory ForgotPasswordState.errorState({
    required String message,
  }) = _ErrorState;
}
