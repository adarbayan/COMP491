package com.puzzles.physioapp.service;

import com.puzzles.physioapp.model.entity.Session;

import java.util.List;

public interface SessionService {

    List<Session> getAllSessions();
    List<Session> getSession(long session_id);

}
