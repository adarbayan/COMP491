package com.puzzles.physioapp.appuser;

import com.puzzles.physioapp.model.entity.Doctor;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AppUserService implements UserDetailsService {

    private final static String USER_NOT_FOUND_MSG="User Not Found";
    private final AppUserRepository appUserRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return appUserRepository.findByEmail(email)
                .orElseThrow(()->new UsernameNotFoundException(USER_NOT_FOUND_MSG));
    }

    public String signUpUser(Doctor doctor){
        boolean userExist=appUserRepository.findByEmail(doctor.getEmail()).isPresent();
        if(userExist){
            throw new IllegalStateException("Email already taken");
        }

        String encodePassword=bCryptPasswordEncoder.encode(doctor.getPassword());

        doctor.setPassword(encodePassword);

        appUserRepository.save(doctor);

        // TODO: Send confirmation token

        return "working";
    }
}
