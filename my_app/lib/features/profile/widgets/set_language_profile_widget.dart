import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/enum/app_language.dart';
import 'package:dental_plaza/settings/widget/scope/settings_scope.dart';
import 'package:flutter/material.dart';

class SetLanguageProfileWidget extends StatefulWidget {
  const SetLanguageProfileWidget({super.key});

  @override
  State<SetLanguageProfileWidget> createState() => _SetLanguageProfileWidgetState();
}

class _SetLanguageProfileWidgetState extends State<SetLanguageProfileWidget> {
  late AppLanguage value;
  @override
  void initState() {
    super.initState();
    value = context.currentLocale;
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        InkWell(
          borderRadius: BorderRadius.circular(4),
          onTap: () {
            value = AppLanguage.ru;
            context.dio.options.headers['Content-Language'] =
                AppLanguage.ru.localeCode;
            SettingsScope.setLocale(context, AppLanguage.ru);
            setState(() {});
          },
          child: SizedBox(
            child: Column(
              children: [
                Text(
                  'РУС',
                  style: AppTextStyles.m14w500.copyWith(color: value == AppLanguage.ru?AppColors.kBlue:AppColors.kGrey2),
                ),
              ],
            ),
          ),
        ),
        const SizedBox(
          width: 24,
        ),
        InkWell(
          borderRadius: BorderRadius.circular(4),
          onTap: () {
            value = AppLanguage.kk;
            context.dio.options.headers['Content-Language'] =
                AppLanguage.kk.localeCode;
            SettingsScope.setLocale(context, AppLanguage.kk);
            setState(() {});
          },
          child: SizedBox(
            child: Column(
              children: [
                Text(
                  'КАЗ',
                  style: AppTextStyles.m14w500.copyWith(color: value == AppLanguage.kk?AppColors.kBlue:AppColors.kGrey2),
                ),
                const SizedBox(
                  height: 2,
                ),
               
              ],
            ),
          ),
        ),
      ],
    );
  }
}
