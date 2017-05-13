package fr.lille1_univ.tp_car_2.jetty.service.filesystem;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FileSystemService {

	@GetMapping
	public List<String> listFiles(@PathVariable String directory) {
		return null;
	}

}
