package co.simplon.events.controllers;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.events.database.DataBase;
import co.simplon.events.dtos.EventCreateDto;
import co.simplon.events.entities.Event;

@RestController
@RequestMapping("/events")
@CrossOrigin
public class EventController {
	
	@PostMapping
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void create(@RequestBody EventCreateDto inputs)
	{
		Event event = new Event();
		
		event.setName(inputs.getName());
		LocalDateTime createdAt = LocalDateTime.now();
		event.setCreatedAt(createdAt);
		
//		event.setLocation(inputs.getLocation());
//		event.setTopic(inputs.getTopic());
		Long location = inputs.getLocation();
		event.setLocation(location);
		Long topic = inputs.getTopic();
		event.setTopic(topic);
		
		event.setRate(inputs.getRate());
		event.setDescription(inputs.getDescription());
		DataBase.saveEvent(event);
		
		
		System.out.println(event);
		
		
	}
}
