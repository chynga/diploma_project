import 'package:dental_plaza/features/main/model/doctor_dto.dart';
import 'package:dental_plaza/features/main/repository/main_repository_ds.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'doctors_cubit.freezed.dart';

class DoctorsCubit extends Cubit<DoctorsState> {
  final IMainRepository _repository;
  DoctorsCubit(this._repository) : super(const DoctorsState.initialState());

  Future<void> getDoctors() async {
    emit(const DoctorsState.loadingState());
    final result = await _repository.getDoctors();

    result.when(
      success: (data) => emit(DoctorsState.loadedState(doctors: data)),
      failure: (error) => emit(
        DoctorsState.errorState(
          message: error.msg ?? "Ошибка при получение докторов",
        ),
      ),
    );
  }
}

@freezed
class DoctorsState with _$DoctorsState {
  const factory DoctorsState.initialState() = _InitialState;
  const factory DoctorsState.loadingState() = _LoadingState;
  const factory DoctorsState.loadedState({
    required List<DoctorDTO> doctors,
  }) = _LoadedState;
  const factory DoctorsState.errorState({
    required String message,
  }) = _ErrorState;
}
