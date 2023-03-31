import 'package:dental_plaza/features/app/widgets/skip_and_next_button_widget.dart';
import 'package:flutter/material.dart';
import 'package:showcaseview/showcaseview.dart';

class ShowcaseForNavBar extends StatelessWidget {
  final Widget child;
  final Widget tooltip;
  final GlobalKey<State<StatefulWidget>> key1;
  const ShowcaseForNavBar({
    super.key,
    required this.child,
    required this.tooltip,
    required this.key1,
  });

  @override
  Widget build(BuildContext context) {
    return Showcase.withWidget(
      overlayColor: Colors.black,
      overlayOpacity: 0.7,
      onTargetClick: () {
        ShowCaseWidget.of(context).next();
      },
      height: 600,
      width: MediaQuery.of(context).size.width,
      targetPadding: const EdgeInsets.symmetric(horizontal: 20),
      targetBorderRadius: BorderRadius.circular(20),
      disableMovingAnimation: true,
      key: key1,
      container: SizedBox(
        height: MediaQuery.of(context).size.height,
        width: MediaQuery.of(context).size.width,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const SizedBox(
              height: 40,
            ),
            SkipAndNextButtonWidget(
              myContext: context,
            ),
            tooltip,
          ],
        ),
      ),
      child: child,
    );
  }
}
