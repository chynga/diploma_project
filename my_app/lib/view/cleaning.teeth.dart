import 'package:flutter/material.dart';

class CleanTeethPage extends StatefulWidget {
  const CleanTeethPage({super.key});

  @override
  State<CleanTeethPage> createState() => _CleanTeethPageState();
}

class _CleanTeethPageState extends State<CleanTeethPage> {
  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      backgroundColor: Colors.white,
       body: Center(
        child: ElevatedButton(onPressed: null, child: Text('Start clean teeth')),
        
      ),
    );
  }
}