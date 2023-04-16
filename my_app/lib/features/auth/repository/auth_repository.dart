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




  // // RESET password
  // Future<Result<BasicResponse>> sendCode({
  //   required String email,
  // });

  // // RESET password
  // Future<Result<BasicResponse>> checkCode({
  //   required String email,
  //   required String code,
  // });

  // RESET password
  // Future<Result<BasicResponse>> changePassword({
  //   required String email,
  //   required String password,
  // });

  Future<Result<UserDTO>> getProfile();

  Future<bool> clearUser();

  // // Log out api
  // Future<Result<BasicResponse>> logOut();

  // Future<Result<BasicResponse>> registration({
  //   required String email,
  //   required String password,
  //   required String phone,
  //   required String birthday,
  //   required String name,
  // });

  // Future<Result<BasicResponse>> editProfile({
  //   required UserPayload userPayload,
  //   XFile? avatar,
  // });
}
