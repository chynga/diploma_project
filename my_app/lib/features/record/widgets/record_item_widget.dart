import 'package:dental_plaza/core/resources/resources.dart';
import 'package:flutter/material.dart';

class RecordItemWidget extends StatelessWidget {
  const RecordItemWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(25),
        color: AppColors.kWhite,
        boxShadow: [
          BoxShadow(
            offset: const Offset(0, 4),
            blurRadius: 4,
            color: AppColors.kBlack.withOpacity(0.25),
          )
        ],
      ),
      child: Material(
        borderRadius: BorderRadius.circular(25),
        child: InkWell(
          borderRadius: BorderRadius.circular(25),
          onTap: () {},
          child: Padding(
            padding: const EdgeInsets.all(17),
            child: Column(
              children: [
                Text(
                  'Виниры',
                  style: AppTextStyles.m20w700.copyWith(color: AppColors.kBlue),
                ),
                Text(
                  '12.02.2022',
                  style: AppTextStyles.m14w400.copyWith(color: AppColors.kBlue),
                ),
                Text(
                  'Врач: Айдар Зейнеп',
                  style: AppTextStyles.m14w400.copyWith(color: AppColors.kBlue),
                ),
                Text(
                  'Статус: в ожидании подтверждение',
                  style: AppTextStyles.m14w400.copyWith(color: AppColors.kBlue),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
