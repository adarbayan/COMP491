package com.puzzles.physioapp.model.entity;

import com.puzzles.physioapp.appuser.AppUserRole;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.Collections;

@Getter
@Setter
@EqualsAndHashCode
@Entity
@NoArgsConstructor
@Table(name = "doctor")
public class Doctor implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "dr_id")
    private long dr_id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    private AppUserRole appUserRole=AppUserRole.USER;
    private Boolean locked=false;
    private Boolean enabled=true;

    public Doctor(String f_name, String l_name, String email, String password, AppUserRole appUserRole) {
        this.firstName = f_name;
        this.lastName = l_name;
        this.email = email;
        this.password = password;
        this.appUserRole = appUserRole;
        locked=false;
        enabled=true;
    }

    public long getDr_id() {
        return dr_id;
    }

    public void setDr_id(long dr_id) {
        this.dr_id = dr_id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String f_name) {
        this.firstName = f_name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String l_name) {
        this.lastName = l_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        SimpleGrantedAuthority authority=new SimpleGrantedAuthority(appUserRole.name());
        return Collections.singletonList(authority);
    }

    @Override
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return !locked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }

    @Override
    public String toString() {
        return "Doctor{" +
                "dr_id=" + dr_id +
                ", dr_first_name='" + firstName + '\'' +
                ", dr_last_name='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", appUserRole=" + appUserRole +
                ", locked=" + locked +
                ", enabled=" + enabled +
                '}';
    }
}
