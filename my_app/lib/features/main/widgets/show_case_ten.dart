import 'package:dental_plaza/core/common/constants.dart';
import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/bloc/app_bloc.dart';
import 'package:dental_plaza/features/app/widgets/skip_and_next_button_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:showcaseview/showcaseview.dart';

class ShowCaseTen extends StatelessWidget {
  final Widget child;
  const ShowCaseTen({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Showcase.withWidget(
      overlayColor: Colors.black,
      overlayOpacity: 0.7,
      disableMovingAnimation: true,
      key: ten,
      height: MediaQuery.of(context).size.height,
      width: MediaQuery.of(context).size.width,
      targetBorderRadius: BorderRadius.circular(25),
      onTargetClick: () {
        ShowCaseWidget.of(context).next();
        BlocProvider.of<AppBLoC>(context).add(const AppEvent.showcaseSave());
      },
      container: SizedBox(
        height: MediaQuery.of(context).size.height,
        width: MediaQuery.of(context).size.width,
        child: Transform.translate(
          offset: const Offset(0, -160),
          child: Column(
            children: [
              Transform.translate(
                offset: const Offset(0, -528),
                child: SkipAndNextButtonWidget(
                  myContext: context,
                ),
              ),
              Transform.translate(
                offset: const Offset(50, -120),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    SvgPicture.asset(
                      Assets.icons.cornerLeftDown.path,
                    ),
                    const SizedBox(
                      width: 8,
                    ),
                    Text(
                      context.localized.seeWhatDoctorsAreAvailable,
                      style: AppTextStyles.m16w700White,
                      textAlign: TextAlign.end,
                    )
                  ],
                ),
              )
            ],
          ),
        ),
      ),
      child: child,
    );
  }
}
