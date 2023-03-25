import 'dart:async';

import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/router/app_router.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_back_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_text_field.dart';
import 'package:flutter/material.dart';

class ConfirmationCodePage extends StatefulWidget {
  const ConfirmationCodePage({super.key});

  @override
  State<ConfirmationCodePage> createState() => _ConfirmationCodePageState();
}

class _ConfirmationCodePageState extends State<ConfirmationCodePage> {
  late int start;
  late bool wait;
  late bool error;

  void startTimer() {
    const onsec = Duration(seconds: 1);
    // ignore: prefer_final_locals, unused_local_variable
    Timer timer = Timer.periodic(onsec, (timer) {
      if (start == 0) {
        setState(() {
          timer.cancel();
          wait = false;
        });
      } else if (mounted) {
        super.setState(() {
          start--;
          wait = true;
        });
      }
    });
  }

  @override
  void initState() {
    startTimer();
    start = 59;
    error = false;
    wait = true;
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
  }

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
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    context.localized.weHaveSentVerificationCode,
                    style: AppTextStyles.m14w300,
                  ),
                  const SizedBox(
                    height: 12,
                  ),
                  const CustomTextField(
                    borderRadius: 5,
                    maxLines: 1,
                    label: Text('Код'),
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
                        context.router.push(const NewPasswordRoute());
                      },
                      height: 40,
                      radius: 7,
                    ),
                  ),
                ],
              ),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                TextButton(
                  onPressed: start == 0
                      ? () {
                          startTimer();
                          start = 59;
                        }
                      : null,
                  style: TextButton.styleFrom(
                    visualDensity: const VisualDensity(vertical: -2),
                  ),
                  child: Text(
                    start == 0
                        ? context.localized.sendCodeAgain
                        : 'Не получили код? Отправить код повторно через 00:$start',
                    style: AppTextStyles.m13w500.copyWith(
                      color: start == 0 ? AppColors.kRed : AppColors.kBlue,
                    ),
                  ),
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}
