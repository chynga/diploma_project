import 'package:dental_plaza/core/resources/resources.dart';
import 'package:flutter/material.dart';

class BuildSegmentWidget extends StatelessWidget {
  final String text;
  final bool isSelected;
  final bool isBordered;
  const BuildSegmentWidget({
    super.key,
    required this.isSelected,
    required this.text,
    this.isBordered = false,
  });
  //

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.center,
      height: 35,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(50),
        // border: isBordered && !isSelected ? Border.all() : null,
      ),
      child: Text(
        text,
        style: AppTextStyles.m16w400.copyWith(
          color: isSelected ? AppColors.kWhite : AppColors.kBlue,
          height: 1,
        ),
      ),
    );
  }
}
