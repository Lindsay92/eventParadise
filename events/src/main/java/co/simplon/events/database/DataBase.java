package co.simplon.events.database;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import co.simplon.events.entities.Event;
import co.simplon.events.entities.Location;
import co.simplon.events.entities.Topic;

public class DataBase {
	
	private static Long locationId = 0L;
	private static Long topicId = 0L;
	private static Long eventId = 0L;
	
	//private static final Map<Long, Location> LOCATIONS = new HashMap<>();
	//private static final Map<Long, Topic> TOPICS = new HashMap<>();
	private static final Map<Long, Event> EVENTS = new HashMap<>();
	
	//public static void saveLocation(Location location) {
		//locationId++;
		//location.setId(locationId);
		//LOCATIONS.put(locationId, location);
	//}
	
	//public static void saveTopic(Topic topic) {
		//TopicId++;
		//topic.setId(TopicId);
		//TOPICS.put(TopicId, topic);
	//}
	
	
	// Bloc d'initialisation static =>
	private static final Map<Long, Location> LOCATIONS = new HashMap<>();
	static {
		Location paris = new Location();
		locationId++;
		paris.setId(locationId);
		paris.setName("Paris");
		LOCATIONS.put(locationId, paris);
		
		Location nantes = new Location();
		locationId++;
		nantes.setId(locationId);
		nantes.setName("Nantes");
		LOCATIONS.put(locationId, nantes);
		
		Location rennes = new Location();
		locationId++;
		rennes.setId(locationId);
		rennes.setName("Rennes");		
		LOCATIONS.put(locationId, rennes);
	}
	
	private static final Map<Long, Topic> TOPICS = new HashMap<>();
	static {
//		TOPICS = new HashMap<>();
//		topicId++;
//		TOPICS.put(topicId,"Easter");
//		topicId++;
//		TOPICS.put(topicId, "Christmas");
//		topicId++;
//		TOPICS.put(topicId, "Flower");
		
		Topic ecology = new Topic();
		topicId++;
		ecology.setId(topicId);
		ecology.setName("Ecology");
		TOPICS.put(topicId, ecology);
		
		Topic humanResources = new Topic();
		topicId++;
		humanResources.setId(topicId);
		humanResources.setName("Human Ressources");
		TOPICS.put(topicId, humanResources);
		
		Topic tech = new Topic();
		topicId++;
		tech.setId(topicId);
		tech.setName("Technology");
		TOPICS.put(topicId, tech);
	}
	
	
	
	public static void saveEvent(Event event) {
		eventId++;
		event.setId(eventId);
		EVENTS.put(eventId, event);
		
	}
	
	public static Collection<Location> findAll() {
		return LOCATIONS.values();
		
	}
	
	public static Collection<Topic> findAllTopic() {
		return TOPICS.values();
	}
	
	public static Collection<Event> findAllEvent() {
		return EVENTS.values();
	}
	

}
