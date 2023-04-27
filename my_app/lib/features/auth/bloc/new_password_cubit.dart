import 'package:dental_plaza/features/auth/repository/auth_repository.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'new_password_cubit.freezed.dart';

class NewPasswordCubit extends Cubit<NewPasswordState> {
  NewPasswordCubit(
    this._authRepository,
  ) : super(const NewPasswordState.initialState());
  final IAuthRepository _authRepository;

  Future<void> newPassword({
    required String email,
    required String code,
    required String password,
  }) async {
    emit(const NewPasswordState.loadingState());

    final result = await _authRepository.newPassword(
      email: email,
      code: code,
      password: password,
    );

    result.when(
      success: (response) {
        emit(
          NewPasswordState.loadedState(
            message: response.message ?? "Success",
          ),
        );
      },
      failure: (e) {
        e.maybeWhen(
          orElse: () {
            emit(
              NewPasswordState.errorState(message: e.msg ?? 'Ошибка логина'),
            );
          },
        );
      },
    );
  }
}

@freezed
class NewPasswordState with _$NewPasswordState {
  const factory NewPasswordState.initialState() = _InitialState;

  const factory NewPasswordState.loadedState({
    required String message,
  }) = _LoadedState;

  const factory NewPasswordState.loadingState() = _LoadingState;

  const factory NewPasswordState.errorState({
    required String message,
  }) = _ErrorState;
}
