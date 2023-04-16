// ignore: unused_import
import 'dart:developer';

import 'package:dental_plaza/core/common/constants.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/bloc/app_bloc.dart';
import 'package:dental_plaza/features/app/view/base.dart';
import 'package:dental_plaza/features/auth/view/auth_page.dart';
import 'package:dental_plaza/features/auth/view/onboarding_page.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:showcaseview/showcaseview.dart';

// ignore: unused_element
const _tag = 'Launcher';

class Launcher extends StatefulWidget {
  const Launcher({super.key});

  @override
  State<Launcher> createState() => _LauncherState();
}

class _LauncherState extends State<Launcher> {
  @override
  void initState() {
    BlocProvider.of<AppBLoC>(context).add(const AppEvent.checkAuth());
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return ShowCaseWidget(
      blurValue: 1,
      builder: Builder(
        builder: (context) => BlocConsumer<AppBLoC, AppState>(
          listener: (context, state) {
            state.whenOrNull(
              inAppState: (showcase) {
                // BlocProvider.of<ProfileCubit>(context).getProfile();
                BlocProvider.of<AppBLoC>(context)
                    .add(const AppEvent.sendDeviceToken());
                if (showcase == false) {
                  WidgetsBinding.instance.addPostFrameCallback((timeStamp) {
                    ShowCaseWidget.of(context).startShowCase(
                      [
                        one,
                        two,
                        three,
                        four,
                        five,
                        six,
                        seven,
                        eight,
                        nine,
                        ten
                      ],
                    );
                  });
                }
              },
              errorState: (message) {
                // buildErrorCustomSnackBar(context, 'AppBloc => $message');
              },
            );
          },
          builder: (context, state) {
            return state.maybeWhen(
              notAuthorizedState: () {
                // return const Base();
                return const AuthPage();
              },
              onboardingState: () {
                return const OnboardingPage();
              },
              loadingState: () {
                return const _Scaffold(child: SizedBox());
              },
              // errorState: (String message) {
              //   return const _Scaffold(child: CustomErrorLoadingWidget());
              // },
              orElse: () {
                return const Base();
              },
            );
          },
        ),
      ),
      autoPlayDelay: const Duration(seconds: 3),
    ); // OnBoardingPage();
  }
}

class _Scaffold extends StatelessWidget {
  final Widget child;
  const _Scaffold({
    required this.child,
    // super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.kWhite,
      body: SafeArea(child: child),
    );
  }
}
