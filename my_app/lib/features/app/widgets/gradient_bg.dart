import 'package:dental_plaza/core/resources/resources.dart';
import 'package:flutter/material.dart';

class GradientBg extends StatelessWidget {
  final Widget child;
  const GradientBg({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [
            AppColors.kWhite.withOpacity(0.2),
            AppColors.kBlue.withOpacity(0.2),
            AppColors.kWhite.withOpacity(0.2),
          ],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
      ),
      child: child,
    );
  }
}
