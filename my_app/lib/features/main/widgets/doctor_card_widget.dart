import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:flutter/material.dart';

class DoctorCardWidget extends StatelessWidget {
  const DoctorCardWidget({
    super.key,
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
                Assets.images.mainPicture.path,
                height: 124,
              ),
              const SizedBox(
                height: 12,
              ),
              const Text(
                'Гулмарал Шынкызбековна',
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
