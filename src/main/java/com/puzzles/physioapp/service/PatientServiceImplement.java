package com.puzzles.physioapp.service;

import com.puzzles.physioapp.exception.NotFoundException;
import com.puzzles.physioapp.model.entity.Patient;
import com.puzzles.physioapp.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class PatientServiceImplement implements PatientService{

    @Autowired
    private PatientRepository patientRepository;

    @Override
    public Patient getPatient(long patient_id) {
        Optional<Patient> patient = patientRepository.findById(patient_id);
        return patient.orElse(null);
    }

    @Override
    @Transactional
    public Patient addPatient(Patient patient) {
        patientRepository.save(patient);
        return null;
    }

    @Override
    @Transactional
    public Patient updatePatient(Patient patient) {
        Optional<Patient> oldPatient = patientRepository.
                findById(patient.getPt_id());

        if (oldPatient.isPresent())
            patientRepository.save(patient);
        else
            throw new NotFoundException("Product not found with id:" + patient.getPt_id());


        return oldPatient.get();
    }

    @Override
    @Transactional
    public Patient deletePatient(long patient_id) {
        Optional<Patient> patient = patientRepository.findById(patient_id);
        if (patient.isPresent()) {
            patientRepository.deleteById(patient_id);
            return patient.get();
        } else
            throw new NotFoundException("Product not found with id:" + patient_id);
    }
}
