package fr.lille1_univ.tp_car_2.jetty.service.filesystem;

public class MyException extends Exception {

	public MyException() {
		super();
	}

	public MyException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public MyException(String message, Throwable cause) {
		super(message, cause);
	}

	public MyException(String message) {
		super(message);
	}

	public MyException(Throwable cause) {
		super(cause);
	}

}
