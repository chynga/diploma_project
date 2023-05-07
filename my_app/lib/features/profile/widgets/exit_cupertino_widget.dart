import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:flutter/cupertino.dart';

class ExitCupertinoWidget extends StatelessWidget {
  final Function()? onYesTap;
  const ExitCupertinoWidget({super.key, this.onYesTap});

  @override
  Widget build(BuildContext context) {
    return CupertinoAlertDialog(
      // title: Padding(
      //   padding: const EdgeInsets.only(bottom: 8),
      //   child: Text(
      //     context.localized.payAttention,
      //     style: AppTextStyles.m16w500.copyWith(
      //       color: AppColors.kGray6,
      //     ),
      //   ),
      // ),
      content: Text(
        context.localized.doYouReallyWantToLeave,
        style: AppTextStyles.m14w500.copyWith(
          color: AppColors.kBlack,
        ),
      ),
      actions: <CupertinoDialogAction>[
        CupertinoDialogAction(
          onPressed: onYesTap,
          textStyle: AppTextStyles.m16w500.copyWith(
            color: AppColors.kBlue,
          ),
          child: Text(context.localized.yes),
        ),
        CupertinoDialogAction(
          onPressed: () {
            Navigator.pop(context);
          },
          textStyle: AppTextStyles.m16w500.copyWith(
            color: AppColors.kBlue,
          ),
          child: Text(context.localized.no),
        ),
      ],
    );
  }
}
