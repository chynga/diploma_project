import 'package:dental_plaza/core/resources/resources.dart';
import 'package:flutter/material.dart';
import 'package:shimmer/shimmer.dart';

class LoadShimmer extends StatelessWidget {
  final double? width;
  final double? height;
  final double? radius;
  const LoadShimmer({
    super.key,
    this.width = 80,
    this.height = 16,
    this.radius,
  });

  @override
  Widget build(BuildContext context) {
    return Shimmer.fromColors(
      direction: ShimmerDirection.rtl,
      baseColor: Colors.grey.shade100,
      highlightColor: Colors.blue.shade100,
      child: SizedBox(
        width: width,
        height: height,
        child: DecoratedBox(
          decoration: BoxDecoration(
            borderRadius: radius == null ? null : BorderRadius.circular(radius!),
            color: AppColors.kGray6,
          ),
        ),
      ),
    );
  }
}
