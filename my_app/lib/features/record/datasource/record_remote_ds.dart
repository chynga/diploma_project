import 'dart:developer';

import 'package:dental_plaza/core/error/network_exception.dart';
import 'package:dental_plaza/core/network/layers/network_executer.dart';
import 'package:dental_plaza/core/network/result.dart';
import 'package:dental_plaza/features/record/datasource/record_api.dart';
import 'package:dental_plaza/features/record/model/record_dto.dart';
import 'package:flutter/foundation.dart';
import 'package:l/l.dart';

abstract class IRecordRemoteDS {
  Future<Result<List<RecordDTO>>> getRecords();
  Future<Result<List<int>>> getFreeSlots({
    required String doctorId,
    required String serviceId,
    required int date,
  });
}

class RecordRemoteDSImpl extends IRecordRemoteDS {
  final NetworkExecuter client;

  RecordRemoteDSImpl({required this.client});

  @override
  Future<Result<List<RecordDTO>>> getRecords() async {
    try {
      final Result<Map?> result = await client.produce(
        route: const RecordApi.record(),
      );

      return result.when(
        success: (Map? response) {
          if (response == null) {
            return const Result.failure(
              NetworkException.type(error: 'Incorrect data parsing!'),
            );
          }

          final List<RecordDTO> records =
              (response['clientAppointments'] as List)
                  .map((e) => RecordDTO.fromJson(e as Map<String, dynamic>))
                  .toList();

          return Result<List<RecordDTO>>.success(records);
        },
        failure: (NetworkException exception) =>
            Result<List<RecordDTO>>.failure(exception),
      );
    } catch (e) {
      if (kDebugMode) {
        l.d('getServices => ${NetworkException.type(error: e.toString())}');
      }
      return Result<List<RecordDTO>>.failure(
        NetworkException.type(error: e.toString()),
      );
    }
  }

  @override
  Future<Result<List<int>>> getFreeSlots({
    required String doctorId,
    required String serviceId,
    required int date,
  }) async {
    try {
      final Result<Map?> result = await client.produce(
        route: RecordApi.freeSlots(
          doctorId: doctorId,
          serviceId: serviceId,
          date: date,
        ),
      );

      return result.when(
        success: (Map? response) {
          if (response == null) {
            return const Result.failure(
              NetworkException.type(error: 'Incorrect data parsing!'),
            );
          }

          final List records = response['freeSlots'] as List;
          log(records.toString());
          if (records.isEmpty) {
            return const Result<List<int>>.success([]);
          } else {
            return Result<List<int>>.success(records.map((e) => e as int).toList());
          }
        },
        failure: (NetworkException exception) =>
            Result<List<int>>.failure(exception),
      );
    } catch (e) {
      if (kDebugMode) {
        l.d('getFreeSlots => ${NetworkException.type(error: e.toString())}');
      }
      return Result<List<int>>.failure(
        NetworkException.type(error: e.toString()),
      );
    }
  }
}
