package com.puzzles.physioapp.service;

import com.puzzles.physioapp.model.entity.Doctor;
import com.puzzles.physioapp.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class DenemeServiceImplement implements DenemeService{
    @Autowired
    DoctorRepository doctorRepository;
    @Override
    public List<Doctor> getDenemes() {
        return new ArrayList<>(doctorRepository.findAll());
    }

    @Override
    public Doctor getDeneme(long id) {
        Optional<Doctor> product = doctorRepository.findById(id);
        return product.orElse(null);
    }
}