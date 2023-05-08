import 'package:dental_plaza/core/database/drift/app_database.dart';
import 'package:dental_plaza/core/network/layers/network_executer.dart';
import 'package:dental_plaza/features/auth/database/auth_dao.dart';
import 'package:dental_plaza/features/auth/datasource/auth_remote_ds.dart';
import 'package:dental_plaza/features/auth/repository/auth_repository.dart';
import 'package:dental_plaza/features/auth/repository/auth_repository_impl.dart';
import 'package:dental_plaza/features/main/datasource/main_remote_ds.dart';
import 'package:dental_plaza/features/main/repository/main_repository_ds.dart';
import 'package:dental_plaza/features/record/datasource/record_remote_ds.dart';
import 'package:dental_plaza/features/record/repository/record_repository.dart';
import 'package:dental_plaza/settings/database/settings_dao.dart';
import 'package:dental_plaza/settings/repository/settings_repository.dart';
import 'package:shared_preferences/shared_preferences.dart';

abstract class IRepositoryStorage {
  ISettingsRepository get settings;

  IAuthRepository get authRepository;
  IMainRepository get mainRepository;
  IRecordRepository get recordRepository;

  // Data sources
  IAuthRemoteDS get authRemoteDS;
  IMainRemoteDS get mainRemoteDS;
  IRecordRemoteDS get recordRemoteDs;
}

class RepositoryStorage implements IRepositoryStorage {
  // ignore: unused_field
  final AppDatabase _appDatabase;
  final SharedPreferences _sharedPreferences;
  final NetworkExecuter _networkExecuter;

  RepositoryStorage({
    required AppDatabase appDatabase,
    required SharedPreferences sharedPreferences,
    required NetworkExecuter networkExecuter,
  })  : _appDatabase = appDatabase,
        _sharedPreferences = sharedPreferences,
        _networkExecuter = networkExecuter;

  ///
  /// Repositories
  ///

  @override
  ISettingsRepository get settings => SettingsRepository(
        settingsDao: SettingsDao(sharedPreferences: _sharedPreferences),
      );

  @override
  IAuthRepository get authRepository => AuthRepositoryImpl(
        remoteDS: authRemoteDS,
        authDao: AuthDao(sharedPreferences: _sharedPreferences),
        client: _networkExecuter,
      );

  @override
  IAuthRemoteDS get authRemoteDS => AuthRemoteDSImpl(
        client: _networkExecuter,
      );

  @override
  IMainRemoteDS get mainRemoteDS => MainRemoteDSImpl(client: _networkExecuter);

  @override
  IMainRepository get mainRepository => MainRepositoryImpl(mainRemoteDS,_networkExecuter);

  @override
  IRecordRemoteDS get recordRemoteDs =>
      RecordRemoteDSImpl(client: _networkExecuter);

  @override
  IRecordRepository get recordRepository =>
      RecordRepositoryImpl(recordRemoteDs, _networkExecuter);
}
