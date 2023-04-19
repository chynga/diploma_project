import 'package:dental_plaza/core/network/basic_response.dart';
import 'package:dental_plaza/core/network/result.dart';
import 'package:dental_plaza/features/auth/model/user_dto.dart';

abstract class IAuthRepository {
  /// Статус аутентификации
  bool get isAuthenticated;

  Future<Result<UserDTO>> login({
    required String phone,
    required String password,
  });

  Future<Result<BasicResponse>> register({
    required String email,
    required String password,
    required String phone,
    required String name,
  });
  

  bool getOnboarding();

  bool getShowcase();

  Future<void> setOnboarding({
    required bool onboarding,
  });

  Future<void> setShowcase({
    required bool showcase,
  });

  Future<Result<UserDTO>> getProfile();

  Future<bool> clearUser();

  Future<Result<BasicResponse>> editProfile({
    String? fullName,
    String? email,
    String? phone,
  });
}
