import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_square_button.dart';
import 'package:flutter/material.dart';

class AppBarWithTitle extends StatelessWidget {
  final TextStyle? titleStyle;
  final String title;
  const AppBarWithTitle({super.key, required this.title, this.titleStyle});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 2).copyWith(top: 8),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          CustomSquareButton(
            iconPadding: const EdgeInsets.all(8),
            iconPath: Assets.icons.icOnboarding.path,
            onTap: () {
              context.router.pop();
            },
          ),
          Text(
            title,
            style: titleStyle ?? AppTextStyles.m18w500,
          ),
          const SizedBox(
            width: 40,
          ),
        ],
      ),
    );
  }
}
