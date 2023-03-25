import 'package:dental_plaza/core/database/drift/app_database.dart';
import 'package:dental_plaza/core/network/layers/network_executer.dart';
import 'package:dental_plaza/features/auth/database/auth_dao.dart';
import 'package:dental_plaza/features/auth/datasource/auth_remote_ds.dart';
import 'package:dental_plaza/features/auth/repository/auth_repository.dart';
import 'package:dental_plaza/features/auth/repository/auth_repository_impl.dart';
import 'package:dental_plaza/settings/database/settings_dao.dart';
import 'package:dental_plaza/settings/repository/settings_repository.dart';
import 'package:shared_preferences/shared_preferences.dart';

abstract class IRepositoryStorage {
  ISettingsRepository get settings;

  IAuthRepository get authRepository;
  // IEstateRepository get mainRepository;
  // ICompanyRepository get companyRepository;
  // IAdRepository get adRepository;
  // IOtherListRepository get otherListRepository;

  // Data sources
  IAuthRemoteDS get authRemoteDS;
  // EstateRemoteDs get estateRemoteDS;
  // CompanyRemoteDS get companyRemoteDs;
  // IAdRemoteDS get adRemoteDS;
  // IOtherListRemoteDS get otherListRemoteDS;
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
  // TODO: implement authRemoteDS
  IAuthRemoteDS get authRemoteDS => AuthRemoteDSImpl(
        client: _networkExecuter,
      );

  // @override
  // IEstateRepository get mainRepository => EstateRepositoryImpl(
  //       estateRemoteDS: estateRemoteDS,
  //       networkExecuter: _networkExecuter,
  //     );

  // @override
  // ICompanyRepository get companyRepository => CompanyRepositoryImpl(
  //       companyRemoteDS: companyRemoteDs,
  //       client: _networkExecuter,
  //     );

  // @override
  // IAdRepository get adRepository => AdRepositoryImpl(
  //       client: _networkExecuter,
  //       remoteDS: adRemoteDS,
  //     );

  // @override
  // IOtherListRepository get otherListRepository => OtherListRepositoryImpl(
  //       client: _networkExecuter,
  //       otherListRemoteDS: otherListRemoteDS,
  //  );

  ///
  /// Remote datasources
  ///

  // @override
  // IAuthRemoteDS get authRemoteDS => AuthRemoteDSImpl(client: _networkExecuter);

  // @override
  // AuthLocalDs get authLocalDs => AuthLocalDsImpl(sharedPreferences: _sharedPreferences);

  // @override
  // CompanyRemoteDS get companyRemoteDs => CompanyRemoteDSImpl(client: _networkExecuter);

  // @override
  // EstateRemoteDs get estateRemoteDS => EstateRemoteDsImpl(client: _networkExecuter);

  // @override
  // IAdRemoteDS get adRemoteDS => AdRemoteDSImpl(client: _networkExecuter);

  // @override
  // IOtherListRemoteDS get otherListRemoteDS => OtherListRemoteDSImpl(client: _networkExecuter);
}
