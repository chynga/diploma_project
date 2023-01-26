import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class AppBarNav extends StatelessWidget implements PreferredSizeWidget {
  final String title;

  const AppBarNav({
    Key? key,
    required this.title,
  }) : super(key: key);

  @override
  Size get preferredSize => const Size.fromHeight(60.0);

  @override
  Widget build(BuildContext context) {
    return AppBar(
      centerTitle: true,
      title: Text(title),
      titleTextStyle: const TextStyle(color: Colors.blue, fontSize: 24),
      backgroundColor: Colors.white,
      shadowColor: const Color.fromARGB(96, 33, 149, 243),
      elevation: 10,
      actions: [
        IconButton(
          onPressed: () {},
          icon: const Icon(FontAwesomeIcons.bell),
          color: Colors.blue,
          iconSize: 28,
        ),
         const SizedBox(width: 12,),
        IconButton(
          onPressed: () {},
          icon: const Icon(FontAwesomeIcons.user),
          color: Colors.blue,
          iconSize: 28,
        ),
      ],
    );
  }
}
