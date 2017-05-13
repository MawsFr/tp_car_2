package fr.lille1_univ.tp_car_2.jetty.service.filesystem;


public class FileInfos {

	protected String name;
	protected Long size;
	protected String owner;
	protected String group;
	protected String rights;
	
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

	public String getOwner() {
		return owner;
	}

	public void setOwner(final String owner) {
		this.owner = owner;
	}

	public String getGroup() {
		return group;
	}

	public void setGroup(final String group) {
		this.group = group;
	}

	public String getRights() {
		return rights;
	}

	public void setRights(final String rights) {
		this.rights = rights;
	}

}
