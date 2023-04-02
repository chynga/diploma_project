import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/widgets/bottom_sheet.dart';
import 'package:dental_plaza/features/record/widgets/new_record_bottom_sheet.dart';
import 'package:flutter/material.dart';

class DoctorNameWidget extends StatelessWidget {
  final String name;
  const DoctorNameWidget({
    super.key,
    required this.name,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(10),
        color: AppColors.kWhite,
        boxShadow: [
          BoxShadow(
            offset: const Offset(0, 2),
            color: AppColors.kBlack.withOpacity(0.3),
            blurRadius: 8,
          )
        ],
      ),
      child: Material(
        borderRadius: BorderRadius.circular(10),
        child: InkWell(
          borderRadius: BorderRadius.circular(10),
          onTap: () {
            bottomSheet(const NewRecordBottomSheet(),context);
          },
          child: Padding(
            padding: const EdgeInsets.symmetric(vertical: 12),
            child: Center(
              child: Text(
                name,
                style: AppTextStyles.m12w400,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
