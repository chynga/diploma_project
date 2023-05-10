// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'notification_dto.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

NotificationDTO _$NotificationDTOFromJson(Map<String, dynamic> json) {
  return _NotificationDTO.fromJson(json);
}

/// @nodoc
mixin _$NotificationDTO {
  String? get id => throw _privateConstructorUsedError;
  String? get clientId => throw _privateConstructorUsedError;
  String? get type => throw _privateConstructorUsedError;
  bool? get isViewed => throw _privateConstructorUsedError;
  String? get message => throw _privateConstructorUsedError;
  DateTime? get showAt => throw _privateConstructorUsedError;
  ServiceDTO? get service => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $NotificationDTOCopyWith<NotificationDTO> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $NotificationDTOCopyWith<$Res> {
  factory $NotificationDTOCopyWith(
          NotificationDTO value, $Res Function(NotificationDTO) then) =
      _$NotificationDTOCopyWithImpl<$Res, NotificationDTO>;
  @useResult
  $Res call(
      {String? id,
      String? clientId,
      String? type,
      bool? isViewed,
      String? message,
      DateTime? showAt,
      ServiceDTO? service});

  $ServiceDTOCopyWith<$Res>? get service;
}

/// @nodoc
class _$NotificationDTOCopyWithImpl<$Res, $Val extends NotificationDTO>
    implements $NotificationDTOCopyWith<$Res> {
  _$NotificationDTOCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = freezed,
    Object? clientId = freezed,
    Object? type = freezed,
    Object? isViewed = freezed,
    Object? message = freezed,
    Object? showAt = freezed,
    Object? service = freezed,
  }) {
    return _then(_value.copyWith(
      id: freezed == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String?,
      clientId: freezed == clientId
          ? _value.clientId
          : clientId // ignore: cast_nullable_to_non_nullable
              as String?,
      type: freezed == type
          ? _value.type
          : type // ignore: cast_nullable_to_non_nullable
              as String?,
      isViewed: freezed == isViewed
          ? _value.isViewed
          : isViewed // ignore: cast_nullable_to_non_nullable
              as bool?,
      message: freezed == message
          ? _value.message
          : message // ignore: cast_nullable_to_non_nullable
              as String?,
      showAt: freezed == showAt
          ? _value.showAt
          : showAt // ignore: cast_nullable_to_non_nullable
              as DateTime?,
      service: freezed == service
          ? _value.service
          : service // ignore: cast_nullable_to_non_nullable
              as ServiceDTO?,
    ) as $Val);
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
abstract class _$$_NotificationDTOCopyWith<$Res>
    implements $NotificationDTOCopyWith<$Res> {
  factory _$$_NotificationDTOCopyWith(
          _$_NotificationDTO value, $Res Function(_$_NotificationDTO) then) =
      __$$_NotificationDTOCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String? id,
      String? clientId,
      String? type,
      bool? isViewed,
      String? message,
      DateTime? showAt,
      ServiceDTO? service});

  @override
  $ServiceDTOCopyWith<$Res>? get service;
}

/// @nodoc
class __$$_NotificationDTOCopyWithImpl<$Res>
    extends _$NotificationDTOCopyWithImpl<$Res, _$_NotificationDTO>
    implements _$$_NotificationDTOCopyWith<$Res> {
  __$$_NotificationDTOCopyWithImpl(
      _$_NotificationDTO _value, $Res Function(_$_NotificationDTO) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = freezed,
    Object? clientId = freezed,
    Object? type = freezed,
    Object? isViewed = freezed,
    Object? message = freezed,
    Object? showAt = freezed,
    Object? service = freezed,
  }) {
    return _then(_$_NotificationDTO(
      id: freezed == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String?,
      clientId: freezed == clientId
          ? _value.clientId
          : clientId // ignore: cast_nullable_to_non_nullable
              as String?,
      type: freezed == type
          ? _value.type
          : type // ignore: cast_nullable_to_non_nullable
              as String?,
      isViewed: freezed == isViewed
          ? _value.isViewed
          : isViewed // ignore: cast_nullable_to_non_nullable
              as bool?,
      message: freezed == message
          ? _value.message
          : message // ignore: cast_nullable_to_non_nullable
              as String?,
      showAt: freezed == showAt
          ? _value.showAt
          : showAt // ignore: cast_nullable_to_non_nullable
              as DateTime?,
      service: freezed == service
          ? _value.service
          : service // ignore: cast_nullable_to_non_nullable
              as ServiceDTO?,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_NotificationDTO implements _NotificationDTO {
  const _$_NotificationDTO(
      {this.id,
      this.clientId,
      this.type,
      this.isViewed,
      this.message,
      this.showAt,
      this.service});

  factory _$_NotificationDTO.fromJson(Map<String, dynamic> json) =>
      _$$_NotificationDTOFromJson(json);

  @override
  final String? id;
  @override
  final String? clientId;
  @override
  final String? type;
  @override
  final bool? isViewed;
  @override
  final String? message;
  @override
  final DateTime? showAt;
  @override
  final ServiceDTO? service;

  @override
  String toString() {
    return 'NotificationDTO(id: $id, clientId: $clientId, type: $type, isViewed: $isViewed, message: $message, showAt: $showAt, service: $service)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_NotificationDTO &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.clientId, clientId) ||
                other.clientId == clientId) &&
            (identical(other.type, type) || other.type == type) &&
            (identical(other.isViewed, isViewed) ||
                other.isViewed == isViewed) &&
            (identical(other.message, message) || other.message == message) &&
            (identical(other.showAt, showAt) || other.showAt == showAt) &&
            (identical(other.service, service) || other.service == service));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType, id, clientId, type, isViewed, message, showAt, service);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_NotificationDTOCopyWith<_$_NotificationDTO> get copyWith =>
      __$$_NotificationDTOCopyWithImpl<_$_NotificationDTO>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_NotificationDTOToJson(
      this,
    );
  }
}

abstract class _NotificationDTO implements NotificationDTO {
  const factory _NotificationDTO(
      {final String? id,
      final String? clientId,
      final String? type,
      final bool? isViewed,
      final String? message,
      final DateTime? showAt,
      final ServiceDTO? service}) = _$_NotificationDTO;

  factory _NotificationDTO.fromJson(Map<String, dynamic> json) =
      _$_NotificationDTO.fromJson;

  @override
  String? get id;
  @override
  String? get clientId;
  @override
  String? get type;
  @override
  bool? get isViewed;
  @override
  String? get message;
  @override
  DateTime? get showAt;
  @override
  ServiceDTO? get service;
  @override
  @JsonKey(ignore: true)
  _$$_NotificationDTOCopyWith<_$_NotificationDTO> get copyWith =>
      throw _privateConstructorUsedError;
}
