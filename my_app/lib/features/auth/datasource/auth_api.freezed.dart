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
    required TResult Function() healthInfo,
    required TResult Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)
        editProfile,
    required TResult Function(
            String email, String password, String phone, String name)
        registration,
    required TResult Function(String email) sendCode,
    required TResult Function(String email, String code) checkCode,
    required TResult Function(String email, String code, String password)
        newPassword,
    required TResult Function(String deviceToken) sendDeviceToken,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String email, String password)? login,
    TResult? Function()? profile,
    TResult? Function()? healthInfo,
    TResult? Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)?
        editProfile,
    TResult? Function(String email, String password, String phone, String name)?
        registration,
    TResult? Function(String email)? sendCode,
    TResult? Function(String email, String code)? checkCode,
    TResult? Function(String email, String code, String password)? newPassword,
    TResult? Function(String deviceToken)? sendDeviceToken,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String email, String password)? login,
    TResult Function()? profile,
    TResult Function()? healthInfo,
    TResult Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)?
        editProfile,
    TResult Function(String email, String password, String phone, String name)?
        registration,
    TResult Function(String email)? sendCode,
    TResult Function(String email, String code)? checkCode,
    TResult Function(String email, String code, String password)? newPassword,
    TResult Function(String deviceToken)? sendDeviceToken,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Login value) login,
    required TResult Function(_Profile value) profile,
    required TResult Function(_HealthInfo value) healthInfo,
    required TResult Function(_EditProfile value) editProfile,
    required TResult Function(_Registration value) registration,
    required TResult Function(_SendCode value) sendCode,
    required TResult Function(_CheckCode value) checkCode,
    required TResult Function(_NewCode value) newPassword,
    required TResult Function(_SendDeviceToken value) sendDeviceToken,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Login value)? login,
    TResult? Function(_Profile value)? profile,
    TResult? Function(_HealthInfo value)? healthInfo,
    TResult? Function(_EditProfile value)? editProfile,
    TResult? Function(_Registration value)? registration,
    TResult? Function(_SendCode value)? sendCode,
    TResult? Function(_CheckCode value)? checkCode,
    TResult? Function(_NewCode value)? newPassword,
    TResult? Function(_SendDeviceToken value)? sendDeviceToken,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Login value)? login,
    TResult Function(_Profile value)? profile,
    TResult Function(_HealthInfo value)? healthInfo,
    TResult Function(_EditProfile value)? editProfile,
    TResult Function(_Registration value)? registration,
    TResult Function(_SendCode value)? sendCode,
    TResult Function(_CheckCode value)? checkCode,
    TResult Function(_NewCode value)? newPassword,
    TResult Function(_SendDeviceToken value)? sendDeviceToken,
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
    required TResult Function() healthInfo,
    required TResult Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)
        editProfile,
    required TResult Function(
            String email, String password, String phone, String name)
        registration,
    required TResult Function(String email) sendCode,
    required TResult Function(String email, String code) checkCode,
    required TResult Function(String email, String code, String password)
        newPassword,
    required TResult Function(String deviceToken) sendDeviceToken,
  }) {
    return login(email, password);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String email, String password)? login,
    TResult? Function()? profile,
    TResult? Function()? healthInfo,
    TResult? Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)?
        editProfile,
    TResult? Function(String email, String password, String phone, String name)?
        registration,
    TResult? Function(String email)? sendCode,
    TResult? Function(String email, String code)? checkCode,
    TResult? Function(String email, String code, String password)? newPassword,
    TResult? Function(String deviceToken)? sendDeviceToken,
  }) {
    return login?.call(email, password);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String email, String password)? login,
    TResult Function()? profile,
    TResult Function()? healthInfo,
    TResult Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)?
        editProfile,
    TResult Function(String email, String password, String phone, String name)?
        registration,
    TResult Function(String email)? sendCode,
    TResult Function(String email, String code)? checkCode,
    TResult Function(String email, String code, String password)? newPassword,
    TResult Function(String deviceToken)? sendDeviceToken,
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
    required TResult Function(_HealthInfo value) healthInfo,
    required TResult Function(_EditProfile value) editProfile,
    required TResult Function(_Registration value) registration,
    required TResult Function(_SendCode value) sendCode,
    required TResult Function(_CheckCode value) checkCode,
    required TResult Function(_NewCode value) newPassword,
    required TResult Function(_SendDeviceToken value) sendDeviceToken,
  }) {
    return login(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Login value)? login,
    TResult? Function(_Profile value)? profile,
    TResult? Function(_HealthInfo value)? healthInfo,
    TResult? Function(_EditProfile value)? editProfile,
    TResult? Function(_Registration value)? registration,
    TResult? Function(_SendCode value)? sendCode,
    TResult? Function(_CheckCode value)? checkCode,
    TResult? Function(_NewCode value)? newPassword,
    TResult? Function(_SendDeviceToken value)? sendDeviceToken,
  }) {
    return login?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Login value)? login,
    TResult Function(_Profile value)? profile,
    TResult Function(_HealthInfo value)? healthInfo,
    TResult Function(_EditProfile value)? editProfile,
    TResult Function(_Registration value)? registration,
    TResult Function(_SendCode value)? sendCode,
    TResult Function(_CheckCode value)? checkCode,
    TResult Function(_NewCode value)? newPassword,
    TResult Function(_SendDeviceToken value)? sendDeviceToken,
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
    required TResult Function() healthInfo,
    required TResult Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)
        editProfile,
    required TResult Function(
            String email, String password, String phone, String name)
        registration,
    required TResult Function(String email) sendCode,
    required TResult Function(String email, String code) checkCode,
    required TResult Function(String email, String code, String password)
        newPassword,
    required TResult Function(String deviceToken) sendDeviceToken,
  }) {
    return profile();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String email, String password)? login,
    TResult? Function()? profile,
    TResult? Function()? healthInfo,
    TResult? Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)?
        editProfile,
    TResult? Function(String email, String password, String phone, String name)?
        registration,
    TResult? Function(String email)? sendCode,
    TResult? Function(String email, String code)? checkCode,
    TResult? Function(String email, String code, String password)? newPassword,
    TResult? Function(String deviceToken)? sendDeviceToken,
  }) {
    return profile?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String email, String password)? login,
    TResult Function()? profile,
    TResult Function()? healthInfo,
    TResult Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)?
        editProfile,
    TResult Function(String email, String password, String phone, String name)?
        registration,
    TResult Function(String email)? sendCode,
    TResult Function(String email, String code)? checkCode,
    TResult Function(String email, String code, String password)? newPassword,
    TResult Function(String deviceToken)? sendDeviceToken,
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
    required TResult Function(_HealthInfo value) healthInfo,
    required TResult Function(_EditProfile value) editProfile,
    required TResult Function(_Registration value) registration,
    required TResult Function(_SendCode value) sendCode,
    required TResult Function(_CheckCode value) checkCode,
    required TResult Function(_NewCode value) newPassword,
    required TResult Function(_SendDeviceToken value) sendDeviceToken,
  }) {
    return profile(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Login value)? login,
    TResult? Function(_Profile value)? profile,
    TResult? Function(_HealthInfo value)? healthInfo,
    TResult? Function(_EditProfile value)? editProfile,
    TResult? Function(_Registration value)? registration,
    TResult? Function(_SendCode value)? sendCode,
    TResult? Function(_CheckCode value)? checkCode,
    TResult? Function(_NewCode value)? newPassword,
    TResult? Function(_SendDeviceToken value)? sendDeviceToken,
  }) {
    return profile?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Login value)? login,
    TResult Function(_Profile value)? profile,
    TResult Function(_HealthInfo value)? healthInfo,
    TResult Function(_EditProfile value)? editProfile,
    TResult Function(_Registration value)? registration,
    TResult Function(_SendCode value)? sendCode,
    TResult Function(_CheckCode value)? checkCode,
    TResult Function(_NewCode value)? newPassword,
    TResult Function(_SendDeviceToken value)? sendDeviceToken,
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
abstract class _$$_HealthInfoCopyWith<$Res> {
  factory _$$_HealthInfoCopyWith(
          _$_HealthInfo value, $Res Function(_$_HealthInfo) then) =
      __$$_HealthInfoCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_HealthInfoCopyWithImpl<$Res>
    extends _$AuthApiCopyWithImpl<$Res, _$_HealthInfo>
    implements _$$_HealthInfoCopyWith<$Res> {
  __$$_HealthInfoCopyWithImpl(
      _$_HealthInfo _value, $Res Function(_$_HealthInfo) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_HealthInfo extends _HealthInfo {
  const _$_HealthInfo() : super._();

  @override
  String toString() {
    return 'AuthApi.healthInfo()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$_HealthInfo);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String email, String password) login,
    required TResult Function() profile,
    required TResult Function() healthInfo,
    required TResult Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)
        editProfile,
    required TResult Function(
            String email, String password, String phone, String name)
        registration,
    required TResult Function(String email) sendCode,
    required TResult Function(String email, String code) checkCode,
    required TResult Function(String email, String code, String password)
        newPassword,
    required TResult Function(String deviceToken) sendDeviceToken,
  }) {
    return healthInfo();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String email, String password)? login,
    TResult? Function()? profile,
    TResult? Function()? healthInfo,
    TResult? Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)?
        editProfile,
    TResult? Function(String email, String password, String phone, String name)?
        registration,
    TResult? Function(String email)? sendCode,
    TResult? Function(String email, String code)? checkCode,
    TResult? Function(String email, String code, String password)? newPassword,
    TResult? Function(String deviceToken)? sendDeviceToken,
  }) {
    return healthInfo?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String email, String password)? login,
    TResult Function()? profile,
    TResult Function()? healthInfo,
    TResult Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)?
        editProfile,
    TResult Function(String email, String password, String phone, String name)?
        registration,
    TResult Function(String email)? sendCode,
    TResult Function(String email, String code)? checkCode,
    TResult Function(String email, String code, String password)? newPassword,
    TResult Function(String deviceToken)? sendDeviceToken,
    required TResult orElse(),
  }) {
    if (healthInfo != null) {
      return healthInfo();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Login value) login,
    required TResult Function(_Profile value) profile,
    required TResult Function(_HealthInfo value) healthInfo,
    required TResult Function(_EditProfile value) editProfile,
    required TResult Function(_Registration value) registration,
    required TResult Function(_SendCode value) sendCode,
    required TResult Function(_CheckCode value) checkCode,
    required TResult Function(_NewCode value) newPassword,
    required TResult Function(_SendDeviceToken value) sendDeviceToken,
  }) {
    return healthInfo(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Login value)? login,
    TResult? Function(_Profile value)? profile,
    TResult? Function(_HealthInfo value)? healthInfo,
    TResult? Function(_EditProfile value)? editProfile,
    TResult? Function(_Registration value)? registration,
    TResult? Function(_SendCode value)? sendCode,
    TResult? Function(_CheckCode value)? checkCode,
    TResult? Function(_NewCode value)? newPassword,
    TResult? Function(_SendDeviceToken value)? sendDeviceToken,
  }) {
    return healthInfo?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Login value)? login,
    TResult Function(_Profile value)? profile,
    TResult Function(_HealthInfo value)? healthInfo,
    TResult Function(_EditProfile value)? editProfile,
    TResult Function(_Registration value)? registration,
    TResult Function(_SendCode value)? sendCode,
    TResult Function(_CheckCode value)? checkCode,
    TResult Function(_NewCode value)? newPassword,
    TResult Function(_SendDeviceToken value)? sendDeviceToken,
    required TResult orElse(),
  }) {
    if (healthInfo != null) {
      return healthInfo(this);
    }
    return orElse();
  }
}

abstract class _HealthInfo extends AuthApi {
  const factory _HealthInfo() = _$_HealthInfo;
  const _HealthInfo._() : super._();
}

/// @nodoc
abstract class _$$_EditProfileCopyWith<$Res> {
  factory _$$_EditProfileCopyWith(
          _$_EditProfile value, $Res Function(_$_EditProfile) then) =
      __$$_EditProfileCopyWithImpl<$Res>;
  @useResult
  $Res call(
      {String? fullName,
      String? email,
      String? phone,
      String? profileImageUrl});
}

/// @nodoc
class __$$_EditProfileCopyWithImpl<$Res>
    extends _$AuthApiCopyWithImpl<$Res, _$_EditProfile>
    implements _$$_EditProfileCopyWith<$Res> {
  __$$_EditProfileCopyWithImpl(
      _$_EditProfile _value, $Res Function(_$_EditProfile) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? fullName = freezed,
    Object? email = freezed,
    Object? phone = freezed,
    Object? profileImageUrl = freezed,
  }) {
    return _then(_$_EditProfile(
      fullName: freezed == fullName
          ? _value.fullName
          : fullName // ignore: cast_nullable_to_non_nullable
              as String?,
      email: freezed == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String?,
      phone: freezed == phone
          ? _value.phone
          : phone // ignore: cast_nullable_to_non_nullable
              as String?,
      profileImageUrl: freezed == profileImageUrl
          ? _value.profileImageUrl
          : profileImageUrl // ignore: cast_nullable_to_non_nullable
              as String?,
    ));
  }
}

/// @nodoc

class _$_EditProfile extends _EditProfile {
  const _$_EditProfile(
      {this.fullName, this.email, this.phone, this.profileImageUrl})
      : super._();

  @override
  final String? fullName;
  @override
  final String? email;
  @override
  final String? phone;
  @override
  final String? profileImageUrl;

  @override
  String toString() {
    return 'AuthApi.editProfile(fullName: $fullName, email: $email, phone: $phone, profileImageUrl: $profileImageUrl)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_EditProfile &&
            (identical(other.fullName, fullName) ||
                other.fullName == fullName) &&
            (identical(other.email, email) || other.email == email) &&
            (identical(other.phone, phone) || other.phone == phone) &&
            (identical(other.profileImageUrl, profileImageUrl) ||
                other.profileImageUrl == profileImageUrl));
  }

  @override
  int get hashCode =>
      Object.hash(runtimeType, fullName, email, phone, profileImageUrl);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_EditProfileCopyWith<_$_EditProfile> get copyWith =>
      __$$_EditProfileCopyWithImpl<_$_EditProfile>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String email, String password) login,
    required TResult Function() profile,
    required TResult Function() healthInfo,
    required TResult Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)
        editProfile,
    required TResult Function(
            String email, String password, String phone, String name)
        registration,
    required TResult Function(String email) sendCode,
    required TResult Function(String email, String code) checkCode,
    required TResult Function(String email, String code, String password)
        newPassword,
    required TResult Function(String deviceToken) sendDeviceToken,
  }) {
    return editProfile(fullName, email, phone, profileImageUrl);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String email, String password)? login,
    TResult? Function()? profile,
    TResult? Function()? healthInfo,
    TResult? Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)?
        editProfile,
    TResult? Function(String email, String password, String phone, String name)?
        registration,
    TResult? Function(String email)? sendCode,
    TResult? Function(String email, String code)? checkCode,
    TResult? Function(String email, String code, String password)? newPassword,
    TResult? Function(String deviceToken)? sendDeviceToken,
  }) {
    return editProfile?.call(fullName, email, phone, profileImageUrl);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String email, String password)? login,
    TResult Function()? profile,
    TResult Function()? healthInfo,
    TResult Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)?
        editProfile,
    TResult Function(String email, String password, String phone, String name)?
        registration,
    TResult Function(String email)? sendCode,
    TResult Function(String email, String code)? checkCode,
    TResult Function(String email, String code, String password)? newPassword,
    TResult Function(String deviceToken)? sendDeviceToken,
    required TResult orElse(),
  }) {
    if (editProfile != null) {
      return editProfile(fullName, email, phone, profileImageUrl);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Login value) login,
    required TResult Function(_Profile value) profile,
    required TResult Function(_HealthInfo value) healthInfo,
    required TResult Function(_EditProfile value) editProfile,
    required TResult Function(_Registration value) registration,
    required TResult Function(_SendCode value) sendCode,
    required TResult Function(_CheckCode value) checkCode,
    required TResult Function(_NewCode value) newPassword,
    required TResult Function(_SendDeviceToken value) sendDeviceToken,
  }) {
    return editProfile(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Login value)? login,
    TResult? Function(_Profile value)? profile,
    TResult? Function(_HealthInfo value)? healthInfo,
    TResult? Function(_EditProfile value)? editProfile,
    TResult? Function(_Registration value)? registration,
    TResult? Function(_SendCode value)? sendCode,
    TResult? Function(_CheckCode value)? checkCode,
    TResult? Function(_NewCode value)? newPassword,
    TResult? Function(_SendDeviceToken value)? sendDeviceToken,
  }) {
    return editProfile?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Login value)? login,
    TResult Function(_Profile value)? profile,
    TResult Function(_HealthInfo value)? healthInfo,
    TResult Function(_EditProfile value)? editProfile,
    TResult Function(_Registration value)? registration,
    TResult Function(_SendCode value)? sendCode,
    TResult Function(_CheckCode value)? checkCode,
    TResult Function(_NewCode value)? newPassword,
    TResult Function(_SendDeviceToken value)? sendDeviceToken,
    required TResult orElse(),
  }) {
    if (editProfile != null) {
      return editProfile(this);
    }
    return orElse();
  }
}

abstract class _EditProfile extends AuthApi {
  const factory _EditProfile(
      {final String? fullName,
      final String? email,
      final String? phone,
      final String? profileImageUrl}) = _$_EditProfile;
  const _EditProfile._() : super._();

  String? get fullName;
  String? get email;
  String? get phone;
  String? get profileImageUrl;
  @JsonKey(ignore: true)
  _$$_EditProfileCopyWith<_$_EditProfile> get copyWith =>
      throw _privateConstructorUsedError;
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
    required TResult Function() healthInfo,
    required TResult Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)
        editProfile,
    required TResult Function(
            String email, String password, String phone, String name)
        registration,
    required TResult Function(String email) sendCode,
    required TResult Function(String email, String code) checkCode,
    required TResult Function(String email, String code, String password)
        newPassword,
    required TResult Function(String deviceToken) sendDeviceToken,
  }) {
    return registration(email, password, phone, name);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String email, String password)? login,
    TResult? Function()? profile,
    TResult? Function()? healthInfo,
    TResult? Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)?
        editProfile,
    TResult? Function(String email, String password, String phone, String name)?
        registration,
    TResult? Function(String email)? sendCode,
    TResult? Function(String email, String code)? checkCode,
    TResult? Function(String email, String code, String password)? newPassword,
    TResult? Function(String deviceToken)? sendDeviceToken,
  }) {
    return registration?.call(email, password, phone, name);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String email, String password)? login,
    TResult Function()? profile,
    TResult Function()? healthInfo,
    TResult Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)?
        editProfile,
    TResult Function(String email, String password, String phone, String name)?
        registration,
    TResult Function(String email)? sendCode,
    TResult Function(String email, String code)? checkCode,
    TResult Function(String email, String code, String password)? newPassword,
    TResult Function(String deviceToken)? sendDeviceToken,
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
    required TResult Function(_HealthInfo value) healthInfo,
    required TResult Function(_EditProfile value) editProfile,
    required TResult Function(_Registration value) registration,
    required TResult Function(_SendCode value) sendCode,
    required TResult Function(_CheckCode value) checkCode,
    required TResult Function(_NewCode value) newPassword,
    required TResult Function(_SendDeviceToken value) sendDeviceToken,
  }) {
    return registration(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Login value)? login,
    TResult? Function(_Profile value)? profile,
    TResult? Function(_HealthInfo value)? healthInfo,
    TResult? Function(_EditProfile value)? editProfile,
    TResult? Function(_Registration value)? registration,
    TResult? Function(_SendCode value)? sendCode,
    TResult? Function(_CheckCode value)? checkCode,
    TResult? Function(_NewCode value)? newPassword,
    TResult? Function(_SendDeviceToken value)? sendDeviceToken,
  }) {
    return registration?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Login value)? login,
    TResult Function(_Profile value)? profile,
    TResult Function(_HealthInfo value)? healthInfo,
    TResult Function(_EditProfile value)? editProfile,
    TResult Function(_Registration value)? registration,
    TResult Function(_SendCode value)? sendCode,
    TResult Function(_CheckCode value)? checkCode,
    TResult Function(_NewCode value)? newPassword,
    TResult Function(_SendDeviceToken value)? sendDeviceToken,
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

/// @nodoc
abstract class _$$_SendCodeCopyWith<$Res> {
  factory _$$_SendCodeCopyWith(
          _$_SendCode value, $Res Function(_$_SendCode) then) =
      __$$_SendCodeCopyWithImpl<$Res>;
  @useResult
  $Res call({String email});
}

/// @nodoc
class __$$_SendCodeCopyWithImpl<$Res>
    extends _$AuthApiCopyWithImpl<$Res, _$_SendCode>
    implements _$$_SendCodeCopyWith<$Res> {
  __$$_SendCodeCopyWithImpl(
      _$_SendCode _value, $Res Function(_$_SendCode) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? email = null,
  }) {
    return _then(_$_SendCode(
      email: null == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_SendCode extends _SendCode {
  const _$_SendCode({required this.email}) : super._();

  @override
  final String email;

  @override
  String toString() {
    return 'AuthApi.sendCode(email: $email)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_SendCode &&
            (identical(other.email, email) || other.email == email));
  }

  @override
  int get hashCode => Object.hash(runtimeType, email);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_SendCodeCopyWith<_$_SendCode> get copyWith =>
      __$$_SendCodeCopyWithImpl<_$_SendCode>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String email, String password) login,
    required TResult Function() profile,
    required TResult Function() healthInfo,
    required TResult Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)
        editProfile,
    required TResult Function(
            String email, String password, String phone, String name)
        registration,
    required TResult Function(String email) sendCode,
    required TResult Function(String email, String code) checkCode,
    required TResult Function(String email, String code, String password)
        newPassword,
    required TResult Function(String deviceToken) sendDeviceToken,
  }) {
    return sendCode(email);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String email, String password)? login,
    TResult? Function()? profile,
    TResult? Function()? healthInfo,
    TResult? Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)?
        editProfile,
    TResult? Function(String email, String password, String phone, String name)?
        registration,
    TResult? Function(String email)? sendCode,
    TResult? Function(String email, String code)? checkCode,
    TResult? Function(String email, String code, String password)? newPassword,
    TResult? Function(String deviceToken)? sendDeviceToken,
  }) {
    return sendCode?.call(email);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String email, String password)? login,
    TResult Function()? profile,
    TResult Function()? healthInfo,
    TResult Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)?
        editProfile,
    TResult Function(String email, String password, String phone, String name)?
        registration,
    TResult Function(String email)? sendCode,
    TResult Function(String email, String code)? checkCode,
    TResult Function(String email, String code, String password)? newPassword,
    TResult Function(String deviceToken)? sendDeviceToken,
    required TResult orElse(),
  }) {
    if (sendCode != null) {
      return sendCode(email);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Login value) login,
    required TResult Function(_Profile value) profile,
    required TResult Function(_HealthInfo value) healthInfo,
    required TResult Function(_EditProfile value) editProfile,
    required TResult Function(_Registration value) registration,
    required TResult Function(_SendCode value) sendCode,
    required TResult Function(_CheckCode value) checkCode,
    required TResult Function(_NewCode value) newPassword,
    required TResult Function(_SendDeviceToken value) sendDeviceToken,
  }) {
    return sendCode(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Login value)? login,
    TResult? Function(_Profile value)? profile,
    TResult? Function(_HealthInfo value)? healthInfo,
    TResult? Function(_EditProfile value)? editProfile,
    TResult? Function(_Registration value)? registration,
    TResult? Function(_SendCode value)? sendCode,
    TResult? Function(_CheckCode value)? checkCode,
    TResult? Function(_NewCode value)? newPassword,
    TResult? Function(_SendDeviceToken value)? sendDeviceToken,
  }) {
    return sendCode?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Login value)? login,
    TResult Function(_Profile value)? profile,
    TResult Function(_HealthInfo value)? healthInfo,
    TResult Function(_EditProfile value)? editProfile,
    TResult Function(_Registration value)? registration,
    TResult Function(_SendCode value)? sendCode,
    TResult Function(_CheckCode value)? checkCode,
    TResult Function(_NewCode value)? newPassword,
    TResult Function(_SendDeviceToken value)? sendDeviceToken,
    required TResult orElse(),
  }) {
    if (sendCode != null) {
      return sendCode(this);
    }
    return orElse();
  }
}

abstract class _SendCode extends AuthApi {
  const factory _SendCode({required final String email}) = _$_SendCode;
  const _SendCode._() : super._();

  String get email;
  @JsonKey(ignore: true)
  _$$_SendCodeCopyWith<_$_SendCode> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_CheckCodeCopyWith<$Res> {
  factory _$$_CheckCodeCopyWith(
          _$_CheckCode value, $Res Function(_$_CheckCode) then) =
      __$$_CheckCodeCopyWithImpl<$Res>;
  @useResult
  $Res call({String email, String code});
}

/// @nodoc
class __$$_CheckCodeCopyWithImpl<$Res>
    extends _$AuthApiCopyWithImpl<$Res, _$_CheckCode>
    implements _$$_CheckCodeCopyWith<$Res> {
  __$$_CheckCodeCopyWithImpl(
      _$_CheckCode _value, $Res Function(_$_CheckCode) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? email = null,
    Object? code = null,
  }) {
    return _then(_$_CheckCode(
      email: null == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String,
      code: null == code
          ? _value.code
          : code // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_CheckCode extends _CheckCode {
  const _$_CheckCode({required this.email, required this.code}) : super._();

  @override
  final String email;
  @override
  final String code;

  @override
  String toString() {
    return 'AuthApi.checkCode(email: $email, code: $code)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_CheckCode &&
            (identical(other.email, email) || other.email == email) &&
            (identical(other.code, code) || other.code == code));
  }

  @override
  int get hashCode => Object.hash(runtimeType, email, code);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_CheckCodeCopyWith<_$_CheckCode> get copyWith =>
      __$$_CheckCodeCopyWithImpl<_$_CheckCode>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String email, String password) login,
    required TResult Function() profile,
    required TResult Function() healthInfo,
    required TResult Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)
        editProfile,
    required TResult Function(
            String email, String password, String phone, String name)
        registration,
    required TResult Function(String email) sendCode,
    required TResult Function(String email, String code) checkCode,
    required TResult Function(String email, String code, String password)
        newPassword,
    required TResult Function(String deviceToken) sendDeviceToken,
  }) {
    return checkCode(email, code);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String email, String password)? login,
    TResult? Function()? profile,
    TResult? Function()? healthInfo,
    TResult? Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)?
        editProfile,
    TResult? Function(String email, String password, String phone, String name)?
        registration,
    TResult? Function(String email)? sendCode,
    TResult? Function(String email, String code)? checkCode,
    TResult? Function(String email, String code, String password)? newPassword,
    TResult? Function(String deviceToken)? sendDeviceToken,
  }) {
    return checkCode?.call(email, code);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String email, String password)? login,
    TResult Function()? profile,
    TResult Function()? healthInfo,
    TResult Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)?
        editProfile,
    TResult Function(String email, String password, String phone, String name)?
        registration,
    TResult Function(String email)? sendCode,
    TResult Function(String email, String code)? checkCode,
    TResult Function(String email, String code, String password)? newPassword,
    TResult Function(String deviceToken)? sendDeviceToken,
    required TResult orElse(),
  }) {
    if (checkCode != null) {
      return checkCode(email, code);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Login value) login,
    required TResult Function(_Profile value) profile,
    required TResult Function(_HealthInfo value) healthInfo,
    required TResult Function(_EditProfile value) editProfile,
    required TResult Function(_Registration value) registration,
    required TResult Function(_SendCode value) sendCode,
    required TResult Function(_CheckCode value) checkCode,
    required TResult Function(_NewCode value) newPassword,
    required TResult Function(_SendDeviceToken value) sendDeviceToken,
  }) {
    return checkCode(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Login value)? login,
    TResult? Function(_Profile value)? profile,
    TResult? Function(_HealthInfo value)? healthInfo,
    TResult? Function(_EditProfile value)? editProfile,
    TResult? Function(_Registration value)? registration,
    TResult? Function(_SendCode value)? sendCode,
    TResult? Function(_CheckCode value)? checkCode,
    TResult? Function(_NewCode value)? newPassword,
    TResult? Function(_SendDeviceToken value)? sendDeviceToken,
  }) {
    return checkCode?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Login value)? login,
    TResult Function(_Profile value)? profile,
    TResult Function(_HealthInfo value)? healthInfo,
    TResult Function(_EditProfile value)? editProfile,
    TResult Function(_Registration value)? registration,
    TResult Function(_SendCode value)? sendCode,
    TResult Function(_CheckCode value)? checkCode,
    TResult Function(_NewCode value)? newPassword,
    TResult Function(_SendDeviceToken value)? sendDeviceToken,
    required TResult orElse(),
  }) {
    if (checkCode != null) {
      return checkCode(this);
    }
    return orElse();
  }
}

abstract class _CheckCode extends AuthApi {
  const factory _CheckCode(
      {required final String email, required final String code}) = _$_CheckCode;
  const _CheckCode._() : super._();

  String get email;
  String get code;
  @JsonKey(ignore: true)
  _$$_CheckCodeCopyWith<_$_CheckCode> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_NewCodeCopyWith<$Res> {
  factory _$$_NewCodeCopyWith(
          _$_NewCode value, $Res Function(_$_NewCode) then) =
      __$$_NewCodeCopyWithImpl<$Res>;
  @useResult
  $Res call({String email, String code, String password});
}

/// @nodoc
class __$$_NewCodeCopyWithImpl<$Res>
    extends _$AuthApiCopyWithImpl<$Res, _$_NewCode>
    implements _$$_NewCodeCopyWith<$Res> {
  __$$_NewCodeCopyWithImpl(_$_NewCode _value, $Res Function(_$_NewCode) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? email = null,
    Object? code = null,
    Object? password = null,
  }) {
    return _then(_$_NewCode(
      email: null == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String,
      code: null == code
          ? _value.code
          : code // ignore: cast_nullable_to_non_nullable
              as String,
      password: null == password
          ? _value.password
          : password // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_NewCode extends _NewCode {
  const _$_NewCode(
      {required this.email, required this.code, required this.password})
      : super._();

  @override
  final String email;
  @override
  final String code;
  @override
  final String password;

  @override
  String toString() {
    return 'AuthApi.newPassword(email: $email, code: $code, password: $password)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_NewCode &&
            (identical(other.email, email) || other.email == email) &&
            (identical(other.code, code) || other.code == code) &&
            (identical(other.password, password) ||
                other.password == password));
  }

  @override
  int get hashCode => Object.hash(runtimeType, email, code, password);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_NewCodeCopyWith<_$_NewCode> get copyWith =>
      __$$_NewCodeCopyWithImpl<_$_NewCode>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String email, String password) login,
    required TResult Function() profile,
    required TResult Function() healthInfo,
    required TResult Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)
        editProfile,
    required TResult Function(
            String email, String password, String phone, String name)
        registration,
    required TResult Function(String email) sendCode,
    required TResult Function(String email, String code) checkCode,
    required TResult Function(String email, String code, String password)
        newPassword,
    required TResult Function(String deviceToken) sendDeviceToken,
  }) {
    return newPassword(email, code, password);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String email, String password)? login,
    TResult? Function()? profile,
    TResult? Function()? healthInfo,
    TResult? Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)?
        editProfile,
    TResult? Function(String email, String password, String phone, String name)?
        registration,
    TResult? Function(String email)? sendCode,
    TResult? Function(String email, String code)? checkCode,
    TResult? Function(String email, String code, String password)? newPassword,
    TResult? Function(String deviceToken)? sendDeviceToken,
  }) {
    return newPassword?.call(email, code, password);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String email, String password)? login,
    TResult Function()? profile,
    TResult Function()? healthInfo,
    TResult Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)?
        editProfile,
    TResult Function(String email, String password, String phone, String name)?
        registration,
    TResult Function(String email)? sendCode,
    TResult Function(String email, String code)? checkCode,
    TResult Function(String email, String code, String password)? newPassword,
    TResult Function(String deviceToken)? sendDeviceToken,
    required TResult orElse(),
  }) {
    if (newPassword != null) {
      return newPassword(email, code, password);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Login value) login,
    required TResult Function(_Profile value) profile,
    required TResult Function(_HealthInfo value) healthInfo,
    required TResult Function(_EditProfile value) editProfile,
    required TResult Function(_Registration value) registration,
    required TResult Function(_SendCode value) sendCode,
    required TResult Function(_CheckCode value) checkCode,
    required TResult Function(_NewCode value) newPassword,
    required TResult Function(_SendDeviceToken value) sendDeviceToken,
  }) {
    return newPassword(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Login value)? login,
    TResult? Function(_Profile value)? profile,
    TResult? Function(_HealthInfo value)? healthInfo,
    TResult? Function(_EditProfile value)? editProfile,
    TResult? Function(_Registration value)? registration,
    TResult? Function(_SendCode value)? sendCode,
    TResult? Function(_CheckCode value)? checkCode,
    TResult? Function(_NewCode value)? newPassword,
    TResult? Function(_SendDeviceToken value)? sendDeviceToken,
  }) {
    return newPassword?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Login value)? login,
    TResult Function(_Profile value)? profile,
    TResult Function(_HealthInfo value)? healthInfo,
    TResult Function(_EditProfile value)? editProfile,
    TResult Function(_Registration value)? registration,
    TResult Function(_SendCode value)? sendCode,
    TResult Function(_CheckCode value)? checkCode,
    TResult Function(_NewCode value)? newPassword,
    TResult Function(_SendDeviceToken value)? sendDeviceToken,
    required TResult orElse(),
  }) {
    if (newPassword != null) {
      return newPassword(this);
    }
    return orElse();
  }
}

abstract class _NewCode extends AuthApi {
  const factory _NewCode(
      {required final String email,
      required final String code,
      required final String password}) = _$_NewCode;
  const _NewCode._() : super._();

  String get email;
  String get code;
  String get password;
  @JsonKey(ignore: true)
  _$$_NewCodeCopyWith<_$_NewCode> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_SendDeviceTokenCopyWith<$Res> {
  factory _$$_SendDeviceTokenCopyWith(
          _$_SendDeviceToken value, $Res Function(_$_SendDeviceToken) then) =
      __$$_SendDeviceTokenCopyWithImpl<$Res>;
  @useResult
  $Res call({String deviceToken});
}

/// @nodoc
class __$$_SendDeviceTokenCopyWithImpl<$Res>
    extends _$AuthApiCopyWithImpl<$Res, _$_SendDeviceToken>
    implements _$$_SendDeviceTokenCopyWith<$Res> {
  __$$_SendDeviceTokenCopyWithImpl(
      _$_SendDeviceToken _value, $Res Function(_$_SendDeviceToken) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? deviceToken = null,
  }) {
    return _then(_$_SendDeviceToken(
      deviceToken: null == deviceToken
          ? _value.deviceToken
          : deviceToken // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_SendDeviceToken extends _SendDeviceToken {
  const _$_SendDeviceToken({required this.deviceToken}) : super._();

  @override
  final String deviceToken;

  @override
  String toString() {
    return 'AuthApi.sendDeviceToken(deviceToken: $deviceToken)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_SendDeviceToken &&
            (identical(other.deviceToken, deviceToken) ||
                other.deviceToken == deviceToken));
  }

  @override
  int get hashCode => Object.hash(runtimeType, deviceToken);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_SendDeviceTokenCopyWith<_$_SendDeviceToken> get copyWith =>
      __$$_SendDeviceTokenCopyWithImpl<_$_SendDeviceToken>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String email, String password) login,
    required TResult Function() profile,
    required TResult Function() healthInfo,
    required TResult Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)
        editProfile,
    required TResult Function(
            String email, String password, String phone, String name)
        registration,
    required TResult Function(String email) sendCode,
    required TResult Function(String email, String code) checkCode,
    required TResult Function(String email, String code, String password)
        newPassword,
    required TResult Function(String deviceToken) sendDeviceToken,
  }) {
    return sendDeviceToken(deviceToken);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String email, String password)? login,
    TResult? Function()? profile,
    TResult? Function()? healthInfo,
    TResult? Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)?
        editProfile,
    TResult? Function(String email, String password, String phone, String name)?
        registration,
    TResult? Function(String email)? sendCode,
    TResult? Function(String email, String code)? checkCode,
    TResult? Function(String email, String code, String password)? newPassword,
    TResult? Function(String deviceToken)? sendDeviceToken,
  }) {
    return sendDeviceToken?.call(deviceToken);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String email, String password)? login,
    TResult Function()? profile,
    TResult Function()? healthInfo,
    TResult Function(String? fullName, String? email, String? phone,
            String? profileImageUrl)?
        editProfile,
    TResult Function(String email, String password, String phone, String name)?
        registration,
    TResult Function(String email)? sendCode,
    TResult Function(String email, String code)? checkCode,
    TResult Function(String email, String code, String password)? newPassword,
    TResult Function(String deviceToken)? sendDeviceToken,
    required TResult orElse(),
  }) {
    if (sendDeviceToken != null) {
      return sendDeviceToken(deviceToken);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Login value) login,
    required TResult Function(_Profile value) profile,
    required TResult Function(_HealthInfo value) healthInfo,
    required TResult Function(_EditProfile value) editProfile,
    required TResult Function(_Registration value) registration,
    required TResult Function(_SendCode value) sendCode,
    required TResult Function(_CheckCode value) checkCode,
    required TResult Function(_NewCode value) newPassword,
    required TResult Function(_SendDeviceToken value) sendDeviceToken,
  }) {
    return sendDeviceToken(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Login value)? login,
    TResult? Function(_Profile value)? profile,
    TResult? Function(_HealthInfo value)? healthInfo,
    TResult? Function(_EditProfile value)? editProfile,
    TResult? Function(_Registration value)? registration,
    TResult? Function(_SendCode value)? sendCode,
    TResult? Function(_CheckCode value)? checkCode,
    TResult? Function(_NewCode value)? newPassword,
    TResult? Function(_SendDeviceToken value)? sendDeviceToken,
  }) {
    return sendDeviceToken?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Login value)? login,
    TResult Function(_Profile value)? profile,
    TResult Function(_HealthInfo value)? healthInfo,
    TResult Function(_EditProfile value)? editProfile,
    TResult Function(_Registration value)? registration,
    TResult Function(_SendCode value)? sendCode,
    TResult Function(_CheckCode value)? checkCode,
    TResult Function(_NewCode value)? newPassword,
    TResult Function(_SendDeviceToken value)? sendDeviceToken,
    required TResult orElse(),
  }) {
    if (sendDeviceToken != null) {
      return sendDeviceToken(this);
    }
    return orElse();
  }
}

abstract class _SendDeviceToken extends AuthApi {
  const factory _SendDeviceToken({required final String deviceToken}) =
      _$_SendDeviceToken;
  const _SendDeviceToken._() : super._();

  String get deviceToken;
  @JsonKey(ignore: true)
  _$$_SendDeviceTokenCopyWith<_$_SendDeviceToken> get copyWith =>
      throw _privateConstructorUsedError;
}
