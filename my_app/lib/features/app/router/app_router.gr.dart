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
        child: const ForgotPasswordPage(),
      );
    },
    NewPasswordRoute.name: (routeData) {
      return MaterialPageX<void>(
        routeData: routeData,
        child: const NewPasswordPage(),
      );
    },
    ConfirmationCodeRoute.name: (routeData) {
      return MaterialPageX<void>(
        routeData: routeData,
        child: const ConfirmationCodePage(),
      );
    },
    MainRoute.name: (routeData) {
      return MaterialPageX<void>(
        routeData: routeData,
        child: const MainPage(),
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
        child: const RecordPage(),
      );
    },
    MyRecordsRoute.name: (routeData) {
      return MaterialPageX<void>(
        routeData: routeData,
        child: const MyRecordsPage(),
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
class NewPasswordRoute extends PageRouteInfo<void> {
  const NewPasswordRoute()
      : super(
          NewPasswordRoute.name,
          path: '/new-password-page',
        );

  static const String name = 'NewPasswordRoute';
}

/// generated route for
/// [ConfirmationCodePage]
class ConfirmationCodeRoute extends PageRouteInfo<void> {
  const ConfirmationCodeRoute()
      : super(
          ConfirmationCodeRoute.name,
          path: '/confirmation-code-page',
        );

  static const String name = 'ConfirmationCodeRoute';
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
