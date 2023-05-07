import 'package:dental_plaza/core/common/constants.dart';

extension StringExtension on String {
  bool emailMatch() {
    return emailRegex.hasMatch(this);
  }

  bool passwordMatch() {
    return passwordRegex.hasMatch(this);
  }

  bool nameMatch() {
    return nameRegex.hasMatch(this);
  }

  bool codeMatch() {
    return codeRegex.hasMatch(this);
  }
}
