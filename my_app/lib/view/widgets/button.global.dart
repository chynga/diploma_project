// ignore_for_file: avoid_print

import 'package:flutter/material.dart';
import 'package:my_app/utils/global.colors.dart';

class ButtonGlobal extends StatelessWidget {
  const ButtonGlobal({super.key});

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        print('Добро пожаловать');
      },
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
          ]
        ),
        child: Text(
          'Войти ',
          style: TextStyle(
            color: Colors.white,
          ),
          )
      ),
    );
  }
}