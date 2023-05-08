import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CustomBackButton extends StatelessWidget {
  final VoidCallback? onTap;
  const CustomBackButton({super.key, this.onTap});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        InkWell(
          borderRadius: BorderRadius.circular(15),
          onTap:onTap?? () {
            context.router.pop();
          },
          child: Padding(
            padding: const EdgeInsets.all(7),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                SvgPicture.asset(Assets.icons.chevronLeft.path),
                const SizedBox(
                  width: 8,
                ),
                Text(
                  context.localized.comeBack,
                  style: AppTextStyles.m14w400.copyWith(color: AppColors.kBlue),
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}
