import 'package:dental_plaza/core/common/constants.dart';
import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/widgets/skip_and_next_button_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:showcaseview/showcaseview.dart';

class ShowCaseNine extends StatelessWidget {
  final Widget child;
  const ShowCaseNine({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Showcase.withWidget(
      overlayColor: Colors.black,
      overlayOpacity: 0.7,
      disableMovingAnimation: true,
      key: nine,
      height: MediaQuery.of(context).size.height,
      width: MediaQuery.of(context).size.width,
      targetBorderRadius: BorderRadius.circular(25),
      onTargetClick: () {
        ShowCaseWidget.of(context).next();
      },
      container: SizedBox(
        height: MediaQuery.of(context).size.height,
        width: MediaQuery.of(context).size.width,
        child: Transform.translate(
          offset: const Offset(0, -160),
          child: Column(
            children: [
              Transform.translate(
                offset: const Offset(0, -300),
                child: SkipAndNextButtonWidget(
                  myContext: context,
                ),
              ),
              Transform.translate(
                offset: const Offset(50, -50),
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
                      context.localized.seeWhatServicesAreAvailable,
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
