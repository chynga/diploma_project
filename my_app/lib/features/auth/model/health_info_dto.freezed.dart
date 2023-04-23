// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'health_info_dto.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

HealthInfoDTO _$HealthInfoDTOFromJson(Map<String, dynamic> json) {
  return _HealthInfoDTO.fromJson(json);
}

/// @nodoc
mixin _$HealthInfoDTO {
  String? get allergy => throw _privateConstructorUsedError;
  String? get prescribedMedications => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $HealthInfoDTOCopyWith<HealthInfoDTO> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $HealthInfoDTOCopyWith<$Res> {
  factory $HealthInfoDTOCopyWith(
          HealthInfoDTO value, $Res Function(HealthInfoDTO) then) =
      _$HealthInfoDTOCopyWithImpl<$Res, HealthInfoDTO>;
  @useResult
  $Res call({String? allergy, String? prescribedMedications});
}

/// @nodoc
class _$HealthInfoDTOCopyWithImpl<$Res, $Val extends HealthInfoDTO>
    implements $HealthInfoDTOCopyWith<$Res> {
  _$HealthInfoDTOCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? allergy = freezed,
    Object? prescribedMedications = freezed,
  }) {
    return _then(_value.copyWith(
      allergy: freezed == allergy
          ? _value.allergy
          : allergy // ignore: cast_nullable_to_non_nullable
              as String?,
      prescribedMedications: freezed == prescribedMedications
          ? _value.prescribedMedications
          : prescribedMedications // ignore: cast_nullable_to_non_nullable
              as String?,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_HealthInfoDTOCopyWith<$Res>
    implements $HealthInfoDTOCopyWith<$Res> {
  factory _$$_HealthInfoDTOCopyWith(
          _$_HealthInfoDTO value, $Res Function(_$_HealthInfoDTO) then) =
      __$$_HealthInfoDTOCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String? allergy, String? prescribedMedications});
}

/// @nodoc
class __$$_HealthInfoDTOCopyWithImpl<$Res>
    extends _$HealthInfoDTOCopyWithImpl<$Res, _$_HealthInfoDTO>
    implements _$$_HealthInfoDTOCopyWith<$Res> {
  __$$_HealthInfoDTOCopyWithImpl(
      _$_HealthInfoDTO _value, $Res Function(_$_HealthInfoDTO) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? allergy = freezed,
    Object? prescribedMedications = freezed,
  }) {
    return _then(_$_HealthInfoDTO(
      allergy: freezed == allergy
          ? _value.allergy
          : allergy // ignore: cast_nullable_to_non_nullable
              as String?,
      prescribedMedications: freezed == prescribedMedications
          ? _value.prescribedMedications
          : prescribedMedications // ignore: cast_nullable_to_non_nullable
              as String?,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_HealthInfoDTO implements _HealthInfoDTO {
  const _$_HealthInfoDTO({this.allergy, this.prescribedMedications});

  factory _$_HealthInfoDTO.fromJson(Map<String, dynamic> json) =>
      _$$_HealthInfoDTOFromJson(json);

  @override
  final String? allergy;
  @override
  final String? prescribedMedications;

  @override
  String toString() {
    return 'HealthInfoDTO(allergy: $allergy, prescribedMedications: $prescribedMedications)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_HealthInfoDTO &&
            (identical(other.allergy, allergy) || other.allergy == allergy) &&
            (identical(other.prescribedMedications, prescribedMedications) ||
                other.prescribedMedications == prescribedMedications));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, allergy, prescribedMedications);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_HealthInfoDTOCopyWith<_$_HealthInfoDTO> get copyWith =>
      __$$_HealthInfoDTOCopyWithImpl<_$_HealthInfoDTO>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_HealthInfoDTOToJson(
      this,
    );
  }
}

abstract class _HealthInfoDTO implements HealthInfoDTO {
  const factory _HealthInfoDTO(
      {final String? allergy,
      final String? prescribedMedications}) = _$_HealthInfoDTO;

  factory _HealthInfoDTO.fromJson(Map<String, dynamic> json) =
      _$_HealthInfoDTO.fromJson;

  @override
  String? get allergy;
  @override
  String? get prescribedMedications;
  @override
  @JsonKey(ignore: true)
  _$$_HealthInfoDTOCopyWith<_$_HealthInfoDTO> get copyWith =>
      throw _privateConstructorUsedError;
}
