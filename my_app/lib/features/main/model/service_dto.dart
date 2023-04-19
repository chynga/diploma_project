// ignore_for_file: invalid_annotation_target

import 'package:freezed_annotation/freezed_annotation.dart';

part 'service_dto.freezed.dart';
part 'service_dto.g.dart';

@freezed
class ServiceDTO with _$ServiceDTO {
  const factory ServiceDTO({
    String? id,
    String? title,
    String? description,
    int? duration,
    String? cost,
    String? imgMainUrl,
    String? imgBeforeUrl,
    String? imgAfterUrl,
  }) = _ServiceDTO;

  factory ServiceDTO.fromJson(Map<String, dynamic> json) => _$ServiceDTOFromJson(json);
}
