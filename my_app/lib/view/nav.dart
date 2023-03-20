import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:my_app/view/chat.page.dart';
import 'package:my_app/view/cleaning.teeth.dart';
import 'package:my_app/view/enroll.page.dart';
import 'package:my_app/view/main.page.dart';


class MyApp extends StatelessWidget {
  const MyApp({super.key});

  static const String _title = 'Flutter Code Sample';

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: _title,
      home: MyStatefulWidget(),
    );
  }
}

class MyStatefulWidget extends StatefulWidget {
  const MyStatefulWidget({super.key});

  @override
  State<MyStatefulWidget> createState() => _MyStatefulWidgetState();
}

class _MyStatefulWidgetState extends State<MyStatefulWidget> {
  int _selectedIndex = 0;
  static const List<Widget> _widgetOptions = <Widget>[
    Home(),
    ChatPage(),
    CleanTeethPage(),
    EnrollPage(),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar( 
        title: SizedBox(
          width: 100,
          child: Image.asset('assets/images/logo.png'),
        ),
        centerTitle: true,
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
      ],),
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
      ],),
      body: Center(
        child: _widgetOptions.elementAt(_selectedIndex),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
           icon: Icon(
            FontAwesomeIcons.house,
          ),
            label: '',
            backgroundColor: Colors.blue,
          ),
          BottomNavigationBarItem(
            icon: Icon(
            FontAwesomeIcons.solidMessage,
          ),
            label: '',
            backgroundColor: Colors.blue,
          ),
          BottomNavigationBarItem(
           icon: Icon(FontAwesomeIcons.tooth),
            label: '',
            backgroundColor: Colors.blue,
          ),
          BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.calendar),
            label: '',
            backgroundColor: Colors.blue,
          ),
        ],
        iconSize: 28,
        currentIndex: _selectedIndex,
        selectedItemColor: Colors.white,
        onTap: _onItemTapped,
      ),
    );
  }
}
