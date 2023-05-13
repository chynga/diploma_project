import 'package:dental_plaza/core/extension/src/build_context.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/record/model/record_dto.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class RecordItemWidget extends StatelessWidget {
  final RecordDTO record;
  const RecordItemWidget({
    super.key,
    required this.record,
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
                  '${record.service?.title}',
                  style: AppTextStyles.m20w700.copyWith(color: AppColors.kBlue),
                ),
                Text(
                  DateFormat('d.MM.yyyy в HH:mm').format(
                    (record.time ?? DateTime.now())
                        .add(const Duration(hours: 6)),
                  ),
                  style: AppTextStyles.m14w400.copyWith(color: AppColors.kBlue),
                ),
                Text(
                  '${context.localized.doctor}: ${record.doctor?.fullName}',
                  style: AppTextStyles.m14w400.copyWith(color: AppColors.kBlue),
                ),
                if (record.status == 'success')
                  Text(
                    '${context.localized.cost} ${record.cost} тг',
                    style:
                        AppTextStyles.m14w400.copyWith(color: AppColors.kBlue),
                  ),
                // Text(
                //   'Статус: ${record.status}',
                //   style: AppTextStyles.m14w400.copyWith(color: AppColors.kBlue),
                // ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
