package com.puzzles.physioapp.service;

import com.puzzles.physioapp.model.entity.Patient;

public interface PatientService {

    Patient getPatient(long patient_id);
    Patient addPatient(Patient patient);
    Patient updatePatient(Patient product);
    Patient deletePatient(long patient_id);

}
