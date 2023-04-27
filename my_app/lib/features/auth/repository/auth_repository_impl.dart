import 'dart:convert';
import 'dart:developer';

import 'package:dental_plaza/core/network/basic_response.dart';
import 'package:dental_plaza/core/network/layers/network_executer.dart';
import 'package:dental_plaza/core/network/result.dart';
import 'package:dental_plaza/features/auth/database/auth_dao.dart';
import 'package:dental_plaza/features/auth/datasource/auth_api.dart';
import 'package:dental_plaza/features/auth/datasource/auth_remote_ds.dart';
import 'package:dental_plaza/features/auth/model/health_info_dto.dart';
import 'package:dental_plaza/features/auth/model/user_dto.dart';
import 'package:dental_plaza/features/auth/repository/auth_repository.dart';

class AuthRepositoryImpl extends IAuthRepository {
  final IAuthRemoteDS _remoteDS;
  final IAuthDao _authDao;
  final NetworkExecuter _client;

  @override
  bool get isAuthenticated => _authDao.user.value != null;

  AuthRepositoryImpl({
    required IAuthRemoteDS remoteDS,
    required IAuthDao authDao,
    required NetworkExecuter client,
  })  : _remoteDS = remoteDS,
        _authDao = authDao,
        _client = client;

  @override
  Future<Result<UserDTO>> login({
    required String phone,
    required String password,
  }) async {
    final Result<UserDTO> result = await _remoteDS.login(
      phone: phone,
      password: password,
    );

    result.whenOrNull(
      success: (user) {
        log(user.toString());
        _authDao.user.setValue(jsonEncode(user.toJson()));
      },
    );

    return result;
  }

  @override
  bool getOnboarding() => _authDao.onboarding.value ?? false;

  @override
  bool getShowcase() => _authDao.showcase.value ?? false;

  @override
  Future<void> setOnboarding({required bool onboarding}) async =>
      _authDao.onboarding.setValue(onboarding);

  @override
  Future<void> setShowcase({required bool showcase}) async =>
      _authDao.showcase.setValue(showcase);

  @override
  Future<bool> clearUser() async => _authDao.user.remove();

  @override
  Future<Result<UserDTO>> getProfile() => _remoteDS.getProfile();
  @override
  Future<Result<BasicResponse>> register({
    required String email,
    required String password,
    required String phone,
    required String name,
  }) async =>
      _client.execute(
        route: AuthApi.registration(
          email: email,
          password: password,
          phone: phone,
          name: name,
        ),
        responseType: BasicResponse(),
      );

  @override
  Future<Result<BasicResponse>> editProfile({
    String? fullName,
    String? email,
    String? phone,
  }) async {
    return _client.execute(
      route: AuthApi.editProfile(
        fullName: fullName,
        email: email,
        phone: phone,
      ),
      responseType: BasicResponse(),
    );
  }

  @override
  Future<Result<HealthInfoDTO>> getHeathInfo() => _remoteDS.getHeathInfo();

  @override
  Future<Result<BasicResponse>> checkCode({
    required String email,
    required String code,
  }) async {
    return _client.execute(
      route: AuthApi.checkCode(
        email: email,
        code: code,
      ),
      responseType: BasicResponse(),
    );
  }

  @override
  Future<Result<BasicResponse>> newPassword({
    required String email,
    required String code,
    required String password,
  }) async {
    return _client.execute(
      route: AuthApi.newPassword(
        email: email,
        code: code,
        password: password,
      ),
      responseType: BasicResponse(),
    );
  }

  @override
  Future<Result<BasicResponse>> sendCode({required String email}) async {
    return _client.execute(
      route: AuthApi.sendCode(
        email: email,
      ),
      responseType: BasicResponse(),
    );
  }
}
