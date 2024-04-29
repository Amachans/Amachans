package com.amachans.lena.test

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class TestController (
    val testUseCase: TestUseCase
){
    @GetMapping("test")
    fun test() : String{
        return testUseCase.getEntity("id").description
    }
}