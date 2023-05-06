import 'dart:developer';
import 'dart:io';

import 'package:dental_plaza/features/auth/database/auth_dao.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:shared_preferences/shared_preferences.dart';

class NotificationRepository {
  //  Future<List<Notification>> getNotification() async {
  //   final  dio = Dio();
  //       dio.options.headers['Accept'] = "application/json";
  //     try {
  //     final response = await dio.get('$SERVER_HOST/api/notification',);

  //     return (response.data as List)
  //           .map((x) => Notification.fromJson(x as Map<String, dynamic>))
  //           .toList();
  //   } on DioError catch (error) {
  //     final data = jsonDecode(error.response.toString());
  //     throw ErrorException(message: data['message'].toString());
  //   }

  //  }

}

const AndroidNotificationChannel channel = AndroidNotificationChannel(
  'high_importance_channel', // id
  'High Importance Notifications', // title
  description:
      'This channel is used for important notifications.', // description
  importance: Importance.high,
);

class NotificationService {
  late FirebaseMessaging _messaging;
  
  final AuthDao sharedPreferences;

  NotificationService(this.sharedPreferences);

  Future<void> init() async {
    _messaging = FirebaseMessaging.instance;
    _messaging.getInitialMessage().then((value) => log('Message is $value'));

    if (Platform.isIOS) {
      await _requestPermissionToNotifications(_messaging);
    }

    _messaging.setForegroundNotificationPresentationOptions(
      alert: true,
      badge: true,
      sound: true,
    );

    await getDeviceToken();

    const androiInit =
        AndroidInitializationSettings('@mipmap/ic_launcher'); //for logo
    const iosInit = DarwinInitializationSettings();
    const initSetting =
        InitializationSettings(android: androiInit, iOS: iosInit);
    final fltNotification = FlutterLocalNotificationsPlugin();
    fltNotification.initialize(initSetting);
    // const androidDetails = AndroidNotificationDetails(
    //   '1',
    //   'channelName',
    //   channelDescription: 'channelDescription',
    // );
    // const iosDetails = IOSNotificationDetails(
    //   presentAlert: true,
    //   presentSound: true,guyguy
    //   presentBadge: true,
    // );

    // const generalNotificationDetails =
    //     NotificationDetails(android: androidDetails, iOS: iosDetails);

    FirebaseMessaging.onMessage.listen((RemoteMessage event) async {

      final RemoteNotification? notification = event.notification;

      final AndroidNotification? android =
          Platform.isAndroid ? event.notification?.android : null;

      log("${notification?.android}");
      if (notification != null) {
        // if (Platform.isAndroid && android != null) {
          fltNotification.show(
            notification.hashCode,
            notification.title,
            notification.body,
            NotificationDetails(
              android: AndroidNotificationDetails(
                channel.id,
                channel.name,
                icon: '@mipmap/ic_launcher',
              ),
            ),
          );
        // }
      }
    });
  }

  Future<String?> getDeviceToken() async {
    final String? deviceToken = await FirebaseMessaging.instance.getToken();
    log(deviceToken ?? "device tokena net");
    if(deviceToken!=null){
      sharedPreferences.stringEntry('deviceToken').setValue(deviceToken);
  }
    return deviceToken;
  }

  Future<void> _requestPermissionToNotifications(
    FirebaseMessaging messaging,
  ) async {
    final NotificationSettings settings = await messaging.requestPermission();

    if (settings.authorizationStatus == AuthorizationStatus.authorized) {
      if (kDebugMode) {
        print('User granted permission');
      }
    } else if (settings.authorizationStatus ==
        AuthorizationStatus.provisional) {
      if (kDebugMode) {
        print('User granted provisional permission');
      }
    } else {
      if (kDebugMode) {
        print('User declined or has not accepted permission');
      }
    }
  }
}
