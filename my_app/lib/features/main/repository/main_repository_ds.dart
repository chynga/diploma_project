import 'package:dental_plaza/core/network/result.dart';
import 'package:dental_plaza/features/main/datasource/main_remote_ds.dart';
import 'package:dental_plaza/features/main/model/doctor_dto.dart';
import 'package:dental_plaza/features/main/model/service_dto.dart';

abstract class IMainRepository {
  Future<Result<List<ServiceDTO>>> getServices();
  Future<Result<List<DoctorDTO>>> getDoctors();
}

class MainRepositoryImpl extends IMainRepository {
  final IMainRemoteDS _remoteDs;

  MainRepositoryImpl(this._remoteDs);
  @override
  Future<Result<List<DoctorDTO>>> getDoctors() => _remoteDs.getDoctors();

  @override
  Future<Result<List<ServiceDTO>>> getServices() => _remoteDs.getServices();
}
