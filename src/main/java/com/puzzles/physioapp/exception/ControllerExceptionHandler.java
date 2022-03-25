package com.puzzles.physioapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.TransactionSystemException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class ControllerExceptionHandler {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ExceptionMessage> validationExceptionHandler(MethodArgumentNotValidException ex, WebRequest request) {
        StringBuilder stringBuilder = new StringBuilder();
        ex.getBindingResult().getAllErrors().forEach(k->{
            stringBuilder.append(((FieldError)k).getField()+":"+k.getDefaultMessage()).append("\n");
        });
        ExceptionMessage exceptionMessage = new ExceptionMessage(stringBuilder.toString());
        return new ResponseEntity<ExceptionMessage>(exceptionMessage, HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler( {TransactionSystemException.class})
    public ResponseEntity<ExceptionMessage> constraintExceptionHandler(TransactionSystemException ex, WebRequest request) {
        ExceptionMessage exceptionMessage = new ExceptionMessage(ex.getMessage());
        return new ResponseEntity<ExceptionMessage>(exceptionMessage, HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<ExceptionMessage> notFoundException(Exception ex, WebRequest request) {
        ExceptionMessage exceptionMessage = new ExceptionMessage(ex.getMessage());
        return new ResponseEntity<ExceptionMessage>(exceptionMessage, HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ExceptionMessage> globalExceptionHandler(Exception ex, WebRequest request) {
        ExceptionMessage exceptionMessage = new ExceptionMessage(ex.getMessage());
        return new ResponseEntity<ExceptionMessage>(exceptionMessage, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
