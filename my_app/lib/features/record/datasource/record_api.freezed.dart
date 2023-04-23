// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'record_api.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

/// @nodoc
mixin _$RecordApi {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() record,
    required TResult Function(String doctorId, String serviceId, int timeStamp,
            String clientMessage)
        makeRecord,
    required TResult Function(String doctorId, String serviceId, int date)
        freeSlots,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? record,
    TResult? Function(String doctorId, String serviceId, int timeStamp,
            String clientMessage)?
        makeRecord,
    TResult? Function(String doctorId, String serviceId, int date)? freeSlots,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? record,
    TResult Function(String doctorId, String serviceId, int timeStamp,
            String clientMessage)?
        makeRecord,
    TResult Function(String doctorId, String serviceId, int date)? freeSlots,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Record value) record,
    required TResult Function(_MakeRecord value) makeRecord,
    required TResult Function(_FreeSlots value) freeSlots,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Record value)? record,
    TResult? Function(_MakeRecord value)? makeRecord,
    TResult? Function(_FreeSlots value)? freeSlots,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Record value)? record,
    TResult Function(_MakeRecord value)? makeRecord,
    TResult Function(_FreeSlots value)? freeSlots,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $RecordApiCopyWith<$Res> {
  factory $RecordApiCopyWith(RecordApi value, $Res Function(RecordApi) then) =
      _$RecordApiCopyWithImpl<$Res, RecordApi>;
}

/// @nodoc
class _$RecordApiCopyWithImpl<$Res, $Val extends RecordApi>
    implements $RecordApiCopyWith<$Res> {
  _$RecordApiCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$_RecordCopyWith<$Res> {
  factory _$$_RecordCopyWith(_$_Record value, $Res Function(_$_Record) then) =
      __$$_RecordCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_RecordCopyWithImpl<$Res>
    extends _$RecordApiCopyWithImpl<$Res, _$_Record>
    implements _$$_RecordCopyWith<$Res> {
  __$$_RecordCopyWithImpl(_$_Record _value, $Res Function(_$_Record) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_Record extends _Record {
  const _$_Record() : super._();

  @override
  String toString() {
    return 'RecordApi.record()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$_Record);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() record,
    required TResult Function(String doctorId, String serviceId, int timeStamp,
            String clientMessage)
        makeRecord,
    required TResult Function(String doctorId, String serviceId, int date)
        freeSlots,
  }) {
    return record();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? record,
    TResult? Function(String doctorId, String serviceId, int timeStamp,
            String clientMessage)?
        makeRecord,
    TResult? Function(String doctorId, String serviceId, int date)? freeSlots,
  }) {
    return record?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? record,
    TResult Function(String doctorId, String serviceId, int timeStamp,
            String clientMessage)?
        makeRecord,
    TResult Function(String doctorId, String serviceId, int date)? freeSlots,
    required TResult orElse(),
  }) {
    if (record != null) {
      return record();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Record value) record,
    required TResult Function(_MakeRecord value) makeRecord,
    required TResult Function(_FreeSlots value) freeSlots,
  }) {
    return record(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Record value)? record,
    TResult? Function(_MakeRecord value)? makeRecord,
    TResult? Function(_FreeSlots value)? freeSlots,
  }) {
    return record?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Record value)? record,
    TResult Function(_MakeRecord value)? makeRecord,
    TResult Function(_FreeSlots value)? freeSlots,
    required TResult orElse(),
  }) {
    if (record != null) {
      return record(this);
    }
    return orElse();
  }
}

abstract class _Record extends RecordApi {
  const factory _Record() = _$_Record;
  const _Record._() : super._();
}

/// @nodoc
abstract class _$$_MakeRecordCopyWith<$Res> {
  factory _$$_MakeRecordCopyWith(
          _$_MakeRecord value, $Res Function(_$_MakeRecord) then) =
      __$$_MakeRecordCopyWithImpl<$Res>;
  @useResult
  $Res call(
      {String doctorId, String serviceId, int timeStamp, String clientMessage});
}

/// @nodoc
class __$$_MakeRecordCopyWithImpl<$Res>
    extends _$RecordApiCopyWithImpl<$Res, _$_MakeRecord>
    implements _$$_MakeRecordCopyWith<$Res> {
  __$$_MakeRecordCopyWithImpl(
      _$_MakeRecord _value, $Res Function(_$_MakeRecord) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? doctorId = null,
    Object? serviceId = null,
    Object? timeStamp = null,
    Object? clientMessage = null,
  }) {
    return _then(_$_MakeRecord(
      doctorId: null == doctorId
          ? _value.doctorId
          : doctorId // ignore: cast_nullable_to_non_nullable
              as String,
      serviceId: null == serviceId
          ? _value.serviceId
          : serviceId // ignore: cast_nullable_to_non_nullable
              as String,
      timeStamp: null == timeStamp
          ? _value.timeStamp
          : timeStamp // ignore: cast_nullable_to_non_nullable
              as int,
      clientMessage: null == clientMessage
          ? _value.clientMessage
          : clientMessage // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_MakeRecord extends _MakeRecord {
  const _$_MakeRecord(
      {required this.doctorId,
      required this.serviceId,
      required this.timeStamp,
      required this.clientMessage})
      : super._();

  @override
  final String doctorId;
  @override
  final String serviceId;
  @override
  final int timeStamp;
  @override
  final String clientMessage;

  @override
  String toString() {
    return 'RecordApi.makeRecord(doctorId: $doctorId, serviceId: $serviceId, timeStamp: $timeStamp, clientMessage: $clientMessage)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_MakeRecord &&
            (identical(other.doctorId, doctorId) ||
                other.doctorId == doctorId) &&
            (identical(other.serviceId, serviceId) ||
                other.serviceId == serviceId) &&
            (identical(other.timeStamp, timeStamp) ||
                other.timeStamp == timeStamp) &&
            (identical(other.clientMessage, clientMessage) ||
                other.clientMessage == clientMessage));
  }

  @override
  int get hashCode =>
      Object.hash(runtimeType, doctorId, serviceId, timeStamp, clientMessage);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_MakeRecordCopyWith<_$_MakeRecord> get copyWith =>
      __$$_MakeRecordCopyWithImpl<_$_MakeRecord>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() record,
    required TResult Function(String doctorId, String serviceId, int timeStamp,
            String clientMessage)
        makeRecord,
    required TResult Function(String doctorId, String serviceId, int date)
        freeSlots,
  }) {
    return makeRecord(doctorId, serviceId, timeStamp, clientMessage);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? record,
    TResult? Function(String doctorId, String serviceId, int timeStamp,
            String clientMessage)?
        makeRecord,
    TResult? Function(String doctorId, String serviceId, int date)? freeSlots,
  }) {
    return makeRecord?.call(doctorId, serviceId, timeStamp, clientMessage);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? record,
    TResult Function(String doctorId, String serviceId, int timeStamp,
            String clientMessage)?
        makeRecord,
    TResult Function(String doctorId, String serviceId, int date)? freeSlots,
    required TResult orElse(),
  }) {
    if (makeRecord != null) {
      return makeRecord(doctorId, serviceId, timeStamp, clientMessage);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Record value) record,
    required TResult Function(_MakeRecord value) makeRecord,
    required TResult Function(_FreeSlots value) freeSlots,
  }) {
    return makeRecord(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Record value)? record,
    TResult? Function(_MakeRecord value)? makeRecord,
    TResult? Function(_FreeSlots value)? freeSlots,
  }) {
    return makeRecord?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Record value)? record,
    TResult Function(_MakeRecord value)? makeRecord,
    TResult Function(_FreeSlots value)? freeSlots,
    required TResult orElse(),
  }) {
    if (makeRecord != null) {
      return makeRecord(this);
    }
    return orElse();
  }
}

abstract class _MakeRecord extends RecordApi {
  const factory _MakeRecord(
      {required final String doctorId,
      required final String serviceId,
      required final int timeStamp,
      required final String clientMessage}) = _$_MakeRecord;
  const _MakeRecord._() : super._();

  String get doctorId;
  String get serviceId;
  int get timeStamp;
  String get clientMessage;
  @JsonKey(ignore: true)
  _$$_MakeRecordCopyWith<_$_MakeRecord> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_FreeSlotsCopyWith<$Res> {
  factory _$$_FreeSlotsCopyWith(
          _$_FreeSlots value, $Res Function(_$_FreeSlots) then) =
      __$$_FreeSlotsCopyWithImpl<$Res>;
  @useResult
  $Res call({String doctorId, String serviceId, int date});
}

/// @nodoc
class __$$_FreeSlotsCopyWithImpl<$Res>
    extends _$RecordApiCopyWithImpl<$Res, _$_FreeSlots>
    implements _$$_FreeSlotsCopyWith<$Res> {
  __$$_FreeSlotsCopyWithImpl(
      _$_FreeSlots _value, $Res Function(_$_FreeSlots) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? doctorId = null,
    Object? serviceId = null,
    Object? date = null,
  }) {
    return _then(_$_FreeSlots(
      doctorId: null == doctorId
          ? _value.doctorId
          : doctorId // ignore: cast_nullable_to_non_nullable
              as String,
      serviceId: null == serviceId
          ? _value.serviceId
          : serviceId // ignore: cast_nullable_to_non_nullable
              as String,
      date: null == date
          ? _value.date
          : date // ignore: cast_nullable_to_non_nullable
              as int,
    ));
  }
}

/// @nodoc

class _$_FreeSlots extends _FreeSlots {
  const _$_FreeSlots(
      {required this.doctorId, required this.serviceId, required this.date})
      : super._();

  @override
  final String doctorId;
  @override
  final String serviceId;
  @override
  final int date;

  @override
  String toString() {
    return 'RecordApi.freeSlots(doctorId: $doctorId, serviceId: $serviceId, date: $date)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_FreeSlots &&
            (identical(other.doctorId, doctorId) ||
                other.doctorId == doctorId) &&
            (identical(other.serviceId, serviceId) ||
                other.serviceId == serviceId) &&
            (identical(other.date, date) || other.date == date));
  }

  @override
  int get hashCode => Object.hash(runtimeType, doctorId, serviceId, date);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_FreeSlotsCopyWith<_$_FreeSlots> get copyWith =>
      __$$_FreeSlotsCopyWithImpl<_$_FreeSlots>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() record,
    required TResult Function(String doctorId, String serviceId, int timeStamp,
            String clientMessage)
        makeRecord,
    required TResult Function(String doctorId, String serviceId, int date)
        freeSlots,
  }) {
    return freeSlots(doctorId, serviceId, date);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? record,
    TResult? Function(String doctorId, String serviceId, int timeStamp,
            String clientMessage)?
        makeRecord,
    TResult? Function(String doctorId, String serviceId, int date)? freeSlots,
  }) {
    return freeSlots?.call(doctorId, serviceId, date);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? record,
    TResult Function(String doctorId, String serviceId, int timeStamp,
            String clientMessage)?
        makeRecord,
    TResult Function(String doctorId, String serviceId, int date)? freeSlots,
    required TResult orElse(),
  }) {
    if (freeSlots != null) {
      return freeSlots(doctorId, serviceId, date);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Record value) record,
    required TResult Function(_MakeRecord value) makeRecord,
    required TResult Function(_FreeSlots value) freeSlots,
  }) {
    return freeSlots(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Record value)? record,
    TResult? Function(_MakeRecord value)? makeRecord,
    TResult? Function(_FreeSlots value)? freeSlots,
  }) {
    return freeSlots?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Record value)? record,
    TResult Function(_MakeRecord value)? makeRecord,
    TResult Function(_FreeSlots value)? freeSlots,
    required TResult orElse(),
  }) {
    if (freeSlots != null) {
      return freeSlots(this);
    }
    return orElse();
  }
}

abstract class _FreeSlots extends RecordApi {
  const factory _FreeSlots(
      {required final String doctorId,
      required final String serviceId,
      required final int date}) = _$_FreeSlots;
  const _FreeSlots._() : super._();

  String get doctorId;
  String get serviceId;
  int get date;
  @JsonKey(ignore: true)
  _$$_FreeSlotsCopyWith<_$_FreeSlots> get copyWith =>
      throw _privateConstructorUsedError;
}
