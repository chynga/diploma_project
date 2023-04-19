// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'doctor_dto.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_DoctorDTO _$$_DoctorDTOFromJson(Map<String, dynamic> json) => _$_DoctorDTO(
      id: json['id'] as String?,
      fullName: json['fullName'] as String?,
      startedWorkingFrom: json['startedWorkingFrom'] as String?,
      about: json['about'] as String?,
      imageUrl: json['imageUrl'] as String?,
      services: (json['services'] as List<dynamic>?)
          ?.map((e) => ServiceDTO.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$$_DoctorDTOToJson(_$_DoctorDTO instance) =>
    <String, dynamic>{
      'id': instance.id,
      'fullName': instance.fullName,
      'startedWorkingFrom': instance.startedWorkingFrom,
      'about': instance.about,
      'imageUrl': instance.imageUrl,
      'services': instance.services,
    };
