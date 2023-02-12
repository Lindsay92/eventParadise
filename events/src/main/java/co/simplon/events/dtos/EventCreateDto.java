package co.simplon.events.dtos;

import java.time.LocalDateTime;

import co.simplon.events.entities.Location;
import co.simplon.events.entities.Topic;

public class EventCreateDto {

	private String name;
	private LocalDateTime createdAt;
//	private Location location;
//	private Topic topic;
	private Long location;
	private Long topic;
	private int rate;
	private String description;
	
	public EventCreateDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	
//	public Location getLocation() {
//		return location;
//	}
//
//	public void setLocation(Location location) {
//		this.location = location;
//	}
//
//	public Topic getTopic() {
//		return topic;
//	}
//
//	public void setTopic(Topic topic) {
//		this.topic = topic;
//	}

	public Long getLocation() {
		return location;
	}

	public void setLocation(Long location) {
		this.location = location;
	}

	public Long getTopic() {
		return topic;
	}

	public void setTopic(Long topic) {
		this.topic = topic;
	}

	public int getRate() {
		return rate;
	}

	public void setRate(int rate) {
		this.rate = rate;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "EventCreateDto [name=" + name + ", createdAt=" + createdAt + ", location=" + location + ", topic="
				+ topic + ", rate=" + rate + ", description=" + description + "]";
	}

//	@Override
//	public String toString() {
//		return "EventCreateDto [name=" + name + ", createdAt=" + createdAt + ", location=" + location + ", topic="
//				+ topic + ", rate=" + rate + ", description=" + description + "]";
//	}
	
	
		
}
