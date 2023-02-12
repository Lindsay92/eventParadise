package co.simplon.events.dtos;

public class TopicView {
	private Long id;
	private String Name;
	
	public TopicView() {
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



