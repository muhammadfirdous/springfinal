package com.example.todoapp.service;

import com.example.todoapp.model.Task;

import java.util.List;

public interface TaskService {
    Task saveTask(Task task);
    List<Task> getAllTasks();
    void updateTaskStatus(Long id, Boolean status);
    void deleteTask(Long id);
}
