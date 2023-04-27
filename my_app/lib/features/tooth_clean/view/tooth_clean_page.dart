import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/fonts.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_app_bar.dart';
import 'package:dental_plaza/features/app/widgets/gradient_bg.dart';
import 'package:dental_plaza/features/tooth_clean/widget/youtube_video_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ToothCleanPage extends StatefulWidget {
  const ToothCleanPage({super.key});

  @override
  State<ToothCleanPage> createState() => _ToothCleanPageState();
}

class _ToothCleanPageState extends State<ToothCleanPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const PreferredSize(
        preferredSize: Size.fromHeight(88),
        child: CustomAppBar(),
      ),
      body: GradientBg(
        child: ListView(
          padding: const EdgeInsets.symmetric(horizontal: 15),
          children: [
            const SizedBox(
              height: 89,
            ),
            Container(
              height: 242,
              decoration:
                  BoxDecoration(borderRadius: BorderRadius.circular(25)),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(25),
                child: const YoutubeVideo(
                  youtubeUrl: 'https://www.youtube.com/watch?v=xm9c5HAUBpY',
                ),
              ),
            ),
            const SizedBox(
              height: 127,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  height: 90,
                  width: 90,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(100),
                    color: AppColors.kBlue,
                    boxShadow: [
                      BoxShadow(
                        offset: const Offset(0, 15),
                        blurRadius: 25,
                        color: AppColors.kBlack.withOpacity(0.32),
                      )
                    ],
                  ),
                  child: Center(
                    child: SvgPicture.asset(Assets.icons.play.path),
                  ),
                ),
              ],
            ),
            const SizedBox(
              height: 15,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Container(
                  height: 55,
                  width: 55,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(100),
                    color: AppColors.kBlue,
                    boxShadow: [
                      BoxShadow(
                        offset: const Offset(0, 15),
                        blurRadius: 25,
                        color: AppColors.kBlack.withOpacity(0.32),
                      )
                    ],
                  ),
                  child: const Center(
                    child: Icon(
                      Icons.remove,
                      size: 24,
                      color: AppColors.kWhite,
                    ),
                  ),
                ),
                const Text(
                  '3:00',
                  style: TextStyle(
                    fontFamily: FontFamily.lcd,
                    fontSize: 64,
                    color: AppColors.kBlue,
                  ),
                ),
                Container(
                  height: 55,
                  width: 55,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(100),
                    color: AppColors.kBlue,
                    boxShadow: [
                      BoxShadow(
                        offset: const Offset(0, 15),
                        blurRadius: 25,
                        color: AppColors.kBlack.withOpacity(0.32),
                      )
                    ],
                  ),
                  child: const Center(
                    child: Icon(
                      Icons.add,
                      size: 24,
                      color: AppColors.kWhite,
                    ),
                  ),
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}
