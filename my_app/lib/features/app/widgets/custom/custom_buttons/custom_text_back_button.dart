import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/core/extension/extensions.dart';
import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CustomTextBackButton extends StatelessWidget {
  const CustomTextBackButton({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      borderRadius: BorderRadius.circular(15),
      onTap: () {
        context.router.pop();
      },
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Row(
          children: [
            SvgPicture.asset(Assets.icons.chevronLeft.path),
            const SizedBox(
              width: 8,
            ),
            Text(
              context.localized.back,
              style: AppTextStyles.m20w700.copyWith(color: AppColors.kBlue),
            ),
          ],
        ),
      ),
    );
  }
}
