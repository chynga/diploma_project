import 'package:flutter/material.dart';

class CleanTeethPage extends StatefulWidget {
  const CleanTeethPage({super.key});

  @override
  State<CleanTeethPage> createState() => _CleanTeethPageState();
}

class _CleanTeethPageState extends State<CleanTeethPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
       body: Center(
        child: Text('Clean'),
      ),
    );
  }
}