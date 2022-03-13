package com.puzzles.physioapp.model.entity;

import javax.persistence.*;

@Entity
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "dr_id")
    private long dr_id;
    @Column(name = "dr_first_name")
    private String f_name;
    @Column(name = "dr_last_name")
    private String l_name;
    @Column(name = "dr_email")
    private String email;

    public Doctor(){}

    public long getDr_id() {
        return dr_id;
    }

    public void setDr_id(long dr_id) {
        this.dr_id = dr_id;
    }

    public String getF_name() {
        return f_name;
    }

    public void setF_name(String f_name) {
        this.f_name = f_name;
    }

    public String getL_name() {
        return l_name;
    }

    public void setL_name(String l_name) {
        this.l_name = l_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
