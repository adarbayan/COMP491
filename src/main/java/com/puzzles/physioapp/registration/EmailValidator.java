package com.puzzles.physioapp.registration;

import java.util.function.Predicate;

public class EmailValidator implements Predicate<String> {

    @Override
    public boolean test(String s) {
        // Regex for valid mail
        return true;
    }
}
