import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/bloc/app_bloc.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_snackbars.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_text_field.dart';
import 'package:dental_plaza/features/auth/bloc/register_cubit.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:loader_overlay/loader_overlay.dart';

class RegistrationBlockWidget extends StatefulWidget {
  final PageController pageController;
  const RegistrationBlockWidget({super.key, required this.pageController});

  @override
  State<RegistrationBlockWidget> createState() =>
      _RegistrationBlockWidgetState();
}

class _RegistrationBlockWidgetState extends State<RegistrationBlockWidget> {
  final TextEditingController fioController = TextEditingController();
  final TextEditingController emailController = TextEditingController();
  final TextEditingController phoneController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
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
            controller: fioController,
          ),
          const SizedBox(
            height: 12,
          ),
          CustomTextField(
            maxLines: 1,
            label: const Text('E-mail'),
            controller: emailController,
          ),
          const SizedBox(
            height: 12,
          ),
          CustomTextField(
            maxLines: 1,
            label: Text(context.localized.phone),
            controller: phoneController,
          ),
          const SizedBox(
            height: 12,
          ),
          CustomTextField(
            maxLines: 1,
            label: Text(context.localized.password),
            controller: passwordController,
          ),
          const SizedBox(
            height: 12,
          ),
          BlocListener<RegisterCubit, RegisterState>(
            listener: (context, state) {
              state.maybeWhen(
                errorState: (message) {
                  context.loaderOverlay.hide();
                  buildErrorCustomSnackBar(context, message);
                },
                loadingState: () {
                  context.loaderOverlay.show();
                },
                loadedState: (message) {
                  context.loaderOverlay.hide();
                  buildSuccessCustomSnackBar(context, message);
                  widget.pageController.animateToPage(
                    1,
                    duration: const Duration(milliseconds: 300),
                    curve: Curves.linear,
                  );
                },
                orElse: () {
                  context.loaderOverlay.hide();
                },
              );
            },
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 9),
              child: CustomButton(
                body: Text(
                  context.localized.registrer,
                  style:
                      AppTextStyles.m12w500.copyWith(color: AppColors.kWhite),
                ),
                onClick: () {
                  if (fioController.text.isEmpty ||
                      emailController.text.isEmpty ||
                      phoneController.text.isEmpty ||
                      passwordController.text.isEmpty) {
                    buildErrorCustomSnackBar(
                        context, context.localized.fillAllFields);
                    return;
                  }
                  BlocProvider.of<RegisterCubit>(context).register(
                    phone: phoneController.text,
                    password: passwordController.text,
                    email: emailController.text,
                    name: fioController.text,
                  );
                },
                height: 40,
                radius: 7,
              ),
            ),
          )
        ],
      ),
    );
  }
}
