// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'doctor_dto.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

DoctorDTO _$DoctorDTOFromJson(Map<String, dynamic> json) {
  return _DoctorDTO.fromJson(json);
}

/// @nodoc
mixin _$DoctorDTO {
  String? get id => throw _privateConstructorUsedError;
  String? get fullName => throw _privateConstructorUsedError;
  String? get startedWorkingFrom => throw _privateConstructorUsedError;
  String? get about => throw _privateConstructorUsedError;
  String? get imageUrl => throw _privateConstructorUsedError;
  List<ServiceDTO>? get services => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $DoctorDTOCopyWith<DoctorDTO> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $DoctorDTOCopyWith<$Res> {
  factory $DoctorDTOCopyWith(DoctorDTO value, $Res Function(DoctorDTO) then) =
      _$DoctorDTOCopyWithImpl<$Res, DoctorDTO>;
  @useResult
  $Res call(
      {String? id,
      String? fullName,
      String? startedWorkingFrom,
      String? about,
      String? imageUrl,
      List<ServiceDTO>? services});
}

/// @nodoc
class _$DoctorDTOCopyWithImpl<$Res, $Val extends DoctorDTO>
    implements $DoctorDTOCopyWith<$Res> {
  _$DoctorDTOCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = freezed,
    Object? fullName = freezed,
    Object? startedWorkingFrom = freezed,
    Object? about = freezed,
    Object? imageUrl = freezed,
    Object? services = freezed,
  }) {
    return _then(_value.copyWith(
      id: freezed == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String?,
      fullName: freezed == fullName
          ? _value.fullName
          : fullName // ignore: cast_nullable_to_non_nullable
              as String?,
      startedWorkingFrom: freezed == startedWorkingFrom
          ? _value.startedWorkingFrom
          : startedWorkingFrom // ignore: cast_nullable_to_non_nullable
              as String?,
      about: freezed == about
          ? _value.about
          : about // ignore: cast_nullable_to_non_nullable
              as String?,
      imageUrl: freezed == imageUrl
          ? _value.imageUrl
          : imageUrl // ignore: cast_nullable_to_non_nullable
              as String?,
      services: freezed == services
          ? _value.services
          : services // ignore: cast_nullable_to_non_nullable
              as List<ServiceDTO>?,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_DoctorDTOCopyWith<$Res> implements $DoctorDTOCopyWith<$Res> {
  factory _$$_DoctorDTOCopyWith(
          _$_DoctorDTO value, $Res Function(_$_DoctorDTO) then) =
      __$$_DoctorDTOCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String? id,
      String? fullName,
      String? startedWorkingFrom,
      String? about,
      String? imageUrl,
      List<ServiceDTO>? services});
}

/// @nodoc
class __$$_DoctorDTOCopyWithImpl<$Res>
    extends _$DoctorDTOCopyWithImpl<$Res, _$_DoctorDTO>
    implements _$$_DoctorDTOCopyWith<$Res> {
  __$$_DoctorDTOCopyWithImpl(
      _$_DoctorDTO _value, $Res Function(_$_DoctorDTO) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = freezed,
    Object? fullName = freezed,
    Object? startedWorkingFrom = freezed,
    Object? about = freezed,
    Object? imageUrl = freezed,
    Object? services = freezed,
  }) {
    return _then(_$_DoctorDTO(
      id: freezed == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String?,
      fullName: freezed == fullName
          ? _value.fullName
          : fullName // ignore: cast_nullable_to_non_nullable
              as String?,
      startedWorkingFrom: freezed == startedWorkingFrom
          ? _value.startedWorkingFrom
          : startedWorkingFrom // ignore: cast_nullable_to_non_nullable
              as String?,
      about: freezed == about
          ? _value.about
          : about // ignore: cast_nullable_to_non_nullable
              as String?,
      imageUrl: freezed == imageUrl
          ? _value.imageUrl
          : imageUrl // ignore: cast_nullable_to_non_nullable
              as String?,
      services: freezed == services
          ? _value._services
          : services // ignore: cast_nullable_to_non_nullable
              as List<ServiceDTO>?,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_DoctorDTO implements _DoctorDTO {
  const _$_DoctorDTO(
      {this.id,
      this.fullName,
      this.startedWorkingFrom,
      this.about,
      this.imageUrl,
      final List<ServiceDTO>? services})
      : _services = services;

  factory _$_DoctorDTO.fromJson(Map<String, dynamic> json) =>
      _$$_DoctorDTOFromJson(json);

  @override
  final String? id;
  @override
  final String? fullName;
  @override
  final String? startedWorkingFrom;
  @override
  final String? about;
  @override
  final String? imageUrl;
  final List<ServiceDTO>? _services;
  @override
  List<ServiceDTO>? get services {
    final value = _services;
    if (value == null) return null;
    if (_services is EqualUnmodifiableListView) return _services;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(value);
  }

  @override
  String toString() {
    return 'DoctorDTO(id: $id, fullName: $fullName, startedWorkingFrom: $startedWorkingFrom, about: $about, imageUrl: $imageUrl, services: $services)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_DoctorDTO &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.fullName, fullName) ||
                other.fullName == fullName) &&
            (identical(other.startedWorkingFrom, startedWorkingFrom) ||
                other.startedWorkingFrom == startedWorkingFrom) &&
            (identical(other.about, about) || other.about == about) &&
            (identical(other.imageUrl, imageUrl) ||
                other.imageUrl == imageUrl) &&
            const DeepCollectionEquality().equals(other._services, _services));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, fullName, startedWorkingFrom,
      about, imageUrl, const DeepCollectionEquality().hash(_services));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_DoctorDTOCopyWith<_$_DoctorDTO> get copyWith =>
      __$$_DoctorDTOCopyWithImpl<_$_DoctorDTO>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_DoctorDTOToJson(
      this,
    );
  }
}

abstract class _DoctorDTO implements DoctorDTO {
  const factory _DoctorDTO(
      {final String? id,
      final String? fullName,
      final String? startedWorkingFrom,
      final String? about,
      final String? imageUrl,
      final List<ServiceDTO>? services}) = _$_DoctorDTO;

  factory _DoctorDTO.fromJson(Map<String, dynamic> json) =
      _$_DoctorDTO.fromJson;

  @override
  String? get id;
  @override
  String? get fullName;
  @override
  String? get startedWorkingFrom;
  @override
  String? get about;
  @override
  String? get imageUrl;
  @override
  List<ServiceDTO>? get services;
  @override
  @JsonKey(ignore: true)
  _$$_DoctorDTOCopyWith<_$_DoctorDTO> get copyWith =>
      throw _privateConstructorUsedError;
}
