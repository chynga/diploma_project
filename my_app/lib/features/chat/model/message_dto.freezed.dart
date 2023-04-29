// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'message_dto.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

MessageDTO _$MessageDTOFromJson(Map<String, dynamic> json) {
  return _MessageDTO.fromJson(json);
}

/// @nodoc
mixin _$MessageDTO {
  String? get id => throw _privateConstructorUsedError;
  String? get chatId => throw _privateConstructorUsedError;
  String? get writerId => throw _privateConstructorUsedError;
  String? get body => throw _privateConstructorUsedError;
  bool? get isClient => throw _privateConstructorUsedError;
  DateTime? get createdAt => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $MessageDTOCopyWith<MessageDTO> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $MessageDTOCopyWith<$Res> {
  factory $MessageDTOCopyWith(
          MessageDTO value, $Res Function(MessageDTO) then) =
      _$MessageDTOCopyWithImpl<$Res, MessageDTO>;
  @useResult
  $Res call(
      {String? id,
      String? chatId,
      String? writerId,
      String? body,
      bool? isClient,
      DateTime? createdAt});
}

/// @nodoc
class _$MessageDTOCopyWithImpl<$Res, $Val extends MessageDTO>
    implements $MessageDTOCopyWith<$Res> {
  _$MessageDTOCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = freezed,
    Object? chatId = freezed,
    Object? writerId = freezed,
    Object? body = freezed,
    Object? isClient = freezed,
    Object? createdAt = freezed,
  }) {
    return _then(_value.copyWith(
      id: freezed == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String?,
      chatId: freezed == chatId
          ? _value.chatId
          : chatId // ignore: cast_nullable_to_non_nullable
              as String?,
      writerId: freezed == writerId
          ? _value.writerId
          : writerId // ignore: cast_nullable_to_non_nullable
              as String?,
      body: freezed == body
          ? _value.body
          : body // ignore: cast_nullable_to_non_nullable
              as String?,
      isClient: freezed == isClient
          ? _value.isClient
          : isClient // ignore: cast_nullable_to_non_nullable
              as bool?,
      createdAt: freezed == createdAt
          ? _value.createdAt
          : createdAt // ignore: cast_nullable_to_non_nullable
              as DateTime?,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_MessageDTOCopyWith<$Res>
    implements $MessageDTOCopyWith<$Res> {
  factory _$$_MessageDTOCopyWith(
          _$_MessageDTO value, $Res Function(_$_MessageDTO) then) =
      __$$_MessageDTOCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String? id,
      String? chatId,
      String? writerId,
      String? body,
      bool? isClient,
      DateTime? createdAt});
}

/// @nodoc
class __$$_MessageDTOCopyWithImpl<$Res>
    extends _$MessageDTOCopyWithImpl<$Res, _$_MessageDTO>
    implements _$$_MessageDTOCopyWith<$Res> {
  __$$_MessageDTOCopyWithImpl(
      _$_MessageDTO _value, $Res Function(_$_MessageDTO) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = freezed,
    Object? chatId = freezed,
    Object? writerId = freezed,
    Object? body = freezed,
    Object? isClient = freezed,
    Object? createdAt = freezed,
  }) {
    return _then(_$_MessageDTO(
      id: freezed == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String?,
      chatId: freezed == chatId
          ? _value.chatId
          : chatId // ignore: cast_nullable_to_non_nullable
              as String?,
      writerId: freezed == writerId
          ? _value.writerId
          : writerId // ignore: cast_nullable_to_non_nullable
              as String?,
      body: freezed == body
          ? _value.body
          : body // ignore: cast_nullable_to_non_nullable
              as String?,
      isClient: freezed == isClient
          ? _value.isClient
          : isClient // ignore: cast_nullable_to_non_nullable
              as bool?,
      createdAt: freezed == createdAt
          ? _value.createdAt
          : createdAt // ignore: cast_nullable_to_non_nullable
              as DateTime?,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_MessageDTO implements _MessageDTO {
  const _$_MessageDTO(
      {this.id,
      this.chatId,
      this.writerId,
      this.body,
      this.isClient,
      this.createdAt});

  factory _$_MessageDTO.fromJson(Map<String, dynamic> json) =>
      _$$_MessageDTOFromJson(json);

  @override
  final String? id;
  @override
  final String? chatId;
  @override
  final String? writerId;
  @override
  final String? body;
  @override
  final bool? isClient;
  @override
  final DateTime? createdAt;

  @override
  String toString() {
    return 'MessageDTO(id: $id, chatId: $chatId, writerId: $writerId, body: $body, isClient: $isClient, createdAt: $createdAt)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_MessageDTO &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.chatId, chatId) || other.chatId == chatId) &&
            (identical(other.writerId, writerId) ||
                other.writerId == writerId) &&
            (identical(other.body, body) || other.body == body) &&
            (identical(other.isClient, isClient) ||
                other.isClient == isClient) &&
            (identical(other.createdAt, createdAt) ||
                other.createdAt == createdAt));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode =>
      Object.hash(runtimeType, id, chatId, writerId, body, isClient, createdAt);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_MessageDTOCopyWith<_$_MessageDTO> get copyWith =>
      __$$_MessageDTOCopyWithImpl<_$_MessageDTO>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_MessageDTOToJson(
      this,
    );
  }
}

abstract class _MessageDTO implements MessageDTO {
  const factory _MessageDTO(
      {final String? id,
      final String? chatId,
      final String? writerId,
      final String? body,
      final bool? isClient,
      final DateTime? createdAt}) = _$_MessageDTO;

  factory _MessageDTO.fromJson(Map<String, dynamic> json) =
      _$_MessageDTO.fromJson;

  @override
  String? get id;
  @override
  String? get chatId;
  @override
  String? get writerId;
  @override
  String? get body;
  @override
  bool? get isClient;
  @override
  DateTime? get createdAt;
  @override
  @JsonKey(ignore: true)
  _$$_MessageDTOCopyWith<_$_MessageDTO> get copyWith =>
      throw _privateConstructorUsedError;
}
