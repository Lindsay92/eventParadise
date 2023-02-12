package co.simplon.events.entities;

public class Topic {
	
	private Long id;
	private String Name;
	
	public Topic() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	@Override
	public String toString() {
		return "Topic [id=" + id + ", Name=" + Name + "]";
	}
	
		

}
