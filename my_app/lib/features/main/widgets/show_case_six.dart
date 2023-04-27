import 'package:dental_plaza/core/common/constants.dart';
import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/widgets/skip_and_next_button_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:showcaseview/showcaseview.dart';

class ShowCaseSix extends StatelessWidget {
  final Widget child;
  const ShowCaseSix({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Showcase.withWidget(
      disableDefaultTargetGestures: true,
      overlayColor: Colors.black,
      overlayOpacity: 0.7,
      key: six,
      disableMovingAnimation: true,
      width: MediaQuery.of(context).size.width,
      height: 500,
      targetBorderRadius: BorderRadius.circular(10),
      onTargetClick: () {
        ShowCaseWidget.of(context).next();
      },
      container: SizedBox(
        width: MediaQuery.of(context).size.width,
        child: Column(
          children: [
            Row(
              children: [
                Transform.translate(
                  offset: const Offset(0, -20),
                  child: SkipAndNextButtonWidget(
                    myContext: context,
                  ),
                ),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      Padding(
                        padding: EdgeInsets.only(
                          right: MediaQuery.of(context).size.width * 0.05,
                        ),
                        child: SvgPicture.asset(
                          Assets.icons.arrowUp.path,
                        ),
                      ),
                      Text(
                        context.localized.stayTunedForNotifications,
                        style: AppTextStyles.m16w700White,
                        textAlign: TextAlign.end,
                      )
                    ],
                  ),
                )
              ],
            ),
          ],
        ),
      ),
      child: child,
    );
  }
}
