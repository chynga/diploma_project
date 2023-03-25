import 'package:dental_plaza/features/app/logic/main_runner.dart';
import 'package:dental_plaza/features/app/model/async_app_dependencies.dart';
import 'package:dental_plaza/features/app/view/dental_plaza_app.dart';

Future<void> main() => MainRunner.run<AsyncAppDependencies>(
      asyncDependencies: AsyncAppDependencies.obtain,
      appBuilder: (dependencies) => DentalPlazaApp(
        sharedPreferences: dependencies.sharedPreferences,
        packageInfo: dependencies.packageInfo,
      ),
    );
