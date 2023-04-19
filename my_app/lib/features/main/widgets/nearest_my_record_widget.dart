import 'package:auto_route/auto_route.dart';
import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/router/app_router.dart';
import 'package:flutter/material.dart';

class NearestMyRecordWidget extends StatelessWidget {
  const NearestMyRecordWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        color: AppColors.kWhite,
      ),
      child: Padding(
        padding: const EdgeInsets.all(12).copyWith(bottom: 20),
        child: Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    context.localized.myRecords,
                    style: AppTextStyles.m16w700White
                        .copyWith(color: AppColors.kBlack),
                  ),
                  const SizedBox(
                    height: 8,
                  ),
                  Text(
                    '${context.localized.nearest} 19 октября',
                    style: AppTextStyles.m13w400,
                  )
                ],
              ),
            ),
            Container(
              height: 33.3,
              width: 33.3,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(50),
                color: AppColors.kBlue,
              ),
              child: Material(
                borderRadius: BorderRadius.circular(50),
                color: Colors.transparent,
                child: InkWell(
                  borderRadius: BorderRadius.circular(50),
                  onTap: () {
                    context.router.push(const MyRecordsMainPage());
                  },
                  child: const Icon(
                    Icons.arrow_forward_rounded,
                    color: AppColors.kWhite,
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
