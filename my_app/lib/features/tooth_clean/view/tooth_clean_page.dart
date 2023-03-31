import 'package:dental_plaza/features/app/widgets/custom/custom_app_bar.dart';
import 'package:dental_plaza/features/app/widgets/gradient_bg.dart';
import 'package:flutter/material.dart';

class ToothCleanPage extends StatefulWidget {
  const ToothCleanPage({super.key});

  @override
  State<ToothCleanPage> createState() => _ToothCleanPageState();
}

class _ToothCleanPageState extends State<ToothCleanPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const PreferredSize(
        preferredSize: Size.fromHeight(88),
        child: CustomAppBar(),
      ),
      body: GradientBg(
        child: ListView(
          children: [],
        ),
      ),
    );
  }
}
