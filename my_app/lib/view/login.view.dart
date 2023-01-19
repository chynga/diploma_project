import 'package:flutter/material.dart';
import 'package:my_app/utils/global.colors.dart';
import 'package:my_app/view/widgets/text.form.global.dart';

class LoginView extends StatelessWidget {
  LoginView({Key? key}) : super(key: key);
  final TextEditingController emailController = TextEditingController();

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
                const SizedBox(height: 40),
                Text(
                  'Вход',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: GobalColors.textColor,
                    fontSize: 15,
                    fontWeight: FontWeight.normal,
                  ),
                ),
                const SizedBox(height: 24),
                TextFormGlobal(
                  controller: emailController,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
