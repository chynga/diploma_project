import 'package:flutter/material.dart';
import 'package:my_app/utils/global.colors.dart';

class LoginView extends StatelessWidget {
  const LoginView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: SafeArea(
          child: Container(
            width: double.infinity,
            padding: const EdgeInsets.all(15.0),
            child: Column(
              children: [
                Text('Logo'),
                Text('Добро пожаловать в мобильное'
                ' приложение вашей клиники DentalCare'
                ' Чтобы нам было с вами легче' 
                ' поддерживать связь просим вас нажать '
                'начать ',
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: GobalColors.textColor,
                  fontSize: 15,
                  fontWeight: FontWeight.normal,
                  
                ),),
              ],
            ),
          ),
        ),
      ),
    );
  }
}