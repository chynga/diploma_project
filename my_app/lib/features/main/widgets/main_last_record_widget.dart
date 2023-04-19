import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';


class MainLastRecordWidget extends StatelessWidget {
  const MainLastRecordWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: AppColors.kBlue,
        borderRadius: BorderRadius.circular(20),
        boxShadow: [
          BoxShadow(
            color: AppColors.kBlack.withOpacity(0.1),
            offset: const Offset(0, 2),
            blurRadius: 8,
          )
        ],
      ),
      child: Stack(
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const SizedBox(
                  height: 26,
                ),
                Text(
                  '19 Октября',
                  style:
                      AppTextStyles.m24w500.copyWith(color: AppColors.kWhite),
                ),
                const SizedBox(
                  height: 12,
                ),
                Text(
                  '11:00 - 12:00',
                  style:
                      AppTextStyles.m16w500.copyWith(color: AppColors.kWhite),
                ),
                const SizedBox(
                  height: 12,
                ),
                Text(
                  '${context.localized.doctor}: Нысанбаева Айым',
                  style:
                      AppTextStyles.m16w500.copyWith(color: AppColors.kWhite),
                ),
                const SizedBox(
                  height: 12,
                ),
                Text(
                  context.localized.yourEntryHasBeenVerified,
                  style:
                      AppTextStyles.m16w500.copyWith(color: AppColors.kWhite),
                ),
                const SizedBox(
                  height: 14,
                )
              ],
            ),
          ),
          Positioned(
            right: 0,
            bottom: 0,
            //FIXME bug with svg image
            child: SvgPicture.asset(
              Assets.icons.teethDentalIconBig.path,
            ),
          ),
          Positioned(
            top: 12,
            right: 80,
            child: SvgPicture.asset(
              Assets.icons.teethDentalIcon.path,
            ),
          )
        ],
      ),
    );
  }
}
