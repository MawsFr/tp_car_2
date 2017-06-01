package fr.lille1_univ.tp_car_2.jetty.service.filesystem;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class FileSystemManager {

	public static final String ROOT_PATH = "root";
	private static final Logger log = Logger.getLogger(FileSystemManager.class.getName());
	protected File root;

	public File[] listFiles(final String directory) throws MyException {
		try {
			final File dir = new File(ROOT_PATH + '/' + directory);
			return dir.listFiles();
		} catch (final Exception e) {
			throw new MyException("Erreur lors du listing des fichiers. Le chemin n'existe pas.");
		}
	}

	public Boolean createFile(final String name) throws IOException, MyException {
		try {
			final File file = new File(name);
			return file.createNewFile();
		} catch (final Exception e) {
			throw new MyException("Impossible de créer le fichier");
		}
	}

	public void init() throws MyException {
		root = new File(ROOT_PATH);
		if (!root.exists()) {
			log.info("Création du dossier " + ROOT_PATH);
			try {
				root.mkdir();
			} catch (final Exception e) {
				throw new MyException("Impossible de créer le fichier root, vous n'avez peut etre pas les droits.");
			}
		}
	}

	public String getRelativePath(final File file) {
		return root.toURI().relativize(file.toURI()).getPath();
	}

	public void download(final String path, final OutputStream out) throws MyException {
		final File file = new File(ROOT_PATH + '/' + path);
		if (!file.exists()) {
			throw new MyException("Le fichier demandé n'existe pas !");
		}
		if (!file.canRead()) {
			throw new MyException("Vous n'avez pas le droit d'accéder à ce fichier");
		}
		if (!file.isFile()) {
			throw new MyException("Vous ne pouvez pas télécharger de dossier");
		}
		try {
			final InputStream is = new FileInputStream(file);
			IOUtils.copy(is, out);
			is.close();
		} catch (final Exception e) {
			throw new MyException("Impossible de télécharger le fichier");
		}
	}

	public File upload(final MultipartFile file, final String path) throws MyException {
		if (!file.isEmpty()) {
			final File newFile = new File(ROOT_PATH + '/' + path + '/' + file.getOriginalFilename());
			if (newFile.exists()) {
				throw new MyException("Un fichier du même nom existe déjà, veuillez d'abord le supprimer");
			} else {
				try {
					newFile.createNewFile();
				} catch (final IOException e) {
					throw new MyException("Impossible d'envoyer le fichier");
				}
			}
			FileOutputStream os;
			try {
				os = new FileOutputStream(newFile);
			} catch (final FileNotFoundException e1) {
				throw new MyException("Erreur lors de l'ouverture du flux");
			}
			try {
				IOUtils.copy(file.getInputStream(), os);
			} catch (final Exception e) {
				throw new MyException("Impossible d'envoyer le fichier");
			} finally {
				try {
					os.close();
				} catch (final Exception e) {
					throw new MyException("Erreur lors de la fermeture du flux");
				}
			}
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

	public void delete(final String path) throws MyException {
		final File file = new File(ROOT_PATH + '/' + path);
		if (!file.exists()) {
			throw new MyException("Le fichier ou dossier demandé n'existe pas !");
		}
		if (!file.canWrite()) {
			throw new MyException("Vous n'avez pas le droit de supprimer ce fichier ou dossier");
		}
		try {
			if (file.isFile()) {
				file.delete();
			} else {
				FileUtils.deleteDirectory(file);
			}
		} catch(final Exception e) {
			throw new MyException("Vous ne pouvez pas supprimer ce fichier ou dossier");
		}
	}

	public File createDirectory(final String path) throws MyException {
		final File file = new File(ROOT_PATH + '/' + path);
		if (file.exists()) {
			throw new MyException("un dossier du même nom existe déjà !");
		}
		if (!file.mkdir()) {
			throw new MyException("La création du dossier a échoué");
		}
		log.info("Directory successfully created");
		return file;
	}

	public File renameDirectory(final String path, final String name, final String newName) throws MyException {
		final File file = new File(ROOT_PATH + '/' + path + '/' + name);
		final File dest = new File(ROOT_PATH + '/' + path + '/' + newName);

		if (name.isEmpty()) {
			throw new MyException("Le nom du fichier ne peut pas être vide");
		}
		if (newName.isEmpty()) {
			throw new MyException("Le nouveau nom ne peut pas être vide");
		}
		if (!file.exists()) {
			throw new MyException("Le fichier ou dossier n'existe plus !");
		}
		if (dest.exists()) {
			throw new MyException("Un fichier ou dossier du même nom existe déjà");
		}
		if (!file.renameTo(dest)) {
			throw new MyException("Le renommage du fichier ou dossier a échoué");
		}
		log.info("Directory successfully renamed");
		
		return dest;
	}
}
