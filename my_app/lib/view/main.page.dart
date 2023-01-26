import 'package:flutter/material.dart';
import 'package:my_app/view/widgets/app.bar.dart';
import 'package:my_app/view/widgets/navigation.bar.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
       body: Center(
        child: Text('Home'),
      ),
    );
  }
}