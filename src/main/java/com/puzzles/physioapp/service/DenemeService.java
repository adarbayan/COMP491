package com.puzzles.physioapp.service;

import com.puzzles.physioapp.model.entity.Doctor;

import java.util.List;

public interface DenemeService {

    List<Doctor> getDenemes();
    Doctor getDeneme(long id);
}