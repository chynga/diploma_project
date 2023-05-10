import 'package:dental_plaza/core/error/network_exception.dart';
import 'package:dental_plaza/core/network/basic_response.dart';
import 'package:dental_plaza/core/network/layers/network_executer.dart';
import 'package:dental_plaza/core/network/result.dart';
import 'package:dental_plaza/features/chat/model/message_dto.dart';
import 'package:dental_plaza/features/main/datasource/main_api.dart';
import 'package:dental_plaza/features/main/datasource/main_remote_ds.dart';
import 'package:dental_plaza/features/main/model/doctor_dto.dart';
import 'package:dental_plaza/features/main/model/notification_dto.dart';
import 'package:dental_plaza/features/main/model/service_dto.dart';

abstract class IMainRepository {
  Future<Result<List<ServiceDTO>>> getServices();
  Future<Result<List<DoctorDTO>>> getDoctors();
  Future<Result<List<MessageDTO>>> getMessages();
  Future<Result<List<NotificationDTO>>> getNotifications();
  Future<Result<BasicResponse>> viewNotifications({
    required String type,
  });
}

class MainRepositoryImpl extends IMainRepository {
  final IMainRemoteDS _remoteDs;
  final NetworkExecuter _client;

  MainRepositoryImpl(this._remoteDs, this._client);
  @override
  Future<Result<List<DoctorDTO>>> getDoctors() => _remoteDs.getDoctors();

  @override
  Future<Result<List<ServiceDTO>>> getServices() => _remoteDs.getServices();

  @override
  Future<Result<List<MessageDTO>>> getMessages() => _remoteDs.getMessages();

  @override
  Future<Result<List<NotificationDTO>>> getNotifications() =>
      _remoteDs.getNotifications();

  @override
  Future<Result<BasicResponse>> viewNotifications({
    required String type,
  }) =>
      _client.execute(
        route: MainApi.notificationTypes(type: type),
        responseType: BasicResponse(),
      );
}
