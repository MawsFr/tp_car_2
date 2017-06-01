package fr.lille1_univ.tp_car_2.jetty.service.filesystem;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value = "/files", produces=MediaType.APPLICATION_JSON_VALUE)
public class FileSystemResource {

	public static final String LIST_PATH = "/api/files/list/";
	private static final String DOWNLOAD_PATH = "/api/files/download/";
	private static final String UPLOAD_PATH = "/api/files/upload/";
	private static final String DELETE_PATH = "/api/files/delete/";
	private static final Logger log = Logger.getLogger(FileSystemResource.class.getName());
	private static final String CREATE_DIR_PATH = "/api/files/createdir/";
	private static final String RENAME_PATH = "/api/files/rename/";

	@Autowired
	protected FileSystemManager manager;

	@PostConstruct
	public void initRootPath() throws MyException {
		manager.init();
	}

	@GetMapping("/list/**")
	public List<FileInfos> listDirectory(final HttpServletRequest request) throws MyException {
		final String path = request.getRequestURI().replaceFirst(LIST_PATH, "");
		final File[] files = manager.listFiles(decodePath(path));
		final List<FileInfos> infos = new ArrayList<>();
		if (files != null) {
			for (final File file : files) {
				infos.add(manager.getFileInfos(file));
			}
		}
		log.info(infos);
		return infos;
	}

	@DeleteMapping(value = "/delete/**", headers = "Accept=*/*")
	public void deleteFile(final HttpServletRequest request) throws MyException {
		final String path = request.getRequestURI().replaceFirst(DELETE_PATH, "");
		manager.delete(decodePath(path));

	}

	@GetMapping(value = "/download/**", headers = "Accept=*/*")
	public void downloadFile(final HttpServletRequest request, final HttpServletResponse response) throws MyException {
		final String path = request.getRequestURI().replaceFirst(DOWNLOAD_PATH, "");
		log.info("Trying to download : " + path);
		try {
			manager.download(decodePath(path), response.getOutputStream());
			response.flushBuffer();
		} catch (final IOException e) {
			throw new MyException("Erreur, lors de la manipulation des flux", e);
		} catch (final MyException e) {
			throw e;
		}
	}

	@PostMapping("/upload/**")
	public FileInfos handleFileUpload(final HttpServletRequest request, @RequestParam("file") final MultipartFile file)
			throws MyException {
		final String path = request.getRequestURI().replaceFirst(UPLOAD_PATH, "");
		log.info("Trying to upload" + file.getOriginalFilename());
		return manager.getFileInfos(manager.upload(file, decodePath(path)));
	}

	@PostMapping(value = "/createdir/**", consumes = MediaType.APPLICATION_JSON_VALUE)
	public FileInfos createDirectory(final HttpServletRequest request, @RequestBody final FileInfos info) throws Exception {
		final String path = request.getRequestURI().replaceFirst(CREATE_DIR_PATH, "") + '/' + info.getName();
		log.info("Trying to create directory " + path);
		final FileInfos infos = manager.getFileInfos(manager.createDirectory(decodePath(path)));
		return infos;
	}

	@PostMapping(value = "/rename/**", consumes = MediaType.APPLICATION_JSON_VALUE)
	public void renameDirectory(final HttpServletRequest request, @RequestBody final RenameInfos infos) throws Exception {
		final String path = request.getRequestURI().replaceFirst(RENAME_PATH, "");
		log.info("Trying to rename directory " + path);
		manager.renameDirectory(decodePath(path), decodePath(infos.getName()), decodePath(infos.getNewName()));
	}

	public String decodePath(final String path) throws MyException {
		try {
			return URLDecoder.decode(path, "UTF-8");
		} catch (final UnsupportedEncodingException e) {
			throw new MyException("Impossible de décoder le chemin du fichier ou dossier", e);
		}
	}

	@ExceptionHandler(MyException.class)
	public ResponseEntity<ErrorMessage> handleException(final MyException e) {
		log.error("ERROR", e);
		final ErrorMessage message = new ErrorMessage(HttpStatus.PRECONDITION_FAILED.value(), e.getMessage());
		return new ResponseEntity<>(message, HttpStatus.BAD_REQUEST);
	}


}
