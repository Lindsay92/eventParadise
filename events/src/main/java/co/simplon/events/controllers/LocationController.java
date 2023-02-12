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
import co.simplon.events.dtos.LocationCreateDto;
import co.simplon.events.dtos.LocationUpdateDto;
import co.simplon.events.dtos.LocationView;
import co.simplon.events.entities.Location;

@RestController
@RequestMapping("/locations")
@CrossOrigin
public class LocationController {

	//@PostMapping
	//@ResponseStatus(HttpStatus.NO_CONTENT)
	
	//public void create(@RequestBody LocationCreateDto inputs) {
		
		//Location location = new Location();
		
		//location.setName(inputs.getName());
		//DataBase.saveLocation(location);
		
		//System.out.println(location);
		
	//}
	
	//@PatchMapping("/{id}")
	//@ResponseStatus(HttpStatus.NO_CONTENT)
	//public void update(@RequestBody LocationUpdateDto inputs, @PathVariable("id") Long id) {
		
		//Location location = location.(id);
		//location.setName(inputs.getName());
		
	//}
//	@PatchMapping("/{id}")
//	@ResponseStatus(HttpStatus.NO_CONTENT)
//	public void update(@RequestBody LocationUpdateDto inputs, @PathVariable("id") Long id) {
//		
//		//Location location = location.();
//		//location.setName(inputs.getName());
//	}
	
	@GetMapping
	public Collection<LocationView> getAll() {
		Collection<Location> locations = DataBase.findAll();
		
		Collection<LocationView> views = new ArrayList<>();
		
		for (Location location : locations) {
			LocationView view = new LocationView();
			view.setId(location.getId());
			view.setName(location.getName());
			
			views.add(view);
		}
		return views;
	}
	
}
