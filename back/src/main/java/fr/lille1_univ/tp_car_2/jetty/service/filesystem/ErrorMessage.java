package fr.lille1_univ.tp_car_2.jetty.service.filesystem;

public class ErrorMessage {
	private int status;
	private String message;

	public ErrorMessage() {
	}

	public ErrorMessage(int status, String message) {
		this.status = status;
		this.message = message;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
