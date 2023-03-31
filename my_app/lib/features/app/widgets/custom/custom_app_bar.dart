import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_buttons/custom_square_button.dart';
import 'package:flutter/material.dart';

class CustomAppBar extends StatelessWidget {
  const CustomAppBar({super.key});

  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: AppColors.kWhite,
      automaticallyImplyLeading: false,
      toolbarHeight: 88,
      titleSpacing: 0,
      elevation: 0,
      title: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 24),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Image.asset(
              Assets.images.dentalPlaza.path,
              height: 35,
              fit: BoxFit.cover,
            ),
            CustomSquareButton(
              iconPath: Assets.icons.icNotification.path,
              iconColor: AppColors.kWhite,
              iconPadding: const EdgeInsets.all(5),
              size: 30,
              backgroundColor: AppColors.kBlue,
              onTap: () {},
            )
          ],
        ),
      ),
    );
  }
}
