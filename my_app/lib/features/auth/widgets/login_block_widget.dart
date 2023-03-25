import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/core/extension/extensions.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/bloc/app_bloc.dart';
import 'package:dental_plaza/features/app/router/app_router.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_text_field.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class LoginBlockWidget extends StatelessWidget {
  const LoginBlockWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 40),
      child: Column(
        children: [
          const SizedBox(
            height: 10,
          ),
          CustomTextField(
            maxLines: 1,
            label: Text(context.localized.yourEmail),
          ),
          const SizedBox(
            height: 12,
          ),
          CustomTextField(
            maxLines: 1,
            label: Text(context.localized.yourPassword),
          ),
          const SizedBox(
            height: 12,
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 9),
            child: CustomButton(
              body: Text(
                context.localized.login,
                style: AppTextStyles.m12w500.copyWith(color: AppColors.kWhite),
              ),
              onClick: () {
                BlocProvider.of<AppBLoC>(context)
                    .add(const AppEvent.logining());
              },
              height: 40,
              radius: 7,
            ),
          ),
          TextButton(
            onPressed: () {
              context.router.push(const ForgotPasswordRoute());
            },
            style: TextButton.styleFrom(
              visualDensity: const VisualDensity(vertical: -2),
            ),
            child: Text(
              context.localized.forgotPassword,
              style: AppTextStyles.m13w500.copyWith(color: AppColors.kRed),
            ),
          )
        ],
      ),
    );
  }
}
