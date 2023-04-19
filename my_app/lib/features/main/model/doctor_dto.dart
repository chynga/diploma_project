// ignore_for_file: invalid_annotation_target

import 'package:dental_plaza/features/main/model/service_dto.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'doctor_dto.freezed.dart';
part 'doctor_dto.g.dart';

@freezed
class DoctorDTO with _$DoctorDTO {
  const factory DoctorDTO({
    String? id,
    String? fullName,
    String? startedWorkingFrom,
    String? about,
    String? imageUrl,
    List<ServiceDTO>? services,
  }) = _DoctorDTO;

  factory DoctorDTO.fromJson(Map<String, dynamic> json) => _$DoctorDTOFromJson(json);

}
