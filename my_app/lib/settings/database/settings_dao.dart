import 'package:dental_plaza/core/database/shared_preferences/typed_preferences_dao.dart';
import 'package:shared_preferences/shared_preferences.dart';

abstract class ISettingsDao {
  PreferencesEntry<String> get themeMode;

  PreferencesEntry<String> get locale;

  PreferencesEntry<bool> get view;

  PreferencesEntry<String> get currency;
}

class SettingsDao extends TypedPreferencesDao implements ISettingsDao {
  SettingsDao({
    required SharedPreferences sharedPreferences,
  }) : super(sharedPreferences, name: 'settings');

  @override
  PreferencesEntry<String> get themeMode => stringEntry('theme_mode');

  @override
  PreferencesEntry<String> get locale => stringEntry('locale');

  @override
  PreferencesEntry<bool> get view => boolEntry('notification_view');

  @override
  PreferencesEntry<String> get currency => stringEntry('currency');
}
