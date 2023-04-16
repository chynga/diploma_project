import 'package:dental_plaza/features/auth/model/user_dto.dart';
import 'package:dental_plaza/features/auth/repository/auth_repository.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'profile_cubit.freezed.dart';

class ProfileCubit extends Cubit<ProfileState> {
  ProfileCubit(
    this._authRepository,
  ) : super(const ProfileState.loadingState());
  final IAuthRepository _authRepository;

  Future<void> getProfie() async {
    emit(const ProfileState.loadingState());

    final result = await _authRepository.getProfile(
    );

    result.when(
      success: (UserDTO user) {
        emit(ProfileState.loadedState(user: user));
      },
      failure: (e) {
        e.maybeWhen(
          orElse: () {
            emit(ProfileState.errorState(message: e.msg ?? 'Ошибка логина'));
          },
        );
      },
    );
  }
}

@freezed
class ProfileState with _$ProfileState {
  const factory ProfileState.initialState() = _InitialState;

  const factory ProfileState.loadedState({
    required UserDTO user,
  }) = _LoadedState;

  const factory ProfileState.loadingState() = _LoadingState;

  const factory ProfileState.errorState({
    required String message,
  }) = _ErrorState;
}
