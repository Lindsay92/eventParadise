package co.simplon.events.controllers;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.events.database.DataBase;
import co.simplon.events.dtos.TopicCreateDto;
import co.simplon.events.dtos.TopicUpdateDto;
import co.simplon.events.dtos.TopicView;
import co.simplon.events.entities.Topic;

@RestController
@RequestMapping("/topics")
@CrossOrigin
public class TopicController {
	
	//@PostMapping
	//@ResponseStatus(HttpStatus.NO_CONTENT)
	//public void create(@RequestBody TopicCreateDto inputs) {
		
		//Topic topic = new Topic();
		
		//topic.setName(inputs.getName());
		//DataBase.saveTopic(topic);
		
		//System.out.println(topic);
	//}
	
	//@PatchMapping("/{id}")
	//@ResponseStatus(HttpStatus.NO_CONTENT)
	//public void update(@RequestBody TopicUpdateDto inputs, @PathVariable("id") Long id) {
	//}
	
	@GetMapping
	public Collection<TopicView> getAll() {
		Collection<Topic> topics = DataBase.findAllTopic();
		
		Collection<TopicView> views = new ArrayList<>();
		
		for (Topic topic : topics) {
			TopicView view = new TopicView();
			view.setId(topic.getId());
			view.setName(topic.getName());
			
			views.add(view);
		}
		return views;
	}

}
