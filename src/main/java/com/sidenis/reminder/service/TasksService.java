package com.sidenis.reminder.service;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

/**
 * Created by Mirza.Aliev on 11/11/2016.
 */

@Service
public class TasksService {

    public List<String > getTasks() {
        List<String> result = Arrays.asList("task1", "task2", "task3");
        return result;
    }

}
