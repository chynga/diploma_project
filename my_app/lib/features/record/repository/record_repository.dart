import 'package:dental_plaza/core/network/basic_response.dart';
import 'package:dental_plaza/core/network/layers/network_executer.dart';
import 'package:dental_plaza/core/network/result.dart';
import 'package:dental_plaza/features/record/datasource/record_api.dart';
import 'package:dental_plaza/features/record/datasource/record_remote_ds.dart';
import 'package:dental_plaza/features/record/model/record_dto.dart';

abstract class IRecordRepository {
  Future<Result<List<RecordDTO>>> getRecords();
  Future<Result<List<int>>> getFreeSlots({
    required String doctorId,
    required String serviceId,
    required int date,
  });
  Future<Result<BasicResponse>> makeRecord({
    required String doctorId,
    required String serviceId,
    required int timeStamp,
    required String clientMessage,
  });
}

class RecordRepositoryImpl extends IRecordRepository {
  final IRecordRemoteDS _remoteDs;
  final NetworkExecuter _client;

  RecordRepositoryImpl(this._remoteDs, this._client);
  @override
  Future<Result<List<RecordDTO>>> getRecords() => _remoteDs.getRecords();

  @override
  Future<Result<List<int>>> getFreeSlots({
    required String doctorId,
    required String serviceId,
    required int date,
  }) =>
      _remoteDs.getFreeSlots(
        doctorId: doctorId,
        serviceId: serviceId,
        date: date,
      );

  @override
  Future<Result<BasicResponse>> makeRecord({
    required String doctorId,
    required String serviceId,
    required int timeStamp,
    required String clientMessage,
  }) {
    return _client.execute(
      route: RecordApi.makeRecord(
        doctorId: doctorId,
        serviceId: serviceId,
        timeStamp: timeStamp,
        clientMessage: clientMessage,
      ),
      responseType: BasicResponse(),
    );
  }
}
