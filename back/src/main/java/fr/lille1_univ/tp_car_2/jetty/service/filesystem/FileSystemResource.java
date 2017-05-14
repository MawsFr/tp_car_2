package fr.lille1_univ.tp_car_2.jetty.service.filesystem;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/files", produces=MediaType.APPLICATION_JSON_VALUE)
public class FileSystemResource {
	
	public static final String LIST_PATH = "/api/files/list";
	private static final Logger log = Logger.getLogger(FileSystemResource.class.getName());
	
	@Autowired
	protected FileSystemManager manager;
	
	@PostConstruct
	public void initRootPath() {
		manager.init();
	}

	@GetMapping("/list")
	public List<FileInfos> listDirectory(final HttpServletRequest request) {
		final String directory = request.getRequestURI().replaceFirst(LIST_PATH, "");
		final File[] files = manager.listFiles(directory);
		// TODO : Create a Mapper
		final List<FileInfos> infos = new ArrayList<>();
		for (final File file : files) {
			final FileInfos info = new FileInfos();
			info.setName(file.getName());
			info.setSize(file.length());
			info.setIsDirectory(file.isDirectory());
			// TODO : add group etc ...
			infos.add(info);
		}
		log.info(infos);
		return infos;
		
	}
	
//	@DeleteMapping
//	public void deleteFile() {
//		// TODO : To implement
//	}
//	
//	@PostMapping
//	public void createDirectory() {
//		
//	}
//	
//	@DeleteMapping
//	public void deleteDirectory() {
//		// TODO : To implement
//	}
//	
//	@PostMapping
//	public void uploadFile(final MultipartFile file) {
//		
//	}
//	
//	@GetMapping
//	public void downloadFile() {
//		// TODO : To implement
//	}
	

}
