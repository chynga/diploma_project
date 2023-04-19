import 'package:dental_plaza/features/main/model/service_dto.dart';
import 'package:dental_plaza/features/main/repository/main_repository_ds.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'services_cubit.freezed.dart';

class ServicesCubit extends Cubit<ServicesState> {
  final IMainRepository _repository;
  ServicesCubit(this._repository) : super(const ServicesState.initialState());

  Future<void> getServices() async {
    emit(const ServicesState.loadingState());
    final result = await _repository.getServices();

    result.when(
      success: (data) => emit(ServicesState.loadedState(services: data)),
      failure: (error) => emit(
        ServicesState.errorState(
          message: error.msg ?? "Ошибка при получение сервисов",
        ),
      ),
    );
  }
}

@freezed
class ServicesState with _$ServicesState {
  const factory ServicesState.initialState() = _InitialState;
  const factory ServicesState.loadingState() = _LoadingState;
  const factory ServicesState.loadedState({
    required List<ServiceDTO> services,
  }) = _LoadedState;
  const factory ServicesState.errorState({
    required String message,
  }) = _ErrorState;
}
