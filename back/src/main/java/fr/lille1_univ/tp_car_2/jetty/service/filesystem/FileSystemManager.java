package fr.lille1_univ.tp_car_2.jetty.service.filesystem;

import java.io.File;

import org.springframework.stereotype.Component;

@Component
public class FileSystemManager {

	public File[] listFiles(final String directory) {
		final File dir = new File(directory);
		return dir.listFiles();
	}
	

}
