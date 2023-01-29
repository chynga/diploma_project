import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:my_app/view/splash.view.dart';

void main() {
  runApp( const GetMaterialApp(
      debugShowCheckedModeBanner: false,
      home: SplashView(), 
    )
    );
}

// class App extends StatelessWidget {
//   const App({super.key});

  

//   @override
//   Widget build(BuildContext context) {
//     return const GetMaterialApp(
//       debugShowCheckedModeBanner: false,
//       home: SplashView(),
//       initialRoute: AppPage.getnavbar(),
//       getPages: AppPage.routes,
//     );
//   }
// }
