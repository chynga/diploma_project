// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'notification_dto.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_NotificationDTO _$$_NotificationDTOFromJson(Map<String, dynamic> json) =>
    _$_NotificationDTO(
      id: json['id'] as String?,
      clientId: json['clientId'] as String?,
      type: json['type'] as String?,
      isViewed: json['isViewed'] as bool?,
      message: json['message'] as String?,
      showAt: json['showAt'] == null
          ? null
          : DateTime.parse(json['showAt'] as String),
      service: json['service'] == null
          ? null
          : ServiceDTO.fromJson(json['service'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$$_NotificationDTOToJson(_$_NotificationDTO instance) =>
    <String, dynamic>{
      'id': instance.id,
      'clientId': instance.clientId,
      'type': instance.type,
      'isViewed': instance.isViewed,
      'message': instance.message,
      'showAt': instance.showAt?.toIso8601String(),
      'service': instance.service,
    };
