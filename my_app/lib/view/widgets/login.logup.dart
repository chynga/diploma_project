import 'package:flutter/material.dart';
import 'package:my_app/utils/global.colors.dart';

class VariationToEnter extends StatelessWidget {
  const VariationToEnter({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Row(children: [
          Center(
            child: Container(
              alignment: Alignment.center,
              child: Text(
                'Вход',
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: GlobalColors.textColor,
                  fontSize: 15,
                  fontWeight: FontWeight.normal,
                ),
              ),
            ),
          ),
        ])
      ],
    );
  }
}
