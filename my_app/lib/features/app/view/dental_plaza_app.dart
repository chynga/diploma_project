import 'package:dental_plaza/core/model/dependencies_storage.dart';
import 'package:dental_plaza/core/model/repository_storage.dart';
import 'package:dental_plaza/core/widget/dependencies_scope.dart';
import 'package:dental_plaza/core/widget/repository_scope.dart';
import 'package:dental_plaza/features/app/view/app_configuration.dart';
import 'package:dental_plaza/settings/widget/scope/settings_scope.dart';
import 'package:flutter/material.dart';
import 'package:package_info_plus/package_info_plus.dart';
import 'package:shared_preferences/shared_preferences.dart';

class DentalPlazaApp extends StatelessWidget {
  final SharedPreferences sharedPreferences;
  final PackageInfo packageInfo;
  const DentalPlazaApp({
    super.key,
    required this.sharedPreferences,
    required this.packageInfo,
  });

  @override
  Widget build(BuildContext context) => DependenciesScope(
        create: (context) => DependenciesStorage(
          databaseName: 'altyn_belgi_database',
          sharedPreferences: sharedPreferences,
          packageInfo: packageInfo,
        ),
        child: RepositoryScope(
          create: (context) => RepositoryStorage(
            appDatabase: DependenciesScope.of(context).database,
            sharedPreferences: sharedPreferences,
            networkExecuter: DependenciesScope.of(context).networkExecuter,
          ),
          child: const SettingsScope(
            child: AppConfiguration(),
          ),
        ),
      );
}
