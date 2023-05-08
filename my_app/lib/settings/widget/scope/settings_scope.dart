import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/widget/bloc_scope.dart';
import 'package:dental_plaza/features/app/bloc/app_bloc.dart';
import 'package:dental_plaza/features/app/bloc/base_appbar_cubit.dart';
import 'package:dental_plaza/features/app/bloc/base_bloc.dart';
import 'package:dental_plaza/features/app/enum/app_language.dart';
import 'package:dental_plaza/features/chat/bloc/chat_cubit.dart';
import 'package:dental_plaza/features/main/bloc/notifications_cubit.dart';
import 'package:dental_plaza/features/main/bloc/view_notifications_cubit.dart';
import 'package:dental_plaza/features/profile/bloc/health_info_cubit.dart';
import 'package:dental_plaza/features/profile/bloc/profile_cubit.dart';
import 'package:dental_plaza/features/record/bloc/records_cubit.dart';
import 'package:dental_plaza/settings/bloc/settings_bloc.dart';
import 'package:dental_plaza/settings/enum/app_theme.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:pure/pure.dart';

AppTheme _theme(SettingsState state) => state.data.theme;

ThemeMode _themeToThemeMode(AppTheme theme) => theme.when(
      light: () => ThemeMode.light,
      dark: () => ThemeMode.dark,
      system: () => ThemeMode.system,
    );

AppLanguage _locale(SettingsState state) => state.data.locale;

Locale _localeToLocale(AppLanguage locale) => locale.when(
      kk: () => const Locale('kk'),
      ru: () => const Locale('ru'),
    );

bool? _view(SettingsState state) => state.data.isViewed;

// CurrencyDTO? _currency(SettingsState state) => state.data.currency;

class SettingsScope extends StatelessWidget {
  final Widget child;

  const SettingsScope({
    required this.child,
    super.key,
  });

  static const BlocScope<SettingsEvent, SettingsState, SettingsBLoC> _scope =
      BlocScope();

  // --- Data --- //

  static ScopeData<ThemeMode> get themeModeOf =>
      _themeToThemeMode.dot(_theme).pipe(_scope.select);

  static ScopeData<AppTheme> get appThemeOf => _scope.select(_theme);

  static ScopeData<Locale> get localeOf =>
      _localeToLocale.dot(_locale).pipe(_scope.select);

  static ScopeData<AppLanguage> get appLanguageOf => _scope.select(_locale);

  static ScopeData<bool?> get isNotificationViewed => _scope.select(_view);

  // static ScopeData<CurrencyDTO?> get currencyOf => _scope.select(_currency);

  // --- Methods --- //

  static UnaryScopeMethod<AppTheme> get setTheme => _scope.unary(
        (context, theme) => SettingsEvent.setTheme(theme: theme),
      );

  static UnaryScopeMethod<AppLanguage> get setLocale => _scope.unary(
        (context, locale) => SettingsEvent.setLocale(locale: locale),
      );

  static UnaryScopeMethod<bool> get setisNotificationViewed => _scope.unary(
        (context, view) => SettingsEvent.setView(view: view),
      );

  // static UnaryScopeMethod<CurrencyDTO> get setCurrency => _scope.unary(
  //       (context, currency) => SettingsEvent.setCurrency(currency: currency),
  //     );

  // --- Build --- //

  @override
  Widget build(BuildContext context) => MultiBlocProvider(
        providers: [
          BlocProvider<SettingsBLoC>(
            create: (context) => SettingsBLoC(
              settingsRepository: context.repository.settings,
            ),
          ),
          BlocProvider<AppBLoC>(
            create: (context) => AppBLoC(
              context.repository.authRepository,
            ),
          ),
          // BlocProvider<AppRoleBloc>(
          //   create: (context) => AppRoleBloc(),
          // ),
          BlocProvider<BaseBLoC>(
            create: (context) => BaseBLoC(),
          ),
          // BlocProvider<BaseDrawerCubit>(
          //   create: (_) => BaseDrawerCubit(),
          // ),
          BlocProvider<ProfileCubit>(
            create: (_) => ProfileCubit(
              context.repository.authRepository,
            ),
          ),
          BlocProvider<HealthInfoCubit>(
            create: (_) => HealthInfoCubit(
              context.repository.authRepository,
            ),
          ),
          BlocProvider<BaseAppbarCubit>(
            create: (_) => BaseAppbarCubit(),
          ),
          BlocProvider<RecordsCubit>(
            create: (_) =>
                RecordsCubit(context.repository.recordRepository)..getRecords(),
          ),
          BlocProvider<ChatCubit>(
            create: (_) => ChatCubit(
              context.repository.mainRepository,
              context.repository.authRepository,
            ),
          ),
          BlocProvider<NotificationsCubit>(
            create: (_) => NotificationsCubit(
              context.repository.mainRepository,
            )..getNots(),
          ),
          BlocProvider<ViewNotificationsCubit>(
            create: (_) => ViewNotificationsCubit(
              context.repository.mainRepository,
            ),
          ),
        ],
        child: child,
      );
}
