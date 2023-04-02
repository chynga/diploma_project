import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ServiceCardWidget extends StatelessWidget {
  final Border? border;
  final Color? bgColor;
  final Color? textColor;
  final List<BoxShadow>? boxShadow;
  const ServiceCardWidget({
    super.key,
    this.border,
    this.bgColor,
    this.textColor, this.boxShadow,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 115,
      width: 103,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(25),
        boxShadow: boxShadow,
        border: border,
        color: bgColor ?? AppColors.kWhite,
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
                height: 24,
              ),
              SvgPicture.asset(
                Assets.icons.icServices.path,
                colorFilter: textColor != null
                    ? ColorFilter.mode(textColor!, BlendMode.srcIn)
                    : null,
              ),
              const SizedBox(
                height: 12,
              ),
              Text(
                'Терапия',
                style: AppTextStyles.m11w400.copyWith(color: textColor),
              )
            ],
          ),
        ),
      ),
    );
  }
}
