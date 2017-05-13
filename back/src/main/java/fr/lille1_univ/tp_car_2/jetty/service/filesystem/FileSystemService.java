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
public class FileSystemService {
	
	public static final String LIST_PATH = "/api/files/list";
	private static final Logger log = Logger.getLogger(FileSystemService.class.getName());

	public static final String ROOT_PATH = "root";
	
	@Autowired
	protected FileSystemManager manager;
	
	@PostConstruct
	public void initRootPath() {
		final File root = new File(ROOT_PATH);
		if(!root.exists()) {
			log.info("Création du dossier " + ROOT_PATH);
			root.mkdir();
		}
	}

	@GetMapping("/list")
	public List<FileInfos> listFiles(final HttpServletRequest request) {
		final String directory = ROOT_PATH + '/' + request.getRequestURI().replaceFirst(LIST_PATH, "");
		final File[] files = manager.listFiles(directory);
		final List<FileInfos> infos = new ArrayList<>();
		for (final File file : files) {
			final FileInfos info = new FileInfos();
			info.setName(file.getName());
			info.setSize(file.length());
			// TODO : add group etc ...
			infos.add(info);
		}
		return infos;
		
	}

}
