// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'service_dto.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_ServiceDTO _$$_ServiceDTOFromJson(Map<String, dynamic> json) =>
    _$_ServiceDTO(
      id: json['id'] as String?,
      title: json['title'] as String?,
      description: json['description'] as String?,
      duration: json['duration'] as int?,
      cost: json['cost'] as String?,
      imgMainUrl: json['imgMainUrl'] as String?,
      imgBeforeUrl: json['imgBeforeUrl'] as String?,
      imgAfterUrl: json['imgAfterUrl'] as String?,
    );

Map<String, dynamic> _$$_ServiceDTOToJson(_$_ServiceDTO instance) =>
    <String, dynamic>{
      'id': instance.id,
      'title': instance.title,
      'description': instance.description,
      'duration': instance.duration,
      'cost': instance.cost,
      'imgMainUrl': instance.imgMainUrl,
      'imgBeforeUrl': instance.imgBeforeUrl,
      'imgAfterUrl': instance.imgAfterUrl,
    };
