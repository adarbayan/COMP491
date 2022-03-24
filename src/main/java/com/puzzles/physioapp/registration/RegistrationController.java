package com.puzzles.physioapp.registration;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequestMapping(path="api/v1/registration")
@AllArgsConstructor
@RestController
public class RegistrationController {

    private final RegistrationService registrationService;

    @PostMapping
    public String register(@RequestBody RegistrationRequest request){
        return registrationService.register(request);
    }

    /*
    @GetMapping(path = "confirm")
    public String confirm(@RequestParam("token") String token) {
        return registrationService.confirmToken(token);
    }

     */

}
