package com.amachans.lena

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class LenaApplication

fun main(args: Array<String>) {
	runApplication<LenaApplication>(*args)
}
