import 'dart:ffi';

import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:my_app/utils/global.colors.dart';

class BottomBarNav extends StatelessWidget {
 

  const BottomBarNav({
    Key? key, 
  }) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
     int currentIndex = 0;
    return BottomNavigationBar(
      currentIndex: currentIndex,
      onTap:(index) => currentIndex = index,
      items: [
        BottomNavigationBarItem(
          
            icon: const Icon(
              FontAwesomeIcons.house, 
            ),
            backgroundColor: GlobalColors.backgraundColor,
            label: 'home', 
            ),
        const BottomNavigationBarItem(
          icon: Icon(
            FontAwesomeIcons.solidMessage,
            size: 26,
          ),
          label: 'Message',
        ),
        const BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.tooth), label: '',),
        const BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.calendar), label: ''),
      ],
      elevation: 25,
      iconSize: 32,
      backgroundColor: const Color.fromARGB(255, 218, 218, 218),
      selectedLabelStyle: const TextStyle(
          color: Colors.blue, fontWeight: FontWeight.bold, fontSize: 0),
      selectedIconTheme:
          const IconThemeData(color: Colors.blue, size: 32, opacity: 1.0),
      unselectedIconTheme:
          const IconThemeData(color: Colors.blue, size: 30, opacity: 0.5),
    );
  }
}
void _onItemTapped(int index){
  
}
