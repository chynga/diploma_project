// **************************************************************************
// AutoRouteGenerator
// **************************************************************************

// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// AutoRouteGenerator
// **************************************************************************
//
// ignore_for_file: type=lint

part of 'app_router.dart';

class _$AppRouter extends RootStackRouter {
  _$AppRouter([GlobalKey<NavigatorState>? navigatorKey]) : super(navigatorKey);

  @override
  final Map<String, PageFactory> pagesMap = {
    LauncherRoute.name: (routeData) {
      return MaterialPageX<void>(
        routeData: routeData,
        child: const Launcher(),
      );
    },
    ForgotPasswordRoute.name: (routeData) {
      return MaterialPageX<void>(
        routeData: routeData,
        child: WrappedRoute(child: const ForgotPasswordPage()),
      );
    },
    NewPasswordRoute.name: (routeData) {
      final args = routeData.argsAs<NewPasswordRouteArgs>();
      return MaterialPageX<void>(
        routeData: routeData,
        child: WrappedRoute(
            child: NewPasswordPage(
          key: args.key,
          code: args.code,
          email: args.email,
        )),
      );
    },
    ConfirmationCodeRoute.name: (routeData) {
      final args = routeData.argsAs<ConfirmationCodeRouteArgs>();
      return MaterialPageX<void>(
        routeData: routeData,
        child: WrappedRoute(
            child: ConfirmationCodePage(
          key: args.key,
          email: args.email,
        )),
      );
    },
    MyRecordsMainPage.name: (routeData) {
      return MaterialPageX<void>(
        routeData: routeData,
        child: WrappedRoute(child: const MyRecordsPage()),
      );
    },
    EditProfileRoute.name: (routeData) {
      final args = routeData.argsAs<EditProfileRouteArgs>();
      return MaterialPageX<void>(
        routeData: routeData,
        child: WrappedRoute(
            child: EditProfilePage(
          key: args.key,
          user: args.user,
        )),
      );
    },
    NotificationsRoute.name: (routeData) {
      return MaterialPageX<void>(
        routeData: routeData,
        child: const NotificationsPage(),
      );
    },
    MainRoute.name: (routeData) {
      return MaterialPageX<void>(
        routeData: routeData,
        child: WrappedRoute(child: const MainPage()),
      );
    },
    ChatRoute.name: (routeData) {
      return MaterialPageX<void>(
        routeData: routeData,
        child: const ChatPage(),
      );
    },
    ToothCleanRoute.name: (routeData) {
      return MaterialPageX<void>(
        routeData: routeData,
        child: const ToothCleanPage(),
      );
    },
    ProfileRoute.name: (routeData) {
      return MaterialPageX<void>(
        routeData: routeData,
        child: const ProfilePage(),
      );
    },
    BaseRecordPage.name: (routeData) {
      return MaterialPageX<void>(
        routeData: routeData,
        child: const EmptyRouterPage(),
      );
    },
    TempRoute.name: (routeData) {
      final args = routeData.argsAs<TempRouteArgs>();
      return MaterialPageX<void>(
        routeData: routeData,
        child: TempPage(
          key: args.key,
          color: args.color,
        ),
      );
    },
    RecordRoute.name: (routeData) {
      return MaterialPageX<void>(
        routeData: routeData,
        child: WrappedRoute(child: const RecordPage()),
      );
    },
    MyRecordsRoute.name: (routeData) {
      return MaterialPageX<void>(
        routeData: routeData,
        child: WrappedRoute(child: const MyRecordsPage()),
      );
    },
  };

  @override
  List<RouteConfig> get routes => [
        RouteConfig(
          LauncherRoute.name,
          path: '/',
          children: [
            RouteConfig(
              MainRoute.name,
              path: 'main-page',
              parent: LauncherRoute.name,
            ),
            RouteConfig(
              ChatRoute.name,
              path: 'chat-page',
              parent: LauncherRoute.name,
            ),
            RouteConfig(
              ToothCleanRoute.name,
              path: 'tooth-clean-page',
              parent: LauncherRoute.name,
            ),
            RouteConfig(
              ProfileRoute.name,
              path: 'profile-page',
              parent: LauncherRoute.name,
            ),
            RouteConfig(
              BaseRecordPage.name,
              path: 'empty-router-page',
              parent: LauncherRoute.name,
              children: [
                RouteConfig(
                  RecordRoute.name,
                  path: '',
                  parent: BaseRecordPage.name,
                ),
                RouteConfig(
                  MyRecordsRoute.name,
                  path: 'my-records-page',
                  parent: BaseRecordPage.name,
                ),
              ],
            ),
            RouteConfig(
              TempRoute.name,
              path: 'temp-page',
              parent: LauncherRoute.name,
            ),
          ],
        ),
        RouteConfig(
          ForgotPasswordRoute.name,
          path: '/forgot-password-page',
        ),
        RouteConfig(
          NewPasswordRoute.name,
          path: '/new-password-page',
        ),
        RouteConfig(
          ConfirmationCodeRoute.name,
          path: '/confirmation-code-page',
        ),
        RouteConfig(
          MyRecordsMainPage.name,
          path: '/my-records-page',
        ),
        RouteConfig(
          EditProfileRoute.name,
          path: '/edit-profile-page',
        ),
        RouteConfig(
          NotificationsRoute.name,
          path: '/notifications-page',
        ),
      ];
}

/// generated route for
/// [Launcher]
class LauncherRoute extends PageRouteInfo<void> {
  const LauncherRoute({List<PageRouteInfo>? children})
      : super(
          LauncherRoute.name,
          path: '/',
          initialChildren: children,
        );

  static const String name = 'LauncherRoute';
}

/// generated route for
/// [ForgotPasswordPage]
class ForgotPasswordRoute extends PageRouteInfo<void> {
  const ForgotPasswordRoute()
      : super(
          ForgotPasswordRoute.name,
          path: '/forgot-password-page',
        );

  static const String name = 'ForgotPasswordRoute';
}

/// generated route for
/// [NewPasswordPage]
class NewPasswordRoute extends PageRouteInfo<NewPasswordRouteArgs> {
  NewPasswordRoute({
    Key? key,
    required String code,
    required String email,
  }) : super(
          NewPasswordRoute.name,
          path: '/new-password-page',
          args: NewPasswordRouteArgs(
            key: key,
            code: code,
            email: email,
          ),
        );

  static const String name = 'NewPasswordRoute';
}

class NewPasswordRouteArgs {
  const NewPasswordRouteArgs({
    this.key,
    required this.code,
    required this.email,
  });

  final Key? key;

  final String code;

  final String email;

  @override
  String toString() {
    return 'NewPasswordRouteArgs{key: $key, code: $code, email: $email}';
  }
}

/// generated route for
/// [ConfirmationCodePage]
class ConfirmationCodeRoute extends PageRouteInfo<ConfirmationCodeRouteArgs> {
  ConfirmationCodeRoute({
    Key? key,
    required String email,
  }) : super(
          ConfirmationCodeRoute.name,
          path: '/confirmation-code-page',
          args: ConfirmationCodeRouteArgs(
            key: key,
            email: email,
          ),
        );

  static const String name = 'ConfirmationCodeRoute';
}

class ConfirmationCodeRouteArgs {
  const ConfirmationCodeRouteArgs({
    this.key,
    required this.email,
  });

  final Key? key;

  final String email;

  @override
  String toString() {
    return 'ConfirmationCodeRouteArgs{key: $key, email: $email}';
  }
}

/// generated route for
/// [MyRecordsPage]
class MyRecordsMainPage extends PageRouteInfo<void> {
  const MyRecordsMainPage()
      : super(
          MyRecordsMainPage.name,
          path: '/my-records-page',
        );

  static const String name = 'MyRecordsMainPage';
}

/// generated route for
/// [EditProfilePage]
class EditProfileRoute extends PageRouteInfo<EditProfileRouteArgs> {
  EditProfileRoute({
    Key? key,
    required UserDTO user,
  }) : super(
          EditProfileRoute.name,
          path: '/edit-profile-page',
          args: EditProfileRouteArgs(
            key: key,
            user: user,
          ),
        );

  static const String name = 'EditProfileRoute';
}

class EditProfileRouteArgs {
  const EditProfileRouteArgs({
    this.key,
    required this.user,
  });

  final Key? key;

  final UserDTO user;

  @override
  String toString() {
    return 'EditProfileRouteArgs{key: $key, user: $user}';
  }
}

/// generated route for
/// [NotificationsPage]
class NotificationsRoute extends PageRouteInfo<void> {
  const NotificationsRoute()
      : super(
          NotificationsRoute.name,
          path: '/notifications-page',
        );

  static const String name = 'NotificationsRoute';
}

/// generated route for
/// [MainPage]
class MainRoute extends PageRouteInfo<void> {
  const MainRoute()
      : super(
          MainRoute.name,
          path: 'main-page',
        );

  static const String name = 'MainRoute';
}

/// generated route for
/// [ChatPage]
class ChatRoute extends PageRouteInfo<void> {
  const ChatRoute()
      : super(
          ChatRoute.name,
          path: 'chat-page',
        );

  static const String name = 'ChatRoute';
}

/// generated route for
/// [ToothCleanPage]
class ToothCleanRoute extends PageRouteInfo<void> {
  const ToothCleanRoute()
      : super(
          ToothCleanRoute.name,
          path: 'tooth-clean-page',
        );

  static const String name = 'ToothCleanRoute';
}

/// generated route for
/// [ProfilePage]
class ProfileRoute extends PageRouteInfo<void> {
  const ProfileRoute()
      : super(
          ProfileRoute.name,
          path: 'profile-page',
        );

  static const String name = 'ProfileRoute';
}

/// generated route for
/// [EmptyRouterPage]
class BaseRecordPage extends PageRouteInfo<void> {
  const BaseRecordPage({List<PageRouteInfo>? children})
      : super(
          BaseRecordPage.name,
          path: 'empty-router-page',
          initialChildren: children,
        );

  static const String name = 'BaseRecordPage';
}

/// generated route for
/// [TempPage]
class TempRoute extends PageRouteInfo<TempRouteArgs> {
  TempRoute({
    Key? key,
    required Color color,
  }) : super(
          TempRoute.name,
          path: 'temp-page',
          args: TempRouteArgs(
            key: key,
            color: color,
          ),
        );

  static const String name = 'TempRoute';
}

class TempRouteArgs {
  const TempRouteArgs({
    this.key,
    required this.color,
  });

  final Key? key;

  final Color color;

  @override
  String toString() {
    return 'TempRouteArgs{key: $key, color: $color}';
  }
}

/// generated route for
/// [RecordPage]
class RecordRoute extends PageRouteInfo<void> {
  const RecordRoute()
      : super(
          RecordRoute.name,
          path: '',
        );

  static const String name = 'RecordRoute';
}

/// generated route for
/// [MyRecordsPage]
class MyRecordsRoute extends PageRouteInfo<void> {
  const MyRecordsRoute()
      : super(
          MyRecordsRoute.name,
          path: 'my-records-page',
        );

  static const String name = 'MyRecordsRoute';
}
