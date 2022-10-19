package com.example.server.util.email;

// Class for user-defined InvalidEmailException
public class InvalidEmailException extends Exception {

    int emailConditionViolated = 0;

    public InvalidEmailException(int conditionViolated) {
        super("Invalid Email: ");
        emailConditionViolated = conditionViolated;
    }

    public String printMessage() {
        // Call constructor of parent Exception
        // according to the condition violated
        switch (emailConditionViolated) {
            case 1:
                return ("Email not valid");
        }

        return ("");
    }
}
