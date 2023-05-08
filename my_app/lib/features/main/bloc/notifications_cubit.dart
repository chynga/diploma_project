import 'dart:developer';

import 'package:dental_plaza/features/main/model/notification_dto.dart';
import 'package:dental_plaza/features/main/repository/main_repository_ds.dart';
import 'package:dental_plaza/settings/widget/scope/settings_scope.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'notifications_cubit.freezed.dart';

class NotificationsCubit extends Cubit<NotificationsState> {
  final IMainRepository _repository;
  NotificationsCubit(this._repository)
      : super(const NotificationsState.initialState());

  Future<void> getNots() async {
    emit(const NotificationsState.loadingState());
    final result = await _repository.getNotifications();
    result.when(
      success: (data) {
        bool flag = true;
        for (final NotificationDTO not in data) {
          if (not.isViewed == false) {
            flag = false;
          }
        }
        emit(NotificationsState.loadedState(notifications: data,isViewed: flag));
      },
      failure: (error) => emit(
        NotificationsState.errorState(
          message: error.msg ?? "Ошибка при получение уведомлении",
        ),
      ),
    );
  }
}

@freezed
class NotificationsState with _$NotificationsState {
  const factory NotificationsState.initialState() = _InitialState;
  const factory NotificationsState.loadingState() = _LoadingState;
  const factory NotificationsState.loadedState({
    required List<NotificationDTO> notifications,
    required bool isViewed,
  }) = _LoadedState;
  const factory NotificationsState.errorState({
    required String message,
  }) = _ErrorState;
}
