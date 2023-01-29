import 'dart:async';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:my_app/utils/global.colors.dart';
import 'package:my_app/view/login.view.dart';
import 'package:my_app/view/nav.dart';

class SplashView extends StatelessWidget {
  const SplashView({super.key});

  @override
  Widget build(BuildContext context) {
    Timer(const Duration(seconds: 2),  () {
      Get.to(()=> LoginView());
    });
    return Scaffold(
      backgroundColor: GlobalColors.backgraundColor,
      body: const Align(
        alignment: Alignment.center,
        child: Image(
          image: AssetImage('assets/images/logo.png'),
          height: 60,
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
      Get.to(()=>const MyApp());
    });
    return Scaffold(
      backgroundColor: GlobalColors.backgraundColor,
      body: Center(
        child: 
         Text(
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
