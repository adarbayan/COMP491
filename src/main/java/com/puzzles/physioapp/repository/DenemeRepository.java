package com.puzzles.physioapp.repository;

import com.puzzles.physioapp.model.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DenemeRepository extends JpaRepository<Doctor,Long> {


}