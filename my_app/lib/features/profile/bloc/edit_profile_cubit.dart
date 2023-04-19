import 'package:dental_plaza/core/network/basic_response.dart';
import 'package:dental_plaza/features/auth/repository/auth_repository.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'edit_profile_cubit.freezed.dart';

class EditProfileCubit extends Cubit<EditProfileState> {
  EditProfileCubit(
    this._authRepository,
  ) : super(const EditProfileState.loadingState());
  final IAuthRepository _authRepository;

  Future<void> editProfile({
    String? fullName,
    String? email,
    String? phone,
  }) async {
    emit(const EditProfileState.loadingState());

    final result = await _authRepository.editProfile(
        fullName: fullName,
        email: email,
        phone: phone,
    );

    result.when(
      success: (BasicResponse message) {
        emit(EditProfileState.loadedState(message: message.message??"Success"));
      },
      failure: (e) {
        e.maybeWhen(
          orElse: () {
            emit(EditProfileState.errorState(message: e.msg ?? 'Ошибка логина'));
          },
        );
      },
    );
  }
}

@freezed
class EditProfileState with _$EditProfileState {
  const factory EditProfileState.initialState() = _InitialState;

  const factory EditProfileState.loadedState({
    required String message,
  }) = _LoadedState;

  const factory EditProfileState.loadingState() = _LoadingState;

  const factory EditProfileState.errorState({
    required String message,
  }) = _ErrorState;
}
