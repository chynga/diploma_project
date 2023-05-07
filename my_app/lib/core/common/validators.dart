import 'package:dental_plaza/core/common/string_extentions.dart';
import 'package:dental_plaza/core/extension/extensions.dart';
import 'package:flutter/widgets.dart';

String? emailValidator(String? value, BuildContext context) {
  if (value == null || value.isEmpty) {
    return context.localized.enterEmail;
  } else if (!value.emailMatch()) {
    return context.localized.pleaseEnterValidEmailAddress;
  }
  return null;
}

String? nameValidator(String? value, BuildContext context) {
  if (value == null || value.isEmpty) {
    return context.localized.enterFio;
  } else if (!value.nameMatch()) {
    return context.localized.nameValidator;
  }
  return null;
}

String? passwordValidator(String? value, BuildContext context) {
  if (value == null || value.isEmpty) {
    return context.localized.enterPassword;
  } else if (!value.passwordMatch()) {
    return context.localized.passwordValidator;
  }
  return null;
}
String? passwordConfirmationValidator(String? value,String? password, BuildContext context) {
  if (value == null || value.isEmpty) {
    return context.localized.enterPassword;
  } else if (value!=password) {
    return context.localized.passwordsDontMatches;
  }
  return null;
}

String? numberValidator(String? value, BuildContext context) {
  if (value == null || value.isEmpty) {
    return context.localized.enterNumber;
  }
  return null;
}

String? codeValidator(String? value, BuildContext context) {
  if (value == null || value.isEmpty) {
    return context.localized.enterCode;
  }
  return null;
}
