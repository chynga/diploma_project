package com.example.server.util.name;

// Class for user-defined InvalidEmailException
public class InvalidNameException extends Exception {

    int nameConditionViolated = 0;

    public InvalidNameException(int conditionViolated) {
        super("Invalid Name: ");
        nameConditionViolated = conditionViolated;
    }

    public String printMessage() {
        // Call constructor of parent Exception
        // according to the condition violated
        switch (nameConditionViolated) {
            case 1:
                return ("Name should be between 3 and 15 characters");
            case 2:
                return ("Name should not contain any space");
            case 3:
                return ("Name can not contain any numbers");
            case 4:
                return ("Name can not contain any symbols");
        }

        return ("");
    }
}
