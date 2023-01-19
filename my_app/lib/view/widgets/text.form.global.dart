import 'package:flutter/material.dart';
import 'package:my_app/utils/global.colors.dart';

class TextFormGlobal extends StatelessWidget {
  const TextFormGlobal({Key? key, required this.controller, required this.text, required this.textInputType, required this.obscure}) : super(key: key);
  final TextEditingController controller; 
  final String text;
  final TextInputType textInputType;
  final bool obscure;


  @override
  Widget build(BuildContext context) {
    return Container(
      height: 50,
      padding: const EdgeInsets.symmetric(horizontal: 20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(6),
        boxShadow: [
          BoxShadow(
            color: GobalColors.shadowColor.withOpacity(0.5),
            blurRadius: 8,
          )
        ],
      ),
      child: TextFormField(
        controller: controller,
        keyboardType: TextInputType.emailAddress,
        obscureText: true,
        decoration: InputDecoration(
          hintText: 'Email',
          border: InputBorder.none,
          contentPadding: EdgeInsets.all(0),

        ),
      ),
    );
  }
}
