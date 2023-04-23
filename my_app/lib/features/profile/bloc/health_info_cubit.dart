import 'package:dental_plaza/features/auth/model/health_info_dto.dart';
import 'package:dental_plaza/features/auth/repository/auth_repository.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'health_info_cubit.freezed.dart';

class HealthInfoCubit extends Cubit<HealthInfoState> {
  HealthInfoCubit(
    this._authRepository,
  ) : super(const HealthInfoState.loadingState());
  final IAuthRepository _authRepository;

  Future<void> getHealthInfo() async {
    emit(const HealthInfoState.loadingState());

    final result = await _authRepository.getHeathInfo();

    result.when(
      success: (HealthInfoDTO user) {
        emit(HealthInfoState.loadedState(healthInfo: user));
      },
      failure: (e) {
        e.maybeWhen(
          orElse: () {
            emit(HealthInfoState.errorState(message: e.msg ?? 'Ошибка'));
          },
        );
      },
    );
  }
}

@freezed
class HealthInfoState with _$HealthInfoState {
  const factory HealthInfoState.initialState() = _InitialState;

  const factory HealthInfoState.loadedState({
    required HealthInfoDTO healthInfo,
  }) = _LoadedState;

  const factory HealthInfoState.loadingState() = _LoadingState;

  const factory HealthInfoState.errorState({
    required String message,
  }) = _ErrorState;
}
