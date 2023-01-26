import 'package:flutter/material.dart';
import 'package:my_app/utils/global.colors.dart';
import 'package:my_app/view/login.view.dart';

class VariationToEnter extends StatelessWidget {
  const VariationToEnter({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Row(mainAxisAlignment: MainAxisAlignment.center, children: [
          Row(
            children: [
              Text(
                'Вход',
                textAlign: TextAlign.center,
                style: TextStyle(
                  decoration: TextDecoration.underline,
                  color: GlobalColors.mainColor,
                  fontSize: 15,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(
                width: 20,
              ),
              ElevatedButton(
                onPressed: (() {
                  Navigator.push(context,
                      MaterialPageRoute(builder: (context) => LogUp()));
                }),
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color.fromARGB(0, 255, 255, 255),
                  elevation: 0,
                ),
                child: Text(
                  'Регистрация',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: GlobalColors.textColor,
                    fontSize: 15,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ],
          )
        ])
      ],
    );
  }
}

class Registration extends StatelessWidget {
  const Registration({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Row(mainAxisAlignment: MainAxisAlignment.center, children: [
          Row(
            children: [
              ElevatedButton(
                onPressed: (() {
                  Navigator.push(context,
                      MaterialPageRoute(builder: (context) => LoginView()));
                }),
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color.fromARGB(0, 255, 255, 255),
                  elevation: 0,
                ),
                child: Text(
                  'Вход',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: GlobalColors.textColor,
                    fontSize: 15,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              const SizedBox(
                width: 20,
              ),
              Text(
                'Регистрация',
                textAlign: TextAlign.center,
                style: TextStyle(
                  decoration: TextDecoration.underline,
                  color: GlobalColors.mainColor,
                  fontSize: 15,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          )
        ])
      ],
    );
  }
}
