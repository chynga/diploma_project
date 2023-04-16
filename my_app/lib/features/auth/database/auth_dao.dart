import 'package:dental_plaza/core/database/shared_preferences/typed_preferences_dao.dart';
import 'package:shared_preferences/shared_preferences.dart';

abstract class IAuthDao {
  PreferencesEntry<String> get user;

  PreferencesEntry<bool> get onboarding;
  
  PreferencesEntry<bool> get showcase;
}

class AuthDao extends TypedPreferencesDao implements IAuthDao {
  AuthDao({
    required SharedPreferences sharedPreferences,
  }) : super(sharedPreferences, name: 'auth');

  @override
  PreferencesEntry<String> get user => stringEntry('user');

  @override
  PreferencesEntry<bool> get onboarding => boolEntry('onboarding');

  @override
  PreferencesEntry<bool> get showcase => boolEntry('showcase');
}
