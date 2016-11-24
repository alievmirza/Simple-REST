package com.sidenis.reminder.rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.sidenis.reminder.service.TasksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;

import javax.annotation.PostConstruct;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

/**
 * Created by Mirza.Aliev on 11/3/2016.
 */
@Service
@Path("/")
public class RestService {

    @Autowired
    private TasksService tasksService;

    @PostConstruct
    private void initRest() {
        SpringBeanAutowiringSupport.processInjectionBasedOnCurrentContext(this);
    }

    @GET
    @Path("/{param}")
    public Response getMsg(@PathParam("param") String msg) {

        String output = "Jersey say : " + msg;
        String res = new Gson().toJson(tasksService.getTasks());
        return Response.status(200).entity(res).build();

    }
}