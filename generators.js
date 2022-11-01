"use strict"

function promise1(){
    return new Promise((resolve, reject) => {
        console.log("Promise 1");
        resolve();
    })
}
function promise2(){
    return new Promise((resolve, reject) => {
        console.log("Promise 2");
        resolve();
    })
}
function promise3(){
    return new Promise((resolve, reject) => {
        console.log("Promise 3");
        resolve();
    })
}
function promise4(){
    return new Promise((resolve, reject) => {
        console.log("Promise 4");
        resolve();
    })
}
function promise5(){
    return new Promise((resolve, reject) => {
        console.log("Promise 5");
        resolve();
    })
}

function* promiseIterator(){
    yield promise1();

    yield promise2();
    yield promise3();
    yield promise4();
    return promise5();
}

let pi = promiseIterator();

pi.next();
pi.next();
pi.next();
pi.next();
pi.next();