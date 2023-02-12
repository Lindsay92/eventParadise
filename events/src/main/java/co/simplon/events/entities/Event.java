package co.simplon.events.entities;

import java.time.LocalDateTime;

public class Event {
	private Long id;
	private String name;
	private LocalDateTime createdAt;
//	private Location location;
//	private Topic topic;
	private Long location;
	private Long topic;
	private int rate;
	private String description;
	
	public Event() {
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
		return "Event [id=" + id + ", name=" + name + ", createdAt=" + createdAt + ", location=" + location + ", topic="
				+ topic + ", rate=" + rate + ", description=" + description + "]";
	}

//	@Override
//	public String toString() {
//		return "Event [id=" + id + ", name=" + name + ", createdAt=" + createdAt + ", location=" + location + ", topic="
//				+ topic + ", rate=" + rate + ", description=" + description + "]";
//	}
	
	
}
