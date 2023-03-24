package co.simplon.events.dtos;

import java.time.LocalDateTime;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

import co.simplon.events.entities.Location;
import co.simplon.events.entities.Topic;

public class EventCreateDto {

	@NotEmpty
	@NotNull
	private String name;
	@NotEmpty
	@NotNull
	private LocalDateTime createdAt;
//	private Location location;
//	private Topic topic;
	@NotNull
	private Long location;
	@NotNull
	private Long topic;
	@NotEmpty
	@NotNull
	@Positive
	private int rate;
	@NotEmpty
	@NotNull
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
