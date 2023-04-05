import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/main/model/mock_doctor.dart';
import 'package:flutter/material.dart';

class DoctorCardWidget extends StatelessWidget {
  final MockDoctor doctor;
  const DoctorCardWidget({
    super.key, required this.doctor,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 188,
      width: 124,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(25),
        color: AppColors.kWhite,
      ),
      child: Material(
        borderRadius: BorderRadius.circular(25),
        color: Colors.transparent,
        child: InkWell(
          borderRadius: BorderRadius.circular(25),
          onTap: () {},
          child: Column(
            children: [
              const SizedBox(
                height: 12,
              ),
              Image.asset(
                doctor.image??"",
                height: 124,
              ),
              const SizedBox(
                height: 12,
              ),
               Text(
                '${doctor.name}',
                style: AppTextStyles.m11w400,
                textAlign: TextAlign.center,
              )
            ],
          ),
        ),
      ),
    );
  }
}
