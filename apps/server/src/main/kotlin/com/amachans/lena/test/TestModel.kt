package com.amachans.lena.test;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "test")
data class TestModel (
    @Id
    @GeneratedValue
    val id: String,
    val description: String
)
