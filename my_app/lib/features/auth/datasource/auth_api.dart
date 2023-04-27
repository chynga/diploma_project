// ignore_for_file: avoid-dynamic
import 'package:dental_plaza/core/network/interfaces/base_client_generator.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'auth_api.freezed.dart';

@freezed
class AuthApi extends BaseClientGenerator with _$AuthApi {
  const AuthApi._() : super();

  /// Запрос для авторизации
  const factory AuthApi.login({
    required String email,
    required String password,
  }) = _Login;

  const factory AuthApi.profile() = _Profile;

  const factory AuthApi.healthInfo() = _HealthInfo;

  const factory AuthApi.editProfile({
    String? fullName,
    String? email,
    String? phone,
  }) = _EditProfile;

  const factory AuthApi.registration({
    required String email,
    required String password,
    required String phone,
    required String name,
  }) = _Registration;

  const factory AuthApi.sendCode({
    required String email,
  }) = _SendCode;

  const factory AuthApi.checkCode({
    required String email,
    required String code,
  }) = _CheckCode;

  const factory AuthApi.newPassword({
    required String email,
    required String code,
    required String password,
  }) = _NewCode;

  /// body
  /// По умолчанию null
  @override
  dynamic get body => whenOrNull(
        login: (email, password) => <String, dynamic>{
          'email': email,
          'password': password,
        },
        registration: (email, password, phone, name) => <String, dynamic>{
          'email': email,
          'password': password,
          'phone': phone,
          'fullName': name,
        },
        editProfile: (fullName, email, phone) => <String, dynamic>{
          if (fullName != null) 'fullName': fullName,
          if (email != null) 'email': email,
          if (phone != null) 'phone': phone,
        },
        sendCode: (email) => {
          'email':email,
        },
        checkCode: (email, code) => {
          'email':email,
          'code':code,
        },
        newPassword: (email, code, password) => {
          'email':email,
          'code':code,
          'password':password,
        },
      );

  /// Используемые методы запросов, по умолчанию 'GET'
  @override
  String get method => maybeWhen(
        orElse: () => 'GET',
        login: (_, __) => 'POST',
        profile: () => 'GET',
        registration: (email, password, phone, name) => 'POST',
        editProfile: (fullName, email, phone) => 'PATCH',
        healthInfo: () => 'GET',
        sendCode:(email) => 'POST',
        checkCode: (email, code) => 'POST',
        newPassword: (email, code, password) => 'POST',
      );

  /// Пути всех запросов (после [kBaseUrl])
  @override
  String get path => when(
        login: (_, __) => '/api/authentication/login',
        profile: () => '/api/profile',
        registration: (email, password, phone, name) =>
            '/api/authentication/register',
        editProfile: (fullName, email, phone) => '/api/profile',
        healthInfo: () => '/api/profile/healthInfo',
        sendCode: (email) => '/api/profile/recovery/send',
        checkCode: (email, code) => '/api/profile/recovery/check',
        newPassword: (email, code, password) =>
            '/api/profile/recovery/complete',
      );

  /// Параметры запросов
  @override
  Map<String, dynamic>? get queryParameters => whenOrNull();
}
