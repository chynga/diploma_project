package com.example.server.util;

// Driver Class
public class PasswordValidator {

    // A utility function to check
    // whether a password is valid or not
    public static void isValid(String password)
            throws InvalidPasswordException {

        // for checking if password length
        // is between 8 and 15
        if (!((password.length() >= 8)
                && (password.length() <= 15))) {
            throw new InvalidPasswordException(1);
        }

        // to check space
        if (password.contains(" ")) {
            throw new InvalidPasswordException(2);
        }
        if (true) {
            int count = 0;

            // check digits from 0 to 9
            for (int i = 0; i <= 9; i++) {

                // to convert int to string
                String str1 = Integer.toString(i);

                if (password.contains(str1)) {
                    count = 1;
                }
            }
            if (count == 0) {
                throw new InvalidPasswordException(3);
            }
        }

        // for special characters
        if (!(password.contains("@") || password.contains("#")
                || password.contains("!") || password.contains("~")
                || password.contains("$") || password.contains("%")
                || password.contains("^") || password.contains("&")
                || password.contains("*") || password.contains("(")
                || password.contains(")") || password.contains("-")
                || password.contains("+") || password.contains("/")
                || password.contains(":") || password.contains(".")
                || password.contains(", ") || password.contains("<")
                || password.contains(">") || password.contains("?")
                || password.contains("|"))) {
            throw new InvalidPasswordException(4);
        }

        if (true) {
            int count = 0;

            // checking capital letters
            for (int i = 65; i <= 90; i++) {

                // type casting
                char c = (char) i;

                String str1 = Character.toString(c);
                if (password.contains(str1)) {
                    count = 1;
                }
            }
            if (count == 0) {
                throw new InvalidPasswordException(5);
            }
        }

        if (true) {
            int count = 0;

            // checking small letters
            for (int i = 90; i <= 122; i++) {

                // type casting
                char c = (char) i;
                String str1 = Character.toString(c);

                if (password.contains(str1)) {
                    count = 1;
                }
            }
            if (count == 0) {
                throw new InvalidPasswordException(6);
            }
        }

        // The password is valid
    }

    // Driver code
//    public static void main(String[] args) {
//
//        String password1 = "GeeksForGeeks";
//
//        try {
//            System.out.println("Is Password "
//                    + password1 + " valid?");
//            isValid(password1);
//            System.out.println("Valid Password");
//        } catch (InvalidPasswordException e) {
//            System.out.print(e.getMessage());
//            System.out.println(e.printMessage());
//        }
//
//        String password2 = "Geek007@GFG";
//        try {
//            System.out.println("\nIs Password "
//                    + password2 + " valid?");
//            isValid(password2);
//            System.out.println("Valid Password");
//        } catch (InvalidPasswordException e) {
//            System.out.print(e.getMessage());
//            System.out.println(e.printMessage());
//        }
//    }
}
