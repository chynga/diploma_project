import 'package:dental_plaza/core/extension/extensions.dart';
import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/bloc/app_bloc.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_button.dart';
import 'package:dental_plaza/features/auth/widgets/set_language_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_svg/flutter_svg.dart';

class OnboardingPage extends StatefulWidget {
  const OnboardingPage({super.key});

  @override
  State<OnboardingPage> createState() => _OnboardingPageState();
}

class _OnboardingPageState extends State<OnboardingPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 82)
                  .copyWith(top: MediaQuery.of(context).size.height * 0.28),
              child: Image.asset(Assets.images.dentalPlaza.path),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 45),
              child: Column(
                children: [
                  Text(
                    context.localized.onboardingText,
                    style: AppTextStyles.m15w400,
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(
                    height: 32,
                  ),
                  const SetLanguageWidget(),
                  const SizedBox(
                    height: 32,
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 100),
                    child: CustomButton(
                      body: Text(
                        context.localized.start,
                        style: AppTextStyles.m14w700
                            .copyWith(color: AppColors.kWhite),
                      ),
                      onClick: () {
                        BlocProvider.of<AppBLoC>(context)
                            .add(const AppEvent.onboardingSave());
                      },
                      style: mainButtonStyle(radius: 25),
                    ),
                  ),
                ],
              ),
            ),
            SvgPicture.asset(Assets.icons.icOnboarding.path),
          ],
        ),
      ),
    );
  }
}
