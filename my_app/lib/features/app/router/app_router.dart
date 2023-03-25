import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/features/app/view/launcher.dart';
import 'package:dental_plaza/features/app/view/temp_page.dart';
import 'package:dental_plaza/features/auth/view/confirmation_code_page.dart';
import 'package:dental_plaza/features/auth/view/forgot_password_page.dart';
import 'package:dental_plaza/features/auth/view/new_password_page.dart';
import 'package:dental_plaza/features/main/view/main_page.dart';
import 'package:flutter/material.dart';

part 'app_router.gr.dart';

@MaterialAutoRouter(
  replaceInRouteName: 'Page,Route',
  routes: [
    AutoRoute<void>(
      page: Launcher,
      initial: true,
      name: 'LauncherRoute',
      children: [
        AutoRoute<void>(page: MainPage),
        AutoRoute<void>(page: TempPage),
      ],
    ),

    ///
    ///Auth Pages
    ///
    AutoRoute<void>(page: ForgotPasswordPage),
    AutoRoute<void>(page: NewPasswordPage),
    AutoRoute<void>(page: ConfirmationCodePage),
  ],
)
class AppRouter extends _$AppRouter {}
