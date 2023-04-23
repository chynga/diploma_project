// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'record_dto.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

RecordDTO _$RecordDTOFromJson(Map<String, dynamic> json) {
  return _RecordDTO.fromJson(json);
}

/// @nodoc
mixin _$RecordDTO {
  String? get id => throw _privateConstructorUsedError;
  DoctorDTO? get doctor => throw _privateConstructorUsedError;
  ServiceDTO? get service => throw _privateConstructorUsedError;
  String? get time => throw _privateConstructorUsedError;
  String? get status => throw _privateConstructorUsedError;
  int? get cost => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $RecordDTOCopyWith<RecordDTO> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $RecordDTOCopyWith<$Res> {
  factory $RecordDTOCopyWith(RecordDTO value, $Res Function(RecordDTO) then) =
      _$RecordDTOCopyWithImpl<$Res, RecordDTO>;
  @useResult
  $Res call(
      {String? id,
      DoctorDTO? doctor,
      ServiceDTO? service,
      String? time,
      String? status,
      int? cost});

  $DoctorDTOCopyWith<$Res>? get doctor;
  $ServiceDTOCopyWith<$Res>? get service;
}

/// @nodoc
class _$RecordDTOCopyWithImpl<$Res, $Val extends RecordDTO>
    implements $RecordDTOCopyWith<$Res> {
  _$RecordDTOCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = freezed,
    Object? doctor = freezed,
    Object? service = freezed,
    Object? time = freezed,
    Object? status = freezed,
    Object? cost = freezed,
  }) {
    return _then(_value.copyWith(
      id: freezed == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String?,
      doctor: freezed == doctor
          ? _value.doctor
          : doctor // ignore: cast_nullable_to_non_nullable
              as DoctorDTO?,
      service: freezed == service
          ? _value.service
          : service // ignore: cast_nullable_to_non_nullable
              as ServiceDTO?,
      time: freezed == time
          ? _value.time
          : time // ignore: cast_nullable_to_non_nullable
              as String?,
      status: freezed == status
          ? _value.status
          : status // ignore: cast_nullable_to_non_nullable
              as String?,
      cost: freezed == cost
          ? _value.cost
          : cost // ignore: cast_nullable_to_non_nullable
              as int?,
    ) as $Val);
  }

  @override
  @pragma('vm:prefer-inline')
  $DoctorDTOCopyWith<$Res>? get doctor {
    if (_value.doctor == null) {
      return null;
    }

    return $DoctorDTOCopyWith<$Res>(_value.doctor!, (value) {
      return _then(_value.copyWith(doctor: value) as $Val);
    });
  }

  @override
  @pragma('vm:prefer-inline')
  $ServiceDTOCopyWith<$Res>? get service {
    if (_value.service == null) {
      return null;
    }

    return $ServiceDTOCopyWith<$Res>(_value.service!, (value) {
      return _then(_value.copyWith(service: value) as $Val);
    });
  }
}

/// @nodoc
abstract class _$$_RecordDTOCopyWith<$Res> implements $RecordDTOCopyWith<$Res> {
  factory _$$_RecordDTOCopyWith(
          _$_RecordDTO value, $Res Function(_$_RecordDTO) then) =
      __$$_RecordDTOCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String? id,
      DoctorDTO? doctor,
      ServiceDTO? service,
      String? time,
      String? status,
      int? cost});

  @override
  $DoctorDTOCopyWith<$Res>? get doctor;
  @override
  $ServiceDTOCopyWith<$Res>? get service;
}

/// @nodoc
class __$$_RecordDTOCopyWithImpl<$Res>
    extends _$RecordDTOCopyWithImpl<$Res, _$_RecordDTO>
    implements _$$_RecordDTOCopyWith<$Res> {
  __$$_RecordDTOCopyWithImpl(
      _$_RecordDTO _value, $Res Function(_$_RecordDTO) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = freezed,
    Object? doctor = freezed,
    Object? service = freezed,
    Object? time = freezed,
    Object? status = freezed,
    Object? cost = freezed,
  }) {
    return _then(_$_RecordDTO(
      id: freezed == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String?,
      doctor: freezed == doctor
          ? _value.doctor
          : doctor // ignore: cast_nullable_to_non_nullable
              as DoctorDTO?,
      service: freezed == service
          ? _value.service
          : service // ignore: cast_nullable_to_non_nullable
              as ServiceDTO?,
      time: freezed == time
          ? _value.time
          : time // ignore: cast_nullable_to_non_nullable
              as String?,
      status: freezed == status
          ? _value.status
          : status // ignore: cast_nullable_to_non_nullable
              as String?,
      cost: freezed == cost
          ? _value.cost
          : cost // ignore: cast_nullable_to_non_nullable
              as int?,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_RecordDTO implements _RecordDTO {
  const _$_RecordDTO(
      {this.id, this.doctor, this.service, this.time, this.status, this.cost});

  factory _$_RecordDTO.fromJson(Map<String, dynamic> json) =>
      _$$_RecordDTOFromJson(json);

  @override
  final String? id;
  @override
  final DoctorDTO? doctor;
  @override
  final ServiceDTO? service;
  @override
  final String? time;
  @override
  final String? status;
  @override
  final int? cost;

  @override
  String toString() {
    return 'RecordDTO(id: $id, doctor: $doctor, service: $service, time: $time, status: $status, cost: $cost)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_RecordDTO &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.doctor, doctor) || other.doctor == doctor) &&
            (identical(other.service, service) || other.service == service) &&
            (identical(other.time, time) || other.time == time) &&
            (identical(other.status, status) || other.status == status) &&
            (identical(other.cost, cost) || other.cost == cost));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode =>
      Object.hash(runtimeType, id, doctor, service, time, status, cost);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_RecordDTOCopyWith<_$_RecordDTO> get copyWith =>
      __$$_RecordDTOCopyWithImpl<_$_RecordDTO>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_RecordDTOToJson(
      this,
    );
  }
}

abstract class _RecordDTO implements RecordDTO {
  const factory _RecordDTO(
      {final String? id,
      final DoctorDTO? doctor,
      final ServiceDTO? service,
      final String? time,
      final String? status,
      final int? cost}) = _$_RecordDTO;

  factory _RecordDTO.fromJson(Map<String, dynamic> json) =
      _$_RecordDTO.fromJson;

  @override
  String? get id;
  @override
  DoctorDTO? get doctor;
  @override
  ServiceDTO? get service;
  @override
  String? get time;
  @override
  String? get status;
  @override
  int? get cost;
  @override
  @JsonKey(ignore: true)
  _$$_RecordDTOCopyWith<_$_RecordDTO> get copyWith =>
      throw _privateConstructorUsedError;
}
