// ignore_for_file: invalid_annotation_target

import 'package:freezed_annotation/freezed_annotation.dart';

part 'health_info_dto.freezed.dart';
part 'health_info_dto.g.dart';

@freezed
class HealthInfoDTO with _$HealthInfoDTO {
  const factory HealthInfoDTO({
    String? allergy,
    String? prescribedMedications,
  }) = _HealthInfoDTO;

  factory HealthInfoDTO.fromJson(Map<String, dynamic> json) => _$HealthInfoDTOFromJson(json);

  // @override
  // UserDTO fromJson(Map<String, dynamic> json) => UserDTO.fromJson(json);
}
