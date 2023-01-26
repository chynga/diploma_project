import 'dart:async';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:my_app/utils/global.colors.dart';
import 'package:my_app/view/login.view.dart';
import 'package:my_app/view/main.page.dart';

class SplashView extends StatelessWidget {
  const SplashView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Timer(const Duration(seconds: 2), () {
      Get.to(LoginView());
    });
    return Scaffold(
      backgroundColor: GlobalColors.backgraundColor,
      body: const Center(
        child: Text(
          'Logo',
          style: TextStyle(
            color: Colors.black,
            fontSize: 36,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
    );
  }
}

class Entering extends StatelessWidget {
  const Entering({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Timer(const Duration(seconds: 2), () {
      Get.to(Home());
    });
    return Scaffold(
      backgroundColor: GlobalColors.backgraundColor,
      body: Center(
        child: Text(
          'Добро пожаловать !',
          style: TextStyle(
            color: GlobalColors.mainColor,
            fontSize: 26,
            fontWeight: FontWeight.w400,
          ),
        ),
      ),
    );
  }
}
