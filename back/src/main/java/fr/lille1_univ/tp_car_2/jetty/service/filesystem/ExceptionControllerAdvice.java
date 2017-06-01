package fr.lille1_univ.tp_car_2.jetty.service.filesystem;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionControllerAdvice {

	@ExceptionHandler(MyException.class)
	public ResponseEntity<ErrorMessage> handleException(MyException e) {
		// log.error("ERROR", e);
		ErrorMessage message = new ErrorMessage(HttpStatus.PRECONDITION_FAILED.value(), e.getMessage());
		return new ResponseEntity<>(message, new HttpHeaders(), HttpStatus.BAD_REQUEST);
	}

}