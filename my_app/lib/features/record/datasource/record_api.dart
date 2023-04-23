// ignore_for_file: avoid-dynamic
import 'package:dental_plaza/core/network/interfaces/base_client_generator.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'record_api.freezed.dart';

@freezed
class RecordApi extends BaseClientGenerator with _$RecordApi {
  const RecordApi._() : super();

  const factory RecordApi.record() = _Record;
  const factory RecordApi.makeRecord({
    required String doctorId,
    required String serviceId,
    required int timeStamp,
    required String clientMessage,
  }) = _MakeRecord;
  const factory RecordApi.freeSlots({
    required String doctorId,
    required String serviceId,
    required int date,
  }) = _FreeSlots;

  /// body
  /// По умолчанию null
  @override
  dynamic get body => whenOrNull(
        makeRecord: (doctorId, serviceId, timeStamp, clientMessage) => {
          'doctorId': doctorId,
          'serviceId': serviceId,
          'time': timeStamp,
          'clientMessage': clientMessage,
        },
      );

  /// Используемые методы запросов, по умолчанию 'GET'
  @override
  String get method => maybeWhen(
        orElse: () => 'GET',
        record: () => 'GET',
        makeRecord: (doctorId, serviceId, timeStamp, clientMessage) => 'POST',
      );

  /// Пути всех запросов (после [kBaseUrl])
  @override
  String get path => when(
        record: () => '/api/profile/appointments',
        makeRecord: (doctorId, serviceId, timeStamp, clientMessage) =>
            '/api/profile/appointments',
        freeSlots: (doctorId, serviceId, date) => '/api/doctors/$doctorId/free-slots',
      );

  /// Параметры запросов
  @override
  Map<String, dynamic>? get queryParameters => whenOrNull(
        freeSlots: (doctorId, serviceId, date) => {
          'serviceId': serviceId,
          'date': date,
        },
      );
}
