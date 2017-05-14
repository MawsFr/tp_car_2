package fr.lille1_univ.tp_car_2.jetty.service.filesystem;

import java.io.File;
import java.io.IOException;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Component;

@Component
public class FileSystemManager {
	
	public static final String ROOT_PATH = "root";
	private static final Logger log = Logger.getLogger(FileSystemManager.class.getName());

	public File[] listFiles(final String directory) {
		final File dir = new File(ROOT_PATH + '/' + directory);
		return dir.listFiles();
	}
	
	public Boolean createFile(final String name) throws IOException {
		final File file = new File(name);
		return file.createNewFile();
	}
	
	public void init() {
		final File root = new File(ROOT_PATH);
		if(!root.exists()) {
			log.info("Création du dossier " + ROOT_PATH);
			root.mkdir();
		}		
	}

}
