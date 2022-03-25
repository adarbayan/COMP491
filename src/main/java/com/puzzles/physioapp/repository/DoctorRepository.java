package com.puzzles.physioapp.repository;

import com.puzzles.physioapp.model.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DoctorRepository extends JpaRepository<Doctor,Long> {
    Optional<Doctor> findByEmail(String email);
    Optional<Doctor> findById(long id);

}