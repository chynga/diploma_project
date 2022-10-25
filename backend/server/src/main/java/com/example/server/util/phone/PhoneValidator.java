package com.example.server.util.phone;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class PhoneValidator {
    public static void isValid(String number) throws InvalidPhoneException {
        Pattern p = Pattern.compile(
                "^(\\+\\d{1,3}( )?)?((\\(\\d{1,3}\\))|\\d{1,3})[- .]?\\d{3,4}[- .]?\\d{4}$");

        Matcher m = p.matcher(number);

        if (!m.matches()) {
            throw new InvalidPhoneException("Phone number is not valid");
        }
    }
}
