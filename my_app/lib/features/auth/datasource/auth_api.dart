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


  const factory AuthApi.registration({
    required String email,
    required String password,
    required String phone,
    required String name,
  }) = _Registration;

  /// body 
  /// По умолчанию null
  @override
  dynamic get body => whenOrNull(
        login: (email, password) => <String, dynamic>{
          'email': email,
          'password': password,
        },
        registration: (email, password, phone ,name) =>  <String, dynamic>{
          'email': email,
          'password': password,
          'phone': phone,
          'fullName':name,
        },
      );

  /// Используемые методы запросов, по умолчанию 'GET'
  @override
  String get method => maybeWhen(
        orElse: () => 'GET',
        login: (_, __) => 'POST',
        profile: () => 'GET',
        registration: (email, password, phone,name) => 'POST',
      );

  /// Пути всех запросов (после [kBaseUrl])
  @override
  String get path => when(
        login: (_, __) => '/api/authentication/login',
        profile: () => '/api/profile',
        registration:(email, password, phone,name) => '/api/authentication/register',
      );

  /// Параметры запросов
  @override
  Map<String, dynamic>? get queryParameters => whenOrNull(
      );
}
