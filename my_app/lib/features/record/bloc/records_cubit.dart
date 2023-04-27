import 'package:dental_plaza/features/record/model/record_dto.dart';
import 'package:dental_plaza/features/record/repository/record_repository.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'records_cubit.freezed.dart';

class RecordsCubit extends Cubit<RecordsState> {
  final IRecordRepository _repository;
  RecordsCubit(this._repository) : super(const RecordsState.initialState());

  Future<void> getRecords() async {
    emit(const RecordsState.loadingState());
    final result = await _repository.getRecords();

    result.when(
      success: (data) {
        final List<RecordDTO> myRecords = [];
        final List<RecordDTO> pastRecords = [];
        for (int i = 0; i < data.length; i++) {
          if (DateTime.parse(data[i].time ?? DateTime.now().toString())
                  .difference(DateTime.now())
                  .inHours <
              0) {
            pastRecords.add(data[i]);
          } else {
            myRecords.add(data[i]);
          }
        }
        emit(
          RecordsState.loadedState(
            myRecords: myRecords,
            pastRecords: pastRecords,
          ),
        );
      },
      failure: (error) => emit(
        RecordsState.errorState(
          message: error.msg ?? "Ошибка при получение записи",
        ),
      ),
    );
  }
}

@freezed
class RecordsState with _$RecordsState {
  const factory RecordsState.initialState() = _InitialState;
  const factory RecordsState.loadingState() = _LoadingState;
  const factory RecordsState.loadedState({
    required List<RecordDTO> myRecords,
    required List<RecordDTO> pastRecords,
  }) = _LoadedState;
  const factory RecordsState.errorState({
    required String message,
  }) = _ErrorState;
}
