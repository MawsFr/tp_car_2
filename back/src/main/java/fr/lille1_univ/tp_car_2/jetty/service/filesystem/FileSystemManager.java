package fr.lille1_univ.tp_car_2.jetty.service.filesystem;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import org.apache.commons.io.IOUtils;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

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

	public String getRelativePath(final File file) {
		return root.toURI().relativize(file.toURI()).getPath();
	}

	public void download(final String path, final OutputStream out) throws IOException {
		final File file = new File(ROOT_PATH + '/' + path);
		if (file.exists() && file.canRead() && file.isFile()) {
			final InputStream is = new FileInputStream(file);
			IOUtils.copy(is, out);
			is.close();
		} else {
			throw new FileNotFoundException("The path relates to a directory");
		}
	}

	public File upload(final MultipartFile file, final String path) throws IOException {
		if (!file.isEmpty()) {
			final File newFile = new File(ROOT_PATH + '/' + path + '/' + file.getOriginalFilename());
			final FileOutputStream os = new FileOutputStream(newFile);
			if (!newFile.exists()) {
				newFile.createNewFile();
			}
			IOUtils.copy(file.getInputStream(), os);
			os.close();
			return newFile;
		}
		return null;
	}

	public FileInfos getFileInfos(final File file) {
		final FileInfos info = new FileInfos();
		info.setName(file.getName());
		info.setSize(file.length());
		info.setIsDirectory(file.isDirectory());
		info.setPath(getRelativePath(file));
		return info;
	}

	public void delete(final String path) throws Exception {
		final File file = new  File(ROOT_PATH + '/' + path);
		if(file.exists() && file.canWrite() && !file.delete()) {
				throw new Exception("Could not delete the file or directory " + path);
		}
	}

	public File createDirectory(String path) throws Exception {
		final File file = new File(ROOT_PATH + '/' + path);
		if (path.isEmpty() || file.exists() || !file.mkdir()) {
			throw new Exception("Could not create the directory " + file.getPath());
		}
		log.info("Directory successfully created");
		return file;
	}
}
