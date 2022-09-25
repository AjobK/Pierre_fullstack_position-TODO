package com.todo.entities;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;

@Entity
@Table(name = "todo")
public class Todo {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String task;

    @Column(nullable = false)
    private int priority;

    public int getId() {
        return this.id;
    }

    public String getTask() {
        return this.task;
    }

    public int getPriority() {
        return this.priority;
    }

    @Override
    public String toString() {
        return "(" + id + ") " + task + " [" + priority + "]";
    }
}
