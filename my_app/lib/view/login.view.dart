import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:my_app/utils/global.colors.dart';
import 'package:my_app/view/widgets/button.global.dart';
import 'package:my_app/view/widgets/login.logup.dart';
import 'package:my_app/view/widgets/text.form.global.dart';

class LoginView extends StatelessWidget {
  LoginView({Key? key}) : super(key: key);
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();

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
                const SizedBox(height: 40),
                Text('Logo'),
                Image.asset('assets/images/woman.png',
                height: 150,),
                const SizedBox(height: 20),
                // Text(
                //   'Вход',
                //   textAlign: TextAlign.center,
                //   style: TextStyle(
                //     color: GlobalColors.textColor,
                //     fontSize: 15,
                //     fontWeight: FontWeight.normal,
                //   ),
                // ),
                const SizedBox(height: 24),
                //// Email Input
                TextFormGlobal(
                  controller: emailController,
                  text: 'Email',
                  obscure: false,
                  textInputType: TextInputType.emailAddress,
                ),

                const SizedBox(height: 12),

                //// Password Input
                TextFormGlobal(
                    controller: passwordController,
                    text: 'Password',
                    textInputType: TextInputType.text,
                    obscure: true
                    ),

                const SizedBox(height: 18),
                const ButtonGlobal(),
                VariationToEnter()
              ],
            ),
          ),
        ),
      ),
    );
  }
}
