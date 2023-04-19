// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'service_dto.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

ServiceDTO _$ServiceDTOFromJson(Map<String, dynamic> json) {
  return _ServiceDTO.fromJson(json);
}

/// @nodoc
mixin _$ServiceDTO {
  String? get id => throw _privateConstructorUsedError;
  String? get title => throw _privateConstructorUsedError;
  String? get description => throw _privateConstructorUsedError;
  int? get duration => throw _privateConstructorUsedError;
  String? get cost => throw _privateConstructorUsedError;
  String? get imgMainUrl => throw _privateConstructorUsedError;
  String? get imgBeforeUrl => throw _privateConstructorUsedError;
  String? get imgAfterUrl => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $ServiceDTOCopyWith<ServiceDTO> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $ServiceDTOCopyWith<$Res> {
  factory $ServiceDTOCopyWith(
          ServiceDTO value, $Res Function(ServiceDTO) then) =
      _$ServiceDTOCopyWithImpl<$Res, ServiceDTO>;
  @useResult
  $Res call(
      {String? id,
      String? title,
      String? description,
      int? duration,
      String? cost,
      String? imgMainUrl,
      String? imgBeforeUrl,
      String? imgAfterUrl});
}

/// @nodoc
class _$ServiceDTOCopyWithImpl<$Res, $Val extends ServiceDTO>
    implements $ServiceDTOCopyWith<$Res> {
  _$ServiceDTOCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = freezed,
    Object? title = freezed,
    Object? description = freezed,
    Object? duration = freezed,
    Object? cost = freezed,
    Object? imgMainUrl = freezed,
    Object? imgBeforeUrl = freezed,
    Object? imgAfterUrl = freezed,
  }) {
    return _then(_value.copyWith(
      id: freezed == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String?,
      title: freezed == title
          ? _value.title
          : title // ignore: cast_nullable_to_non_nullable
              as String?,
      description: freezed == description
          ? _value.description
          : description // ignore: cast_nullable_to_non_nullable
              as String?,
      duration: freezed == duration
          ? _value.duration
          : duration // ignore: cast_nullable_to_non_nullable
              as int?,
      cost: freezed == cost
          ? _value.cost
          : cost // ignore: cast_nullable_to_non_nullable
              as String?,
      imgMainUrl: freezed == imgMainUrl
          ? _value.imgMainUrl
          : imgMainUrl // ignore: cast_nullable_to_non_nullable
              as String?,
      imgBeforeUrl: freezed == imgBeforeUrl
          ? _value.imgBeforeUrl
          : imgBeforeUrl // ignore: cast_nullable_to_non_nullable
              as String?,
      imgAfterUrl: freezed == imgAfterUrl
          ? _value.imgAfterUrl
          : imgAfterUrl // ignore: cast_nullable_to_non_nullable
              as String?,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_ServiceDTOCopyWith<$Res>
    implements $ServiceDTOCopyWith<$Res> {
  factory _$$_ServiceDTOCopyWith(
          _$_ServiceDTO value, $Res Function(_$_ServiceDTO) then) =
      __$$_ServiceDTOCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String? id,
      String? title,
      String? description,
      int? duration,
      String? cost,
      String? imgMainUrl,
      String? imgBeforeUrl,
      String? imgAfterUrl});
}

/// @nodoc
class __$$_ServiceDTOCopyWithImpl<$Res>
    extends _$ServiceDTOCopyWithImpl<$Res, _$_ServiceDTO>
    implements _$$_ServiceDTOCopyWith<$Res> {
  __$$_ServiceDTOCopyWithImpl(
      _$_ServiceDTO _value, $Res Function(_$_ServiceDTO) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = freezed,
    Object? title = freezed,
    Object? description = freezed,
    Object? duration = freezed,
    Object? cost = freezed,
    Object? imgMainUrl = freezed,
    Object? imgBeforeUrl = freezed,
    Object? imgAfterUrl = freezed,
  }) {
    return _then(_$_ServiceDTO(
      id: freezed == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String?,
      title: freezed == title
          ? _value.title
          : title // ignore: cast_nullable_to_non_nullable
              as String?,
      description: freezed == description
          ? _value.description
          : description // ignore: cast_nullable_to_non_nullable
              as String?,
      duration: freezed == duration
          ? _value.duration
          : duration // ignore: cast_nullable_to_non_nullable
              as int?,
      cost: freezed == cost
          ? _value.cost
          : cost // ignore: cast_nullable_to_non_nullable
              as String?,
      imgMainUrl: freezed == imgMainUrl
          ? _value.imgMainUrl
          : imgMainUrl // ignore: cast_nullable_to_non_nullable
              as String?,
      imgBeforeUrl: freezed == imgBeforeUrl
          ? _value.imgBeforeUrl
          : imgBeforeUrl // ignore: cast_nullable_to_non_nullable
              as String?,
      imgAfterUrl: freezed == imgAfterUrl
          ? _value.imgAfterUrl
          : imgAfterUrl // ignore: cast_nullable_to_non_nullable
              as String?,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_ServiceDTO implements _ServiceDTO {
  const _$_ServiceDTO(
      {this.id,
      this.title,
      this.description,
      this.duration,
      this.cost,
      this.imgMainUrl,
      this.imgBeforeUrl,
      this.imgAfterUrl});

  factory _$_ServiceDTO.fromJson(Map<String, dynamic> json) =>
      _$$_ServiceDTOFromJson(json);

  @override
  final String? id;
  @override
  final String? title;
  @override
  final String? description;
  @override
  final int? duration;
  @override
  final String? cost;
  @override
  final String? imgMainUrl;
  @override
  final String? imgBeforeUrl;
  @override
  final String? imgAfterUrl;

  @override
  String toString() {
    return 'ServiceDTO(id: $id, title: $title, description: $description, duration: $duration, cost: $cost, imgMainUrl: $imgMainUrl, imgBeforeUrl: $imgBeforeUrl, imgAfterUrl: $imgAfterUrl)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_ServiceDTO &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.title, title) || other.title == title) &&
            (identical(other.description, description) ||
                other.description == description) &&
            (identical(other.duration, duration) ||
                other.duration == duration) &&
            (identical(other.cost, cost) || other.cost == cost) &&
            (identical(other.imgMainUrl, imgMainUrl) ||
                other.imgMainUrl == imgMainUrl) &&
            (identical(other.imgBeforeUrl, imgBeforeUrl) ||
                other.imgBeforeUrl == imgBeforeUrl) &&
            (identical(other.imgAfterUrl, imgAfterUrl) ||
                other.imgAfterUrl == imgAfterUrl));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, title, description, duration,
      cost, imgMainUrl, imgBeforeUrl, imgAfterUrl);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_ServiceDTOCopyWith<_$_ServiceDTO> get copyWith =>
      __$$_ServiceDTOCopyWithImpl<_$_ServiceDTO>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_ServiceDTOToJson(
      this,
    );
  }
}

abstract class _ServiceDTO implements ServiceDTO {
  const factory _ServiceDTO(
      {final String? id,
      final String? title,
      final String? description,
      final int? duration,
      final String? cost,
      final String? imgMainUrl,
      final String? imgBeforeUrl,
      final String? imgAfterUrl}) = _$_ServiceDTO;

  factory _ServiceDTO.fromJson(Map<String, dynamic> json) =
      _$_ServiceDTO.fromJson;

  @override
  String? get id;
  @override
  String? get title;
  @override
  String? get description;
  @override
  int? get duration;
  @override
  String? get cost;
  @override
  String? get imgMainUrl;
  @override
  String? get imgBeforeUrl;
  @override
  String? get imgAfterUrl;
  @override
  @JsonKey(ignore: true)
  _$$_ServiceDTOCopyWith<_$_ServiceDTO> get copyWith =>
      throw _privateConstructorUsedError;
}
