// ignore_for_file: avoid-dynamic
import 'package:dental_plaza/core/network/interfaces/base_client_generator.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'main_api.freezed.dart';

@freezed
class MainApi extends BaseClientGenerator with _$MainApi {
  const MainApi._() : super();

  const factory MainApi.service() = _Service;

  
  const factory MainApi.doctor() = _Doctor;

  const factory MainApi.doctorWithId({
    required String id,
  }) = _DoctorWithId;

  const factory MainApi.chat() = _Chat;
  const factory MainApi.notification() = _Notification;
  
  const factory MainApi.notificationTypes({
    required String type,
  }) = _NotificationTypes;


  /// body
  /// По умолчанию null
  @override
  dynamic get body => whenOrNull();

  /// Используемые методы запросов, по умолчанию 'GET'
  @override
  String get method => maybeWhen(
        orElse: () => 'GET',
        service: () => 'GET',
        doctor: () => 'GET',
        doctorWithId: (id) => 'GET',
        notification: () => 'GET',
        notificationTypes: (type) => 'PATCH',
      );

  /// Пути всех запросов (после [kBaseUrl])
  @override
  String get path => when(
        service: () => '/api/services',
        doctor: () => '/api/doctors/available',
        doctorWithId: (id) => '/api/doctors/$id',
        chat: () => '/api/consultation/my',
        notification: () => '/api/profile/notifications',
        notificationTypes: (type) => '/api/profile/notifications/types/$type',
      );

  /// Параметры запросов
  @override
  Map<String, dynamic>? get queryParameters => whenOrNull();
}
