package com.puzzles.physioapp.registration;

import com.puzzles.physioapp.appuser.AppUserRole;
import com.puzzles.physioapp.appuser.AppUserService;
import com.puzzles.physioapp.model.entity.Doctor;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RegistrationService {

    private final EmailValidator emailValidator;
    private final AppUserService appUserService;

    public String register(RegistrationRequest request) {
        boolean isValidEmail = emailValidator.test(request.getEmail());
        System.err.println(request.getFirstName());
        if(!isValidEmail){
            throw new IllegalStateException("Not valid email!");
        }

        return appUserService.signUpUser(
                new Doctor(request.getFirstName(),
                        request.getLastName(),
                        request.getEmail(),
                        request.getPassword(),
                        AppUserRole.USER));
    }
}
