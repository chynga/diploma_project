import 'dart:async';

import 'package:dental_plaza/core/resources/assets.gen.dart';
import 'package:dental_plaza/core/resources/fonts.gen.dart';
import 'package:dental_plaza/core/resources/resources.dart';
import 'package:flutter/material.dart';
import 'package:flutter_ringtone_player/flutter_ringtone_player.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TimerWidget extends StatefulWidget {
  const TimerWidget({
    super.key,
  });

  @override
  State<TimerWidget> createState() => _TimerWidgetState();
}

class _TimerWidgetState extends State<TimerWidget> {
  Timer? countdownTimer;
  Duration myDuration = const Duration(hours: 1);
  int allSeconds = 180;
  bool isPlaying = false;

  @override
  void initState() {
    myDuration = Duration(seconds: allSeconds);
    // startTimer();
    super.initState();
  }

  void startTimer() {
    countdownTimer = Timer.periodic(const Duration(seconds: 1), (_) {
      setCountDown();
    });
  }

  // Step 4
  void stopTimer() {
    setState(() => countdownTimer!.cancel());
  }

  void setCountDown() {
    const reduceSecondsBy = 1;
    setState(() {
      final seconds = myDuration.inSeconds - reduceSecondsBy;
      if (seconds < 0) {
        countdownTimer!.cancel();
      } else {
        myDuration = Duration(seconds: seconds);
        if (myDuration.inSeconds == 0) {
          isPlaying = false;
          FlutterRingtonePlayer.play(
            android: AndroidSounds.ringtone,
            ios: IosSounds.glass,
            looping: false, // Android only - API >= 28
            volume: 0.5, // Android only - API >= 28
            asAlarm: false, // Android only - all APIs
          );
        }
      }
    });
  }

  @override
  void dispose() {
    countdownTimer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    String strDigits(int n) => n.toString().padLeft(2, '0');
    final hours = strDigits(myDuration.inHours.remainder(24));
    final minutes = strDigits(myDuration.inMinutes.remainder(60));
    final seconds = strDigits(myDuration.inSeconds.remainder(60));
    return Column(
      children: [
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
              child: Material(
                color: Colors.transparent,
                borderRadius: BorderRadius.circular(100),
                child: InkWell(
                  borderRadius: BorderRadius.circular(100),
                  onTap: () {
                    if (isPlaying) {
                      stopTimer();
                    } else {
                      if (myDuration.inSeconds == 0) {
                        FlutterRingtonePlayer.stop();
                        allSeconds = 180;
                        myDuration = Duration(seconds: allSeconds);
                      }
                      startTimer();
                    }
                    isPlaying = !isPlaying;
                    setState(() {});
                  },
                  child: Center(
                    child: !isPlaying
                        ? SvgPicture.asset(Assets.icons.play.path)
                        : const Icon(
                            Icons.stop_outlined,
                            color: AppColors.kWhite,
                            size: 55,
                          ),
                  ),
                ),
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
              child: Material(
                color: Colors.transparent,
                borderRadius: BorderRadius.circular(100),
                child: InkWell(
                  borderRadius: BorderRadius.circular(100),
                  onTap: () {
                    if (myDuration.inSeconds > 60) {
                      myDuration = Duration(seconds: myDuration.inSeconds - 10);
                      setState(() {});
                    }
                  },
                  child: const Center(
                    child: Icon(
                      Icons.remove,
                      size: 24,
                      color: AppColors.kWhite,
                    ),
                  ),
                ),
              ),
            ),
            Text(
              '$minutes:$seconds',
              style: TextStyle(
                fontFamily: FontFamily.lcd,
                fontSize: 64,
                color: myDuration.inSeconds > 10
                    ? AppColors.kBlue
                    : AppColors.kRed,
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
              child: Material(
                color: Colors.transparent,
                borderRadius: BorderRadius.circular(100),
                child: InkWell(
                  borderRadius: BorderRadius.circular(100),
                  onTap: () {
                    if (myDuration.inSeconds < 1800) {
                      myDuration = Duration(seconds: myDuration.inSeconds + 10);
                      setState(() {});
                    }
                  },
                  child: const Center(
                    child: Icon(
                      Icons.add,
                      size: 24,
                      color: AppColors.kWhite,
                    ),
                  ),
                ),
              ),
            ),
          ],
        )
      ],
    );
  }
}
