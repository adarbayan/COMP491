package com.puzzles.physioapp.repository;

import com.puzzles.physioapp.model.entity.Doctor;
import com.puzzles.physioapp.model.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PatientRepository extends JpaRepository<Patient,Long> {
    Optional<Patient> findById(long id);

}
