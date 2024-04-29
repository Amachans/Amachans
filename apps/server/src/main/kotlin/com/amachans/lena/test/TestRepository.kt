package com.amachans.lena.test

import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface TestRepository: CrudRepository<TestModel, String> {
}
