import 'package:dental_plaza/core/common/validators.dart';
import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_snackbars.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_text_field.dart';
import 'package:dental_plaza/features/auth/bloc/register_cubit.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:loader_overlay/loader_overlay.dart';
import 'package:mask_text_input_formatter/mask_text_input_formatter.dart';

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
  MaskTextInputFormatter maskPhoneFormatter = MaskTextInputFormatter(
    mask: '+7 (###) ###-##-##',
    filter: {"#": RegExp('[0-9]')},
  );
  bool passwordVisible = false;
  bool ocureText = true;

  final _formKey = GlobalKey<FormState>();
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 40),
      child: Form(
        key: _formKey,
        child: Column(
          children: [
            const SizedBox(
              height: 10,
            ),
            CustomTextField(
              validator: (p0) => nameValidator(p0, context),
              maxLines: 1,
              label: Text(context.localized.fio),
              controller: fioController,
            ),
            const SizedBox(
              height: 12,
            ),
            CustomTextField(
              validator: (p0) => emailValidator(p0, context),
              maxLines: 1,
              label: const Text('E-mail'),
              controller: emailController,
            ),
            const SizedBox(
              height: 12,
            ),
            CustomTextField(
              validator: (value) {
                if (value == null || value.isEmpty) {
                  return context.localized.enterNumber;
                }
                return null;
              },
              maxLines: 1,
              label: Text(context.localized.phone),
              controller: phoneController,
              inputFormatters: [maskPhoneFormatter],
              keyboardType: TextInputType.phone,
            ),
            const SizedBox(
              height: 12,
            ),
            CustomTextField(
              suffixIcon: IconButton(
                splashRadius: 5,
                icon: passwordVisible
                    ? const Icon(Icons.visibility)
                    : const Icon(Icons.visibility_off),
                constraints: const BoxConstraints(
                  maxHeight: 18,
                  maxWidth: 18,
                ),
                onPressed: () {
                  setState(() {
                    if (passwordVisible == false) {
                      passwordVisible = true;
                      ocureText = false;
                    } else {
                      passwordVisible = false;
                      ocureText = true;
                    }
                  });
                },
              ),
              ocureText: ocureText,
              validator: (p0) => passwordValidator(p0, context),
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
                    fioController.clear();
                    emailController.clear();
                    phoneController.clear();
                    passwordController.clear();
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
                    if (_formKey.currentState!.validate()) {
                      if (fioController.text.isEmpty ||
                          emailController.text.isEmpty ||
                          maskPhoneFormatter.getUnmaskedText().isEmpty ||
                          passwordController.text.isEmpty) {
                        buildErrorCustomSnackBar(
                          context,
                          context.localized.fillAllFields,
                        );
                        return;
                      }
                      BlocProvider.of<RegisterCubit>(context).register(
                        phone: "+7${maskPhoneFormatter.getUnmaskedText()}",
                        password: passwordController.text,
                        email: emailController.text,
                        name: fioController.text,
                      );
                    }
                  },
                  height: 40,
                  radius: 7,
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
