// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'record_dto.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_RecordDTO _$$_RecordDTOFromJson(Map<String, dynamic> json) => _$_RecordDTO(
      id: json['id'] as String?,
      doctor: json['doctor'] == null
          ? null
          : DoctorDTO.fromJson(json['doctor'] as Map<String, dynamic>),
      service: json['service'] == null
          ? null
          : ServiceDTO.fromJson(json['service'] as Map<String, dynamic>),
      time:
          json['time'] == null ? null : DateTime.parse(json['time'] as String),
      status: json['status'] as String?,
      cost: json['cost'] as int?,
    );

Map<String, dynamic> _$$_RecordDTOToJson(_$_RecordDTO instance) =>
    <String, dynamic>{
      'id': instance.id,
      'doctor': instance.doctor,
      'service': instance.service,
      'time': instance.time?.toIso8601String(),
      'status': instance.status,
      'cost': instance.cost,
    };
