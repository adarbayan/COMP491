package com.puzzles.physioapp.appuser;


import com.puzzles.physioapp.model.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional(readOnly=true)
public interface AppUserRepository extends JpaRepository<Doctor,Long> {
    Optional<Doctor> findByEmail(String email);

    /*
    @Transactional
    @Modifying
    @Query("UPDATE doctor d " +
            "SET d.enabled = TRUE WHERE d.email = ?1")
    int enableAppUser(String email);

     */
}
