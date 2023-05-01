import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/fonts.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:dental_plaza/features/app/widgets/custom/custom_app_bar.dart';
import 'package:dental_plaza/features/app/widgets/gradient_bg.dart';
import 'package:dental_plaza/features/tooth_clean/widget/test_widget.dart';
import 'package:dental_plaza/features/tooth_clean/widget/youtube_video_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ToothCleanPage extends StatefulWidget {
  const ToothCleanPage({super.key});

  @override
  State<ToothCleanPage> createState() => _ToothCleanPageState();
}

class _ToothCleanPageState extends State<ToothCleanPage> {
  int seconds = 180;
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
              height: 50,
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
              height: 70,
            ),
            const TimerWidget()
          ],
        ),
      ),
    );
  }
}
