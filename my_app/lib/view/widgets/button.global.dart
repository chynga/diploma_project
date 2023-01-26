// ignore_for_file: avoid_print

import 'package:flutter/material.dart';
import 'package:my_app/utils/global.colors.dart';
import 'package:my_app/view/splash.view.dart';

class ButtonGlobal extends StatelessWidget {
  const ButtonGlobal({super.key});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {
        print('Добро пожаловать');
        Navigator.push(
            context, MaterialPageRoute(builder: (context) => const Entering()));
      },
      style: ElevatedButton.styleFrom(
          // ignore: deprecated_member_use
          primary: const Color.fromARGB(255, 255, 255, 255),
          backgroundColor: const Color.fromARGB(0, 255, 255, 255),
          elevation: 0),
      child: Container(
          alignment: Alignment.center,
          height: 55,
          decoration: BoxDecoration(
              color: GlobalColors.mainColor,
              borderRadius: BorderRadius.circular(50),
              boxShadow: [
                BoxShadow(
                  color: GlobalColors.shadowColor,
                  blurRadius: 10,
                )
              ]),
          child: const Text(
            'Войти ',
            style: TextStyle(
              color: Colors.white,
            ),
          )),
    );
  }
}

class ButtonRegister extends StatelessWidget {
  const ButtonRegister({super.key});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {
        print('Регистрация успешна');
        Navigator.push(
            context, MaterialPageRoute(builder: (context) => const Entering()));
      },
      style: ElevatedButton.styleFrom(
          // ignore: deprecated_member_use
          primary: const Color.fromARGB(255, 255, 255, 255),
          backgroundColor: const Color.fromARGB(0, 255, 255, 255),
          elevation: 0),
      child: Container(
          alignment: Alignment.center,
          height: 55,
          decoration: BoxDecoration(
              color: GlobalColors.mainColor,
              borderRadius: BorderRadius.circular(50),
              boxShadow: [
                BoxShadow(
                  color: GlobalColors.shadowColor,
                  blurRadius: 10,
                )
              ]),
          child: const Text(
            'Регистрация',
            style: TextStyle(
              color: Colors.white,
            ),
          )),
    );
  }
}
