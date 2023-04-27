import 'dart:async';

import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/router/app_router.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_back_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_button.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_snackbars.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_text_field.dart';
import 'package:dental_plaza/features/auth/bloc/check_code_cubit.dart';
import 'package:dental_plaza/features/auth/bloc/forgot_password_cubit.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:loader_overlay/loader_overlay.dart';

class ConfirmationCodePage extends StatefulWidget with AutoRouteWrapper {
  final String email;
  const ConfirmationCodePage({super.key, required this.email});

  @override
  State<ConfirmationCodePage> createState() => _ConfirmationCodePageState();

  @override
  Widget wrappedRoute(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        BlocProvider<CheckCodeCubit>(
          create: (context) =>
              CheckCodeCubit(context.repository.authRepository),
        ),
        BlocProvider<ForgotPasswordCubit>(
          create: (context) =>
              ForgotPasswordCubit(context.repository.authRepository),
        ),
      ],
      child: this,
    );
  }
}

class _ConfirmationCodePageState extends State<ConfirmationCodePage> {
  late int start;
  late bool wait;
  late bool error;

  TextEditingController codeController = TextEditingController();

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
    return LoaderOverlay(
      child: Scaffold(
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
                    CustomTextField(
                      borderRadius: 5,
                      controller: codeController,
                      keyboardType: TextInputType.number,
                      maxLines: 1,
                      label: const Text('Код'),
                    ),
                    const SizedBox(
                      height: 12,
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 9),
                      child: BlocListener<CheckCodeCubit, CheckCodeState>(
                        listener: (context, state) {
                          state.when(
                            initialState: () {
                              context.loaderOverlay.hide();
                            },
                            loadedState: (message) {
                              context.loaderOverlay.hide();
                              context.router.push(
                                NewPasswordRoute(
                                  code: codeController.text,
                                  email: widget.email,
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
                            if (codeController.text.isEmpty) {
                              buildErrorCustomSnackBar(
                                context,
                                context.localized.fillAllFields,
                              );
                              return;
                            }
                            BlocProvider.of<CheckCodeCubit>(context).checkCode(
                              email: widget.email,
                              code: codeController.text,
                            );
                          },
                          height: 40,
                          radius: 7,
                        ),
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
                            BlocProvider.of<ForgotPasswordCubit>(context)
                                .sendCode(email: widget.email);
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
      ),
    );
  }
}
