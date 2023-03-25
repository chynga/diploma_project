import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/bloc/app_bloc.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_text_field.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class RegistrationBlockWidget extends StatelessWidget {
  const RegistrationBlockWidget({super.key});

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
            label: Text(context.localized.fio),
          ),
          const SizedBox(
            height: 12,
          ),
          const CustomTextField(
            maxLines: 1,
            label: Text('E-mail'),
          ),
          const SizedBox(
            height: 12,
          ),
          const CustomTextField(
            maxLines: 1,
            label: Text('Номер телефона'),
          ),
          const SizedBox(
            height: 12,
          ),
          CustomTextField(
            maxLines: 1,
            label: Text(context.localized.password),
          ),
          const SizedBox(
            height: 12,
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 9),
            child: CustomButton(
              body: Text(
                context.localized.registrer,
                style: AppTextStyles.m12w500.copyWith(color: AppColors.kWhite),
              ),
              onClick: () {
                BlocProvider.of<AppBLoC>(context).add(const AppEvent.logining());
              },
              height: 40,
              radius: 7,
            ),
          )
        ],
      ),
    );
  }
}
