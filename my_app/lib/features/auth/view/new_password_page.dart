import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/router/app_router.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_back_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_text_field.dart';
import 'package:flutter/material.dart';

class NewPasswordPage extends StatefulWidget {
  const NewPasswordPage({super.key});

  @override
  State<NewPasswordPage> createState() => _NewPasswordPageState();
}

class _NewPasswordPageState extends State<NewPasswordPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.symmetric(horizontal: 16),
          children: [
            const SizedBox(
              height: 16,
            ),
            const CustomBackButton(),
            const SizedBox(
              height: 11,
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: Column(
                children: [
                  // Text(
                  //   context.localized.enterYourEmailSoWeCanSend,
                  //   style: AppTextStyles.m14w300,
                  // ),
                   CustomTextField(
                    borderRadius: 5,
                    maxLines: 1,
                    label: Text(context.localized.password),
                  ),
                  const SizedBox(
                    height: 12,
                  ),
                   CustomTextField(
                    borderRadius: 5,
                    maxLines: 1,
                    label: Text(context.localized.newPassword),
                  ),
                  const SizedBox(
                    height: 12,
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 9),
                    child: CustomButton(
                      body: Text(
                        context.localized.send,
                        style: AppTextStyles.m12w500
                            .copyWith(color: AppColors.kWhite),
                      ),
                      onClick: () {
                        context.router.popUntil((route) => route.settings.name==LauncherRoute.name);
                      },
                      height: 40,
                      radius: 7,
                    ),
                  ),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
