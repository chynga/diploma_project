import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/core/common/validators.dart';
import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/router/app_router.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_back_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_snackbars.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_text_field.dart';
import 'package:dental_plaza/features/auth/bloc/new_password_cubit.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:loader_overlay/loader_overlay.dart';

class NewPasswordPage extends StatefulWidget with AutoRouteWrapper {
  final String code;
  final String email;
  const NewPasswordPage({super.key, required this.code, required this.email});

  @override
  State<NewPasswordPage> createState() => _NewPasswordPageState();

  @override
  Widget wrappedRoute(BuildContext context) {
    return BlocProvider<NewPasswordCubit>(
      create: (context) => NewPasswordCubit(context.repository.authRepository),
      child: this,
    );
  }
}

class _NewPasswordPageState extends State<NewPasswordPage> {
  TextEditingController passwordController = TextEditingController();
  TextEditingController repeatPasswordController = TextEditingController();

  bool passwordVisible = false;
  bool ocureText = true;

  bool passwordVisibleConfirm = false;
  bool ocureTextConfirm = true;

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
                      CustomTextField(
                        validator: (p0) => passwordValidator(p0, context),
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
                        controller: passwordController,
                        borderRadius: 5,
                        maxLines: 1,
                        label: Text(context.localized.password),
                      ),
                      const SizedBox(
                        height: 12,
                      ),
                      CustomTextField(
                        validator: (value) => passwordConfirmationValidator(
                          value,
                          passwordController.text,
                          context,
                        ),
                        ocureText: ocureTextConfirm,
                        suffixIcon: IconButton(
                          splashRadius: 5,
                          icon: passwordVisibleConfirm
                              ? const Icon(Icons.visibility)
                              : const Icon(Icons.visibility_off),
                          constraints: const BoxConstraints(
                            maxHeight: 18,
                            maxWidth: 18,
                          ),
                          onPressed: () {
                            setState(() {
                              if (passwordVisibleConfirm == false) {
                                passwordVisibleConfirm = true;
                                ocureTextConfirm = false;
                              } else {
                                passwordVisibleConfirm = false;
                                ocureTextConfirm = true;
                              }
                            });
                          },
                        ),
                        controller: repeatPasswordController,
                        borderRadius: 5,
                        maxLines: 1,
                        label: Text(context.localized.newPassword),
                      ),
                      const SizedBox(
                        height: 12,
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 9),
                        child: BlocListener<NewPasswordCubit, NewPasswordState>(
                          listener: (context, state) {
                            state.when(
                              initialState: () {
                                context.loaderOverlay.hide();
                              },
                              loadedState: (message) {
                                context.loaderOverlay.hide();
                                buildSuccessCustomSnackBar(context, message);
                                context.router.popUntil(
                                  (route) =>
                                      route.settings.name == LauncherRoute.name,
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
                              // if (passwordController.text.isEmpty ||
                              //     repeatPasswordController.text.isEmpty) {
                              //   buildErrorCustomSnackBar(
                              //     context,
                              //     context.localized.fillAllFields,
                              //   );
                              //   return;
                              // }
                              // if (passwordController.text !=
                              //     repeatPasswordController.text) {
                              //   buildErrorCustomSnackBar(
                              //     context,
                              //     context.localized.passwordsDontMatches,
                              //   );
                              //   return;
                              // }
                              if (_formKey.currentState!.validate()) {
                                BlocProvider.of<NewPasswordCubit>(context)
                                    .newPassword(
                                  email: widget.email,
                                  code: widget.code,
                                  password: passwordController.text,
                                );
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
