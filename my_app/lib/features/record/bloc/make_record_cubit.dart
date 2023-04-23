import 'package:dental_plaza/features/record/repository/record_repository.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'make_record_cubit.freezed.dart';

class MakeRecordCubit extends Cubit<MakeRecordState> {
  final IRecordRepository _repository;
  MakeRecordCubit(this._repository)
      : super(const MakeRecordState.initialState());

  Future<void> makeRecord({
    required String doctorId,
    required String serviceId,
    required int timeStamp,
  }) async {
    emit(const MakeRecordState.loadingState());
    final result = await _repository.makeRecord(
      doctorId: doctorId,
      serviceId: serviceId,
      timeStamp: timeStamp,
      //FIXME Need to add messsage
      clientMessage: 'hello world',
    );

    result.when(
      success: (data) {
        emit(
          MakeRecordState.loadedState(message: data.message ?? "Success"),
        );
      },
      failure: (error) => emit(
        MakeRecordState.errorState(
          message: error.msg ?? "Ошибка при получение записи",
        ),
      ),
    );
  }
}

@freezed
class MakeRecordState with _$MakeRecordState {
  const factory MakeRecordState.initialState() = _InitialState;
  const factory MakeRecordState.loadingState() = _LoadingState;
  const factory MakeRecordState.loadedState({required String message}) =
      _LoadedState;
  const factory MakeRecordState.errorState({
    required String message,
  }) = _ErrorState;
}
