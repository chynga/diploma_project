import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/core/common/validators.dart';
import 'package:dental_plaza/core/extension/extensions.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/bloc/app_bloc.dart';
import 'package:dental_plaza/features/app/router/app_router.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_snackbars.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_text_field.dart';
import 'package:dental_plaza/features/auth/bloc/login_cubit.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:loader_overlay/loader_overlay.dart';

class LoginBlockWidget extends StatefulWidget {
  const LoginBlockWidget({super.key});

  @override
  State<LoginBlockWidget> createState() => _LoginBlockWidgetState();
}

class _LoginBlockWidgetState extends State<LoginBlockWidget> {
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();

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
              validator: (p0) => emailValidator(p0, context),
              maxLines: 1,
              label: Text(context.localized.yourEmail),
              controller: emailController,
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
              validator: (value) {
                if (value == null || value.isEmpty) {
                  return context.localized.enterPassword;
                }
                return null;
              },
              maxLines: 1,
              label: Text(context.localized.yourPassword),
              controller: passwordController,
            ),
            const SizedBox(
              height: 12,
            ),
            BlocListener<LoginCubit, LoginState>(
              listener: (context, state) {
                state.maybeWhen(
                  errorState: (message) {
                    context.loaderOverlay.hide();
                    buildErrorCustomSnackBar(context, message);
                  },
                  loadingState: () {
                    context.loaderOverlay.show();
                  },
                  loadedState: (user) {
                    BlocProvider.of<AppBLoC>(context)
                        .add(const AppEvent.logining());
                    context.loaderOverlay.hide();
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
                    context.localized.login,
                    style:
                        AppTextStyles.m12w500.copyWith(color: AppColors.kWhite),
                  ),
                  onClick: () {
                    if (_formKey.currentState!.validate()) {
                      BlocProvider.of<LoginCubit>(context).login(
                        phone: emailController.text,
                        password: passwordController.text,
                      );
                    }
                    // if (emailController.text.isEmpty) {
                    //   buildErrorCustomSnackBar(
                    //     context,
                    //     context.localized.enterEmail,
                    //   );
                    //   return;
                    // }
                    // if (passwordController.text.isEmpty) {
                    //   buildErrorCustomSnackBar(
                    //     context,
                    //     context.localized.enterPassword,
                    //   );
                    //   return;
                    // }
                  },
                  height: 40,
                  radius: 7,
                ),
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
      ),
    );
  }
}
