package co.simplon.events.dtos;

public class TopicUpdateDto {
	
	private String Name;

	public TopicUpdateDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	@Override
	public String toString() {
		return "TopiceCreateDto [Name=" + Name + "]";
	}
	

}
