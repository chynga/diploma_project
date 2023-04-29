// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'message_dto.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_MessageDTO _$$_MessageDTOFromJson(Map<String, dynamic> json) =>
    _$_MessageDTO(
      id: json['id'] as String?,
      chatId: json['chatId'] as String?,
      writerId: json['writerId'] as String?,
      body: json['body'] as String?,
      isClient: json['isClient'] as bool?,
      createdAt: json['createdAt'] == null
          ? null
          : DateTime.parse(json['createdAt'] as String),
    );

Map<String, dynamic> _$$_MessageDTOToJson(_$_MessageDTO instance) =>
    <String, dynamic>{
      'id': instance.id,
      'chatId': instance.chatId,
      'writerId': instance.writerId,
      'body': instance.body,
      'isClient': instance.isClient,
      'createdAt': instance.createdAt?.toIso8601String(),
    };
