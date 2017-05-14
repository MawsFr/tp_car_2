package fr.lille1_univ.tp_car_2.jetty.service.filesystem;


public class FileInfos {

	protected String name;
	protected Long size;
	protected Boolean isDirectory;
	
	public FileInfos() {}

	public String getName() {
		return name;
	}

	public void setName(final String name) {
		this.name = name;
	}

	public Long getSize() {
		return size;
	}

	public void setSize(final long l) {
		this.size = l;
	}

	public Boolean getIsDirectory() {
		return isDirectory;
	}

	public void setIsDirectory(final Boolean isDirectory) {
		this.isDirectory = isDirectory;
	}

	public void setSize(final Long size) {
		this.size = size;
	}

	@Override
	public String toString() {
		return "FileInfos [name=" + name + ", size=" + size + ", isDirectory=" + isDirectory + "]";
	}
	
}
