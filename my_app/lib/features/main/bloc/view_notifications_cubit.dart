import 'package:dental_plaza/features/main/repository/main_repository_ds.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'view_notifications_cubit.freezed.dart';

class ViewNotificationsCubit extends Cubit<ViewNotificationsState> {
  final IMainRepository _repository;
  ViewNotificationsCubit(this._repository)
      : super(const ViewNotificationsState.initialState());

  Future<void> viewNots({
    required String type,
  }) async {
    emit(const ViewNotificationsState.loadingState());
    final result = await _repository.viewNotifications(type: type);

    result.when(
      success: (response) => emit(
        ViewNotificationsState.loadedState(
          message: response.message ?? "Success",
        ),
      ),
      failure: (error) => emit(
        ViewNotificationsState.errorState(
          message: error.msg ?? "Ошибка при смотрении уведомлений",
        ),
      ),
    );
  }
}

@freezed
class ViewNotificationsState with _$ViewNotificationsState {
  const factory ViewNotificationsState.initialState() = _InitialState;
  const factory ViewNotificationsState.loadingState() = _LoadingState;
  const factory ViewNotificationsState.loadedState({
    required String message,
  }) = _LoadedState;
  const factory ViewNotificationsState.errorState({
    required String message,
  }) = _ErrorState;
}
