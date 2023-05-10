// ignore_for_file: invalid_annotation_target

import 'package:dental_plaza/features/main/model/service_dto.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'notification_dto.freezed.dart';
part 'notification_dto.g.dart';

@freezed
class NotificationDTO with _$NotificationDTO {
  const factory NotificationDTO({
    String? id,
    String? clientId,
    String? type,
    bool? isViewed,
    String? message,
    DateTime? showAt,
    ServiceDTO? service,
  }) = _NotificationDTO;

  factory NotificationDTO.fromJson(Map<String, dynamic> json) =>
      _$NotificationDTOFromJson(json);
}
