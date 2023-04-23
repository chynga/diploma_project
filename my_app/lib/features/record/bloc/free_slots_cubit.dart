import 'package:dental_plaza/features/record/repository/record_repository.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'free_slots_cubit.freezed.dart';

class FreeSlotsCubit extends Cubit<FreeSlotsState> {
  final IRecordRepository _repository;
  FreeSlotsCubit(this._repository) : super(const FreeSlotsState.initialState());

  Future<void> getFreeSlots({
    required String doctorId,
    required String serviceId,
    required int date,
  }) async {
    emit(const FreeSlotsState.loadingState());
    final result = await _repository.getFreeSlots(
      doctorId: doctorId,
      serviceId: serviceId,
      date: date,
    );

    result.when(
      success: (data) {
        emit(
          FreeSlotsState.loadedState(freeSlots: data),
        );
      },
      failure: (error) => emit(
        FreeSlotsState.errorState(
          message: error.msg ?? "Ошибка при получение записи",
        ),
      ),
    );
  }
}

@freezed
class FreeSlotsState with _$FreeSlotsState {
  const factory FreeSlotsState.initialState() = _InitialState;
  const factory FreeSlotsState.loadingState() = _LoadingState;
  const factory FreeSlotsState.loadedState({required List<int> freeSlots}) =
      _LoadedState;
  const factory FreeSlotsState.errorState({
    required String message,
  }) = _ErrorState;
}
