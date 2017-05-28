package fr.lille1_univ.tp_car_2.jetty.service.filesystem;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@RestController
@RequestMapping(value = "/files", produces=MediaType.APPLICATION_JSON_VALUE)
public class FileSystemResource {

	public static final String LIST_PATH = "/api/files/list/";
	private static final String DOWNLOAD_PATH = "/api/files/download/";
	private static final String UPLOAD_PATH = "/api/files/upload/";
	private static final String DELETE_PATH = "/api/files/delete/";
	private static final Logger log = Logger.getLogger(FileSystemResource.class.getName());
	private static final String CREATE_DIR_PATH = "/api/files/createdir/";

	@Autowired
	protected FileSystemManager manager;

	@PostConstruct
	public void initRootPath() {
		manager.init();
	}

	@GetMapping("/list/**")
	public List<FileInfos> listDirectory(final HttpServletRequest request) {
		final String path = request.getRequestURI().replaceFirst(LIST_PATH, "");
		final File[] files = manager.listFiles(path);
		// TODO : Create a Mapper
		final List<FileInfos> infos = new ArrayList<>();
		if (files != null) {
			for (final File file : files) {
				// TODO : add group etc ...
				infos.add(manager.getFileInfos(file));
			}
		}
		log.info(infos);
		return infos;
	}

	@DeleteMapping(value = "/delete/**", headers = "Accept=*/*")
	public void deleteFile(final HttpServletRequest request) throws Exception {
		final String path = request.getRequestURI().replaceFirst(DELETE_PATH, "");
		try {
			manager.delete(path);
		} catch (final Exception e) {
			log.error("Delete error", e);
			throw e;
		}

	}

	@GetMapping(value = "/download/**", headers = "Accept=*/*")
	public void downloadFile(final HttpServletRequest request, final HttpServletResponse response) throws IOException {
		final String path = request.getRequestURI().replaceFirst(DOWNLOAD_PATH, "");
		log.info("Trying to download : " + path);
		try {
			manager.download(path, response.getOutputStream());
			response.flushBuffer();
			log.info("Download done !");
		} catch (final IOException e) {
			log.error("Download error", e);
			throw e;
		}
	}

	@PostMapping("/upload/**")
	public FileInfos handleFileUpload(final HttpServletRequest request, @RequestParam("file") final MultipartFile file,
			final RedirectAttributes redirectAttributes) throws IOException {
		final String path = request.getRequestURI().replaceFirst(UPLOAD_PATH, "");
		log.info("Trying to upload" + file.getOriginalFilename());
		try {
			return manager.getFileInfos(manager.upload(file, path));

		} catch (final IOException e) {
			log.error("Upload error", e);
			throw e;
		}
	}

	@PostMapping(value = "/createdir/**", consumes = MediaType.APPLICATION_JSON_VALUE)
	public FileInfos createDirectory(final HttpServletRequest request, @RequestBody FileInfos info) throws Exception {
		final String path = request.getRequestURI().replaceFirst(CREATE_DIR_PATH, "") + '/' + info.getName();
		try {
			final FileInfos infos = manager.getFileInfos(manager.createDirectory(path)); 
			return infos;
		} catch (final Exception e) {
			log.error("Delete error", e);
			throw e;
		}
	}


}
