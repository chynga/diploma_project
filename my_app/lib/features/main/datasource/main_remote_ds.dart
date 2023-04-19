import 'package:dental_plaza/core/error/network_exception.dart';
import 'package:dental_plaza/core/network/layers/network_executer.dart';
import 'package:dental_plaza/core/network/result.dart';
import 'package:dental_plaza/features/main/datasource/main_api.dart';
import 'package:dental_plaza/features/main/model/doctor_dto.dart';
import 'package:dental_plaza/features/main/model/service_dto.dart';
import 'package:flutter/foundation.dart';
import 'package:l/l.dart';

abstract class IMainRemoteDS {
  Future<Result<List<ServiceDTO>>> getServices();
  Future<Result<List<DoctorDTO>>> getDoctors();
}

class MainRemoteDSImpl extends IMainRemoteDS {
  final NetworkExecuter client;

  MainRemoteDSImpl({required this.client});

  @override
  Future<Result<List<DoctorDTO>>> getDoctors() async {
    try {
      final Result<Map?> result = await client.produce(
        route: const MainApi.doctor(),
      );

      return result.when(
        success: (Map? response) {
          if (response == null) {
            return const Result.failure(
              NetworkException.type(error: 'Incorrect data parsing!'),
            );
          }

          final List<DoctorDTO> doctors = (response['doctors'] as List)
              .map((e) => DoctorDTO.fromJson(e as Map<String, dynamic>))
              .toList();

          return Result<List<DoctorDTO>>.success(doctors);
        },
        failure: (NetworkException exception) =>
            Result<List<DoctorDTO>>.failure(exception),
      );
    } catch (e) {
      if (kDebugMode) {
        l.d('getDoctors => ${NetworkException.type(error: e.toString())}');
      }
      return Result<List<DoctorDTO>>.failure(
        NetworkException.type(error: e.toString()),
      );
    }
  }

  @override
  Future<Result<List<ServiceDTO>>> getServices() async {
    try {
      final Result<Map?> result = await client.produce(
        route: const MainApi.service(),
      );

      return result.when(
        success: (Map? response) {
          if (response == null) {
            return const Result.failure(
              NetworkException.type(error: 'Incorrect data parsing!'),
            );
          }

          final List<ServiceDTO> services = (response['services'] as List)
              .map((e) => ServiceDTO.fromJson(e as Map<String, dynamic>))
              .toList();

          return Result<List<ServiceDTO>>.success(services);
        },
        failure: (NetworkException exception) =>
            Result<List<ServiceDTO>>.failure(exception),
      );
    } catch (e) {
      if (kDebugMode) {
        l.d('getServices => ${NetworkException.type(error: e.toString())}');
      }
      return Result<List<ServiceDTO>>.failure(
        NetworkException.type(error: e.toString()),
      );
    }
  }
}
