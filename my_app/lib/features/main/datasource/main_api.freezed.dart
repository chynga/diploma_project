// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'main_api.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

/// @nodoc
mixin _$MainApi {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() service,
    required TResult Function() doctor,
    required TResult Function(String id) doctorWithId,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? service,
    TResult? Function()? doctor,
    TResult? Function(String id)? doctorWithId,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? service,
    TResult Function()? doctor,
    TResult Function(String id)? doctorWithId,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Service value) service,
    required TResult Function(_Doctor value) doctor,
    required TResult Function(_DoctorWithId value) doctorWithId,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Service value)? service,
    TResult? Function(_Doctor value)? doctor,
    TResult? Function(_DoctorWithId value)? doctorWithId,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Service value)? service,
    TResult Function(_Doctor value)? doctor,
    TResult Function(_DoctorWithId value)? doctorWithId,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $MainApiCopyWith<$Res> {
  factory $MainApiCopyWith(MainApi value, $Res Function(MainApi) then) =
      _$MainApiCopyWithImpl<$Res, MainApi>;
}

/// @nodoc
class _$MainApiCopyWithImpl<$Res, $Val extends MainApi>
    implements $MainApiCopyWith<$Res> {
  _$MainApiCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$_ServiceCopyWith<$Res> {
  factory _$$_ServiceCopyWith(
          _$_Service value, $Res Function(_$_Service) then) =
      __$$_ServiceCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_ServiceCopyWithImpl<$Res>
    extends _$MainApiCopyWithImpl<$Res, _$_Service>
    implements _$$_ServiceCopyWith<$Res> {
  __$$_ServiceCopyWithImpl(_$_Service _value, $Res Function(_$_Service) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_Service extends _Service {
  const _$_Service() : super._();

  @override
  String toString() {
    return 'MainApi.service()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$_Service);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() service,
    required TResult Function() doctor,
    required TResult Function(String id) doctorWithId,
  }) {
    return service();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? service,
    TResult? Function()? doctor,
    TResult? Function(String id)? doctorWithId,
  }) {
    return service?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? service,
    TResult Function()? doctor,
    TResult Function(String id)? doctorWithId,
    required TResult orElse(),
  }) {
    if (service != null) {
      return service();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Service value) service,
    required TResult Function(_Doctor value) doctor,
    required TResult Function(_DoctorWithId value) doctorWithId,
  }) {
    return service(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Service value)? service,
    TResult? Function(_Doctor value)? doctor,
    TResult? Function(_DoctorWithId value)? doctorWithId,
  }) {
    return service?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Service value)? service,
    TResult Function(_Doctor value)? doctor,
    TResult Function(_DoctorWithId value)? doctorWithId,
    required TResult orElse(),
  }) {
    if (service != null) {
      return service(this);
    }
    return orElse();
  }
}

abstract class _Service extends MainApi {
  const factory _Service() = _$_Service;
  const _Service._() : super._();
}

/// @nodoc
abstract class _$$_DoctorCopyWith<$Res> {
  factory _$$_DoctorCopyWith(_$_Doctor value, $Res Function(_$_Doctor) then) =
      __$$_DoctorCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_DoctorCopyWithImpl<$Res>
    extends _$MainApiCopyWithImpl<$Res, _$_Doctor>
    implements _$$_DoctorCopyWith<$Res> {
  __$$_DoctorCopyWithImpl(_$_Doctor _value, $Res Function(_$_Doctor) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_Doctor extends _Doctor {
  const _$_Doctor() : super._();

  @override
  String toString() {
    return 'MainApi.doctor()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$_Doctor);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() service,
    required TResult Function() doctor,
    required TResult Function(String id) doctorWithId,
  }) {
    return doctor();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? service,
    TResult? Function()? doctor,
    TResult? Function(String id)? doctorWithId,
  }) {
    return doctor?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? service,
    TResult Function()? doctor,
    TResult Function(String id)? doctorWithId,
    required TResult orElse(),
  }) {
    if (doctor != null) {
      return doctor();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Service value) service,
    required TResult Function(_Doctor value) doctor,
    required TResult Function(_DoctorWithId value) doctorWithId,
  }) {
    return doctor(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Service value)? service,
    TResult? Function(_Doctor value)? doctor,
    TResult? Function(_DoctorWithId value)? doctorWithId,
  }) {
    return doctor?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Service value)? service,
    TResult Function(_Doctor value)? doctor,
    TResult Function(_DoctorWithId value)? doctorWithId,
    required TResult orElse(),
  }) {
    if (doctor != null) {
      return doctor(this);
    }
    return orElse();
  }
}

abstract class _Doctor extends MainApi {
  const factory _Doctor() = _$_Doctor;
  const _Doctor._() : super._();
}

/// @nodoc
abstract class _$$_DoctorWithIdCopyWith<$Res> {
  factory _$$_DoctorWithIdCopyWith(
          _$_DoctorWithId value, $Res Function(_$_DoctorWithId) then) =
      __$$_DoctorWithIdCopyWithImpl<$Res>;
  @useResult
  $Res call({String id});
}

/// @nodoc
class __$$_DoctorWithIdCopyWithImpl<$Res>
    extends _$MainApiCopyWithImpl<$Res, _$_DoctorWithId>
    implements _$$_DoctorWithIdCopyWith<$Res> {
  __$$_DoctorWithIdCopyWithImpl(
      _$_DoctorWithId _value, $Res Function(_$_DoctorWithId) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
  }) {
    return _then(_$_DoctorWithId(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_DoctorWithId extends _DoctorWithId {
  const _$_DoctorWithId({required this.id}) : super._();

  @override
  final String id;

  @override
  String toString() {
    return 'MainApi.doctorWithId(id: $id)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_DoctorWithId &&
            (identical(other.id, id) || other.id == id));
  }

  @override
  int get hashCode => Object.hash(runtimeType, id);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_DoctorWithIdCopyWith<_$_DoctorWithId> get copyWith =>
      __$$_DoctorWithIdCopyWithImpl<_$_DoctorWithId>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() service,
    required TResult Function() doctor,
    required TResult Function(String id) doctorWithId,
  }) {
    return doctorWithId(id);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? service,
    TResult? Function()? doctor,
    TResult? Function(String id)? doctorWithId,
  }) {
    return doctorWithId?.call(id);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? service,
    TResult Function()? doctor,
    TResult Function(String id)? doctorWithId,
    required TResult orElse(),
  }) {
    if (doctorWithId != null) {
      return doctorWithId(id);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Service value) service,
    required TResult Function(_Doctor value) doctor,
    required TResult Function(_DoctorWithId value) doctorWithId,
  }) {
    return doctorWithId(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Service value)? service,
    TResult? Function(_Doctor value)? doctor,
    TResult? Function(_DoctorWithId value)? doctorWithId,
  }) {
    return doctorWithId?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Service value)? service,
    TResult Function(_Doctor value)? doctor,
    TResult Function(_DoctorWithId value)? doctorWithId,
    required TResult orElse(),
  }) {
    if (doctorWithId != null) {
      return doctorWithId(this);
    }
    return orElse();
  }
}

abstract class _DoctorWithId extends MainApi {
  const factory _DoctorWithId({required final String id}) = _$_DoctorWithId;
  const _DoctorWithId._() : super._();

  String get id;
  @JsonKey(ignore: true)
  _$$_DoctorWithIdCopyWith<_$_DoctorWithId> get copyWith =>
      throw _privateConstructorUsedError;
}
