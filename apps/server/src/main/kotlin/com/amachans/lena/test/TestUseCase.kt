package com.amachans.lena.test

import org.springframework.stereotype.Service

@Service
class TestUseCase(
    val repository: TestRepository
) {
    fun getEntity(id: String): TestModel {
        return repository.findById(id).get()
    }
}