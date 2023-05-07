import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/core/common/validators.dart';
import 'package:dental_plaza/core/extension/extensions.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/router/app_router.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_back_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_snackbars.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_text_field.dart';
import 'package:dental_plaza/features/auth/bloc/forgot_password_cubit.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:loader_overlay/loader_overlay.dart';

class ForgotPasswordPage extends StatefulWidget with AutoRouteWrapper {
  const ForgotPasswordPage({super.key});

  @override
  State<ForgotPasswordPage> createState() => _ForgotPasswordPageState();

  @override
  Widget wrappedRoute(BuildContext context) {
    return BlocProvider<ForgotPasswordCubit>(
      create: (context) =>
          ForgotPasswordCubit(context.repository.authRepository),
      child: this,
    );
  }
}

class _ForgotPasswordPageState extends State<ForgotPasswordPage> {
  TextEditingController emailController = TextEditingController();
  final _formKey = GlobalKey<FormState>();
  @override
  Widget build(BuildContext context) {
    return LoaderOverlay(
      child: Scaffold(
        body: SafeArea(
          child: Form(
            key: _formKey,
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
                      Text(
                        context.localized.enterYourEmailSoWeCanSend,
                        style: AppTextStyles.m14w300,
                      ),
                      const SizedBox(
                        height: 12,
                      ),
                      CustomTextField(
                        validator: (p0) => emailValidator(p0, context),
                        borderRadius: 5,
                        maxLines: 1,
                        label: const Text('E-mail'),
                        controller: emailController,
                      ),
                      const SizedBox(
                        height: 12,
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 9),
                        child: BlocListener<ForgotPasswordCubit,
                            ForgotPasswordState>(
                          listener: (context, state) {
                            state.when(
                              initialState: () {
                                context.loaderOverlay.hide();
                              },
                              loadedState: (message) {
                                context.loaderOverlay.hide();
                                context.router.push(
                                  ConfirmationCodeRoute(
                                    email: emailController.text,
                                  ),
                                );
                              },
                              loadingState: () {
                                context.loaderOverlay.show();
                              },
                              errorState: (message) {
                                buildErrorCustomSnackBar(context, message);
                                context.loaderOverlay.hide();
                              },
                            );
                          },
                          child: CustomButton(
                            body: Text(
                              context.localized.send,
                              style: AppTextStyles.m12w500
                                  .copyWith(color: AppColors.kWhite),
                            ),
                            onClick: () {
                              if (_formKey.currentState!.validate()) {
                                BlocProvider.of<ForgotPasswordCubit>(context)
                                    .sendCode(email: emailController.text);
                              }
                            },
                            height: 40,
                            radius: 7,
                          ),
                        ),
                      ),
                    ],
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
