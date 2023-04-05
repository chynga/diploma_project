import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/enum/app_language.dart';
import 'package:dental_plaza/settings/widget/scope/settings_scope.dart';
import 'package:flutter/material.dart';

class SetLanguageWidget extends StatefulWidget {
  final MainAxisAlignment? mainAxisAlignment;
  const SetLanguageWidget({super.key, this.mainAxisAlignment});

  @override
  State<SetLanguageWidget> createState() => _SetLanguageWidgetState();
}

class _SetLanguageWidgetState extends State<SetLanguageWidget> {
  late AppLanguage value;
  @override
  void initState() {
    super.initState();
    value = context.currentLocale;
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: widget.mainAxisAlignment ?? MainAxisAlignment.center,
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
            width: value == AppLanguage.ru ? null : 40,
            child: Column(
              children: [
                Text(
                  'РУС',
                  style: AppTextStyles.m14w500.copyWith(color: AppColors.kBlue),
                ),
                const SizedBox(
                  height: 2,
                ),
                if (value == AppLanguage.ru)
                  Container(
                    height: 3,
                    width: 25,
                    decoration: const BoxDecoration(
                      color: AppColors.kBlue,
                    ),
                  )
                else
                  const SizedBox(
                    height: 2,
                  )
              ],
            ),
          ),
        ),
        const SizedBox(
          width: 4,
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
            width: value == AppLanguage.kk ? null : 40,
            child: Column(
              children: [
                Text(
                  'ҚАЗ',
                  style: AppTextStyles.m14w500.copyWith(color: AppColors.kBlue),
                ),
                const SizedBox(
                  height: 2,
                ),
                if (value == AppLanguage.kk)
                  Container(
                    height: 3,
                    width: 25,
                    decoration: const BoxDecoration(
                      color: AppColors.kBlue,
                    ),
                  )
                else
                  const SizedBox(
                    height: 2,
                  )
              ],
            ),
          ),
        ),
      ],
    );
  }
}
