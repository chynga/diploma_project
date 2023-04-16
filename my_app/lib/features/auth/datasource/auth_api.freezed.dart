// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'auth_api.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

/// @nodoc
mixin _$AuthApi {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String email, String password) login,
    required TResult Function() profile,
    required TResult Function(
            String email, String password, String phone, String name)
        registration,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String email, String password)? login,
    TResult? Function()? profile,
    TResult? Function(String email, String password, String phone, String name)?
        registration,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String email, String password)? login,
    TResult Function()? profile,
    TResult Function(String email, String password, String phone, String name)?
        registration,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Login value) login,
    required TResult Function(_Profile value) profile,
    required TResult Function(_Registration value) registration,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Login value)? login,
    TResult? Function(_Profile value)? profile,
    TResult? Function(_Registration value)? registration,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Login value)? login,
    TResult Function(_Profile value)? profile,
    TResult Function(_Registration value)? registration,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $AuthApiCopyWith<$Res> {
  factory $AuthApiCopyWith(AuthApi value, $Res Function(AuthApi) then) =
      _$AuthApiCopyWithImpl<$Res, AuthApi>;
}

/// @nodoc
class _$AuthApiCopyWithImpl<$Res, $Val extends AuthApi>
    implements $AuthApiCopyWith<$Res> {
  _$AuthApiCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$_LoginCopyWith<$Res> {
  factory _$$_LoginCopyWith(_$_Login value, $Res Function(_$_Login) then) =
      __$$_LoginCopyWithImpl<$Res>;
  @useResult
  $Res call({String email, String password});
}

/// @nodoc
class __$$_LoginCopyWithImpl<$Res> extends _$AuthApiCopyWithImpl<$Res, _$_Login>
    implements _$$_LoginCopyWith<$Res> {
  __$$_LoginCopyWithImpl(_$_Login _value, $Res Function(_$_Login) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? email = null,
    Object? password = null,
  }) {
    return _then(_$_Login(
      email: null == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String,
      password: null == password
          ? _value.password
          : password // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_Login extends _Login {
  const _$_Login({required this.email, required this.password}) : super._();

  @override
  final String email;
  @override
  final String password;

  @override
  String toString() {
    return 'AuthApi.login(email: $email, password: $password)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Login &&
            (identical(other.email, email) || other.email == email) &&
            (identical(other.password, password) ||
                other.password == password));
  }

  @override
  int get hashCode => Object.hash(runtimeType, email, password);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_LoginCopyWith<_$_Login> get copyWith =>
      __$$_LoginCopyWithImpl<_$_Login>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String email, String password) login,
    required TResult Function() profile,
    required TResult Function(
            String email, String password, String phone, String name)
        registration,
  }) {
    return login(email, password);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String email, String password)? login,
    TResult? Function()? profile,
    TResult? Function(String email, String password, String phone, String name)?
        registration,
  }) {
    return login?.call(email, password);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String email, String password)? login,
    TResult Function()? profile,
    TResult Function(String email, String password, String phone, String name)?
        registration,
    required TResult orElse(),
  }) {
    if (login != null) {
      return login(email, password);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Login value) login,
    required TResult Function(_Profile value) profile,
    required TResult Function(_Registration value) registration,
  }) {
    return login(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Login value)? login,
    TResult? Function(_Profile value)? profile,
    TResult? Function(_Registration value)? registration,
  }) {
    return login?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Login value)? login,
    TResult Function(_Profile value)? profile,
    TResult Function(_Registration value)? registration,
    required TResult orElse(),
  }) {
    if (login != null) {
      return login(this);
    }
    return orElse();
  }
}

abstract class _Login extends AuthApi {
  const factory _Login(
      {required final String email, required final String password}) = _$_Login;
  const _Login._() : super._();

  String get email;
  String get password;
  @JsonKey(ignore: true)
  _$$_LoginCopyWith<_$_Login> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_ProfileCopyWith<$Res> {
  factory _$$_ProfileCopyWith(
          _$_Profile value, $Res Function(_$_Profile) then) =
      __$$_ProfileCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_ProfileCopyWithImpl<$Res>
    extends _$AuthApiCopyWithImpl<$Res, _$_Profile>
    implements _$$_ProfileCopyWith<$Res> {
  __$$_ProfileCopyWithImpl(_$_Profile _value, $Res Function(_$_Profile) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_Profile extends _Profile {
  const _$_Profile() : super._();

  @override
  String toString() {
    return 'AuthApi.profile()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$_Profile);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String email, String password) login,
    required TResult Function() profile,
    required TResult Function(
            String email, String password, String phone, String name)
        registration,
  }) {
    return profile();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String email, String password)? login,
    TResult? Function()? profile,
    TResult? Function(String email, String password, String phone, String name)?
        registration,
  }) {
    return profile?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String email, String password)? login,
    TResult Function()? profile,
    TResult Function(String email, String password, String phone, String name)?
        registration,
    required TResult orElse(),
  }) {
    if (profile != null) {
      return profile();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Login value) login,
    required TResult Function(_Profile value) profile,
    required TResult Function(_Registration value) registration,
  }) {
    return profile(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Login value)? login,
    TResult? Function(_Profile value)? profile,
    TResult? Function(_Registration value)? registration,
  }) {
    return profile?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Login value)? login,
    TResult Function(_Profile value)? profile,
    TResult Function(_Registration value)? registration,
    required TResult orElse(),
  }) {
    if (profile != null) {
      return profile(this);
    }
    return orElse();
  }
}

abstract class _Profile extends AuthApi {
  const factory _Profile() = _$_Profile;
  const _Profile._() : super._();
}

/// @nodoc
abstract class _$$_RegistrationCopyWith<$Res> {
  factory _$$_RegistrationCopyWith(
          _$_Registration value, $Res Function(_$_Registration) then) =
      __$$_RegistrationCopyWithImpl<$Res>;
  @useResult
  $Res call({String email, String password, String phone, String name});
}

/// @nodoc
class __$$_RegistrationCopyWithImpl<$Res>
    extends _$AuthApiCopyWithImpl<$Res, _$_Registration>
    implements _$$_RegistrationCopyWith<$Res> {
  __$$_RegistrationCopyWithImpl(
      _$_Registration _value, $Res Function(_$_Registration) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? email = null,
    Object? password = null,
    Object? phone = null,
    Object? name = null,
  }) {
    return _then(_$_Registration(
      email: null == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String,
      password: null == password
          ? _value.password
          : password // ignore: cast_nullable_to_non_nullable
              as String,
      phone: null == phone
          ? _value.phone
          : phone // ignore: cast_nullable_to_non_nullable
              as String,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_Registration extends _Registration {
  const _$_Registration(
      {required this.email,
      required this.password,
      required this.phone,
      required this.name})
      : super._();

  @override
  final String email;
  @override
  final String password;
  @override
  final String phone;
  @override
  final String name;

  @override
  String toString() {
    return 'AuthApi.registration(email: $email, password: $password, phone: $phone, name: $name)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Registration &&
            (identical(other.email, email) || other.email == email) &&
            (identical(other.password, password) ||
                other.password == password) &&
            (identical(other.phone, phone) || other.phone == phone) &&
            (identical(other.name, name) || other.name == name));
  }

  @override
  int get hashCode => Object.hash(runtimeType, email, password, phone, name);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_RegistrationCopyWith<_$_Registration> get copyWith =>
      __$$_RegistrationCopyWithImpl<_$_Registration>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String email, String password) login,
    required TResult Function() profile,
    required TResult Function(
            String email, String password, String phone, String name)
        registration,
  }) {
    return registration(email, password, phone, name);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String email, String password)? login,
    TResult? Function()? profile,
    TResult? Function(String email, String password, String phone, String name)?
        registration,
  }) {
    return registration?.call(email, password, phone, name);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String email, String password)? login,
    TResult Function()? profile,
    TResult Function(String email, String password, String phone, String name)?
        registration,
    required TResult orElse(),
  }) {
    if (registration != null) {
      return registration(email, password, phone, name);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Login value) login,
    required TResult Function(_Profile value) profile,
    required TResult Function(_Registration value) registration,
  }) {
    return registration(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Login value)? login,
    TResult? Function(_Profile value)? profile,
    TResult? Function(_Registration value)? registration,
  }) {
    return registration?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Login value)? login,
    TResult Function(_Profile value)? profile,
    TResult Function(_Registration value)? registration,
    required TResult orElse(),
  }) {
    if (registration != null) {
      return registration(this);
    }
    return orElse();
  }
}

abstract class _Registration extends AuthApi {
  const factory _Registration(
      {required final String email,
      required final String password,
      required final String phone,
      required final String name}) = _$_Registration;
  const _Registration._() : super._();

  String get email;
  String get password;
  String get phone;
  String get name;
  @JsonKey(ignore: true)
  _$$_RegistrationCopyWith<_$_Registration> get copyWith =>
      throw _privateConstructorUsedError;
}
