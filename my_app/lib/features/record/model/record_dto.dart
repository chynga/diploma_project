// ignore_for_file: invalid_annotation_target

import 'package:dental_plaza/features/main/model/doctor_dto.dart';
import 'package:dental_plaza/features/main/model/service_dto.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'record_dto.freezed.dart';
part 'record_dto.g.dart';

@freezed
class RecordDTO with _$RecordDTO {
  const factory RecordDTO({
    String? id,
    DoctorDTO? doctor,
    ServiceDTO? service,
    DateTime? time,
    String? status,
    int? cost,
  }) = _RecordDTO;

  factory RecordDTO.fromJson(Map<String, dynamic> json) => _$RecordDTOFromJson(json);

}
