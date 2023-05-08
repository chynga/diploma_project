
import 'package:dental_plaza/features/app/enum/app_language.dart';
import 'package:dental_plaza/settings/database/settings_dao.dart';
import 'package:dental_plaza/settings/enum/app_theme.dart';
import 'package:dental_plaza/settings/model/settings_data.dart';
import 'package:pure/pure.dart';

abstract class ISettingsRepository {
  SettingsData currentData();

  Future<void> setTheme(AppTheme value);

  Future<void> setLocale(AppLanguage locale);

  Future<void> setView({required bool view});

  bool? getView();

  // Future<void> setCurrency(CurrencyDTO currency);

  // CurrencyDTO? getCurrency();
}

class SettingsRepository implements ISettingsRepository {
  final ISettingsDao _settingsDao;

  SettingsRepository({
    required ISettingsDao settingsDao,
  }) : _settingsDao = settingsDao;

  AppTheme? get _theme => AppTheme.values.byName.nullable(_settingsDao.themeMode.value);
  
  @override
  bool? getView() => _settingsDao.view.value;

  @override
  SettingsData currentData() => SettingsData(
        theme: _theme ?? AppTheme.system,
        locale: _getLocale(),
        isViewed: _settingsDao.view.value??true,
        // currency: getCurrency(),
      );

  AppLanguage _getLocale() {
    final String? str = _settingsDao.locale.value;

    return str != null ? AppLanguage.fromString(str) : AppLanguage.ru;
  }

  @override
  Future<void> setTheme(AppTheme value) async => _settingsDao.themeMode.setValue(value.name);

  @override
  Future<void> setLocale(AppLanguage locale) async => _settingsDao.locale.setValue(locale.name);
  
  @override
  Future<void> setView({required bool view}) async => _settingsDao.view.setValue(view);
  

  // @override
  // Future<void> setCity(CityDTO? city) async =>
  //     city == null ? _settingsDao.currentCity.remove() : _settingsDao.currentCity.setValue(jsonEncode(city.toJson()));

  // @override
  // Future<void> setCurrency(CurrencyDTO currency) async => _settingsDao.currency.setValue(jsonEncode(currency.toJson()));

  // @override
  // CityDTO? getCity() {
  //   final String? str = _settingsDao.currentCity.value;
  //   if (str == null) return null;

  //   return CityDTO.fromJson(
  //     jsonDecode(str) as Map<String, dynamic>,
  //   );
  // }

  // @override
  // CurrencyDTO? getCurrency() {
  //   final String? str = _settingsDao.currency.value;
  //   if (str == null) return null;

  //   return CurrencyDTO.fromJson(
  //     jsonDecode(str) as Map<String, dynamic>,
  //   );
  // }
}
