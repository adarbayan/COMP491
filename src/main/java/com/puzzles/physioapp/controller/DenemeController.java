package com.puzzles.physioapp.controller;

import com.puzzles.physioapp.model.entity.Doctor;
import com.puzzles.physioapp.service.DenemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class DenemeController {

    @Autowired
    DenemeService denemeService;

    @GetMapping("/deneme")
    public List<Doctor> getProducts() {
        System.out.println("Hello");
        return denemeService.getDenemes();
    }

    @GetMapping("/sayhello")
    public String sayHello() {
        System.out.println("Hello");
        return "<p/>Hello<p>";
    }

    @RequestMapping(value = "/deneme/{id}", method = RequestMethod.GET)
    public Doctor getDoctor(@PathVariable long id) {
        return denemeService.getDeneme(id);
    }
}
