package com.puzzles.physioapp.model.entity;

import com.puzzles.physioapp.appuser.AppUserRole;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@EqualsAndHashCode
@Entity
@NoArgsConstructor
@Table(name = "patient")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "pt_id")
    private long pt_id;
    private String patientFirstName;
    private String patientLastName;
    private String patientEmail;
    private String patientTellNo;
    private Boolean isMan=false;
    private String patientDisease;
    @OneToMany(mappedBy = "patient")
    private List<Session> sessions=new ArrayList<>();

}
