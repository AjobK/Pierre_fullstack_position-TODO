package com.todo.controllers;

import com.todo.entities.Todo;
import com.todo.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todo")
public class TodoController {

    @Autowired
    private TodoRepository todoRepository;

    @GetMapping
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    @DeleteMapping(value="/{id}")
    public void deleteTodoById(@PathVariable int id) {
        todoRepository.deleteById(id);
    }
}
