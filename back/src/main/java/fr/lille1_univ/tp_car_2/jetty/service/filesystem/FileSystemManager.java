package fr.lille1_univ.tp_car_2.jetty.service.filesystem;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import org.apache.commons.io.IOUtils;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Component;

@Component
public class FileSystemManager {
	
	public static final String ROOT_PATH = "root";
	private static final Logger log = Logger.getLogger(FileSystemManager.class.getName());
	protected File root;

	public File[] listFiles(final String directory) {
		final File dir = new File(ROOT_PATH + '/' + directory);
		return dir.listFiles();
	}
	
	public Boolean createFile(final String name) throws IOException {
		final File file = new File(name);
		return file.createNewFile();
	}
	
	public void init() {
		root = new File(ROOT_PATH);
		if(!root.exists()) {
			log.info("Création du dossier " + ROOT_PATH);
			root.mkdir();
		}		
	}

	public String getRelativePath(File file) {
		return root.toURI().relativize(file.toURI()).getPath();
	}

	public void download(final String path, OutputStream out) throws IOException {
		final File file = new File(ROOT_PATH + '/' + path);
		if (file.isFile()) {
			final InputStream is = new FileInputStream(file);
			IOUtils.copy(is, out);
			is.close();
		} else {
			throw new FileNotFoundException("The path relates to a directory");
		}
	}

}
