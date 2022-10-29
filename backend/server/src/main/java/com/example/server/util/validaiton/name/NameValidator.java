package com.example.server.util.validaiton.name;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

// Driver Class
public class NameValidator {

    // A utility function to check
    // whether a name is valid or not
    public static void isValid(String name)
            throws InvalidNameException {

        // for checking if password length
        // is between 3 and 15
        if (!((name.length() >= 3)
                && (name.length() <= 15))) {
            throw new InvalidNameException(1);
        }

        // to check space
        if (name.contains(" ")) {
            throw new InvalidNameException(2);
        }

        if (true) {
            Pattern p1 = Pattern.compile(
                    "\\D*");

            Matcher m1 = p1.matcher(name);
            if (!m1.matches()) {
                System.out.println("number:");
                System.out.println(name);
                throw new InvalidNameException(3);
            }
        }

        if (true) {
            Pattern p2 = Pattern.compile(
                    "^[_A-z0-9]*((-|\\s)*[_A-z0-9])*$");

            Matcher m2 = p2.matcher(name);
            if (!m2.matches()) {
                System.out.println("symbol:");
                System.out.println(name);
                throw new InvalidNameException(4);
            }
        }
        // The password is valid
    }
}
