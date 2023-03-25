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
  };

  @override
  List<RouteConfig> get routes => [
        RouteConfig(
          LauncherRoute.name,
          path: '/',
          children: [
            RouteConfig(
              TempRoute.name,
              path: 'temp-page',
              parent: LauncherRoute.name,
            )
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
