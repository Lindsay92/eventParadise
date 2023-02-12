package co.simplon.events.dtos;

public class LocationUpdateDto {
	
	private String Name;

	public LocationUpdateDto() {
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
		return "LocationUpdateDto [Name=" + Name + "]";
	}
	
	
}
