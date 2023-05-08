import 'package:dental_plaza/features/app/enum/app_language.dart';
import 'package:dental_plaza/settings/enum/app_theme.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'settings_data.freezed.dart';

@freezed
class SettingsData with _$SettingsData {
  factory SettingsData({
    required AppTheme theme,
    required AppLanguage locale,
    required bool isViewed,
    // CurrencyDTO? currency,
  }) = _SettingsData;
}
