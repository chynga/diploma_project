import 'package:auto_route/auto_route.dart';
import 'package:auto_route/empty_router_widgets.dart';
import 'package:dental_plaza/features/app/view/launcher.dart';
import 'package:dental_plaza/features/app/view/temp_page.dart';
import 'package:dental_plaza/features/auth/view/confirmation_code_page.dart';
import 'package:dental_plaza/features/auth/view/forgot_password_page.dart';
import 'package:dental_plaza/features/auth/view/new_password_page.dart';
import 'package:dental_plaza/features/chat/view/chat_page.dart';
import 'package:dental_plaza/features/main/view/main_page.dart';
import 'package:dental_plaza/features/profile/view/edit_profie_page.dart';
import 'package:dental_plaza/features/profile/view/profile_page.dart';
import 'package:dental_plaza/features/record/view/my_records_page.dart';
import 'package:dental_plaza/features/record/view/record_page.dart';
import 'package:dental_plaza/features/tooth_clean/view/tooth_clean_page.dart';
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
        AutoRoute<void>(page: ChatPage),
        AutoRoute<void>(page: ToothCleanPage),
        AutoRoute<void>(page: ProfilePage),
        AutoRoute<void>(
          page: EmptyRouterPage,
          name: 'BaseRecordPage',
          children: [
            AutoRoute<void>(
              page: RecordPage,
              initial: true,
            ),
            AutoRoute<void>(page: MyRecordsPage),
          ],
        ),
        AutoRoute<void>(page: TempPage),
      ],
    ),

    ///
    ///Auth Pages
    ///
    AutoRoute<void>(page: ForgotPasswordPage),
    AutoRoute<void>(page: NewPasswordPage),
    AutoRoute<void>(page: ConfirmationCodePage),

    ///
    ///Profile Pages
    ///
    AutoRoute<void>(page: EditProfilePage),
  ],
)
class AppRouter extends _$AppRouter {}
