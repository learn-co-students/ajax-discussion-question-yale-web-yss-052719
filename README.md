# Discussion Questions: AJAX

## Objectives

* Identify synchronous and asynchronous code
* Describe the process of communicating with the server
* Process data successfully returned from fetch()

## Exercise

### Question 1

Given the following code list the order of console.logs:

```javascript
console.log("Hello")

fetch('https://randomuser.me/api/')
  .then( res => res.json() )
  .then( data => {
    console.log("Hi") 
  })

console.log("Sup?")
```
"Hello", "Sup?", "Hi"
### Question 2

When fetchData is executed what will be console logged?

```javascript
function fetchData(){
        var data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( res => res )
        console.log(data)	
}

fetchData()
```
The fetch request cause it's being stored in the var data.

What will be console logged when the following code is run? Why?

```javascript
function fetchData(){
        var data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( json => console.log(json) )
}

fetchData()
```
The JSON response object from the api link, because the .then from the response object request looks for the data in the resulting variable whenever it's called.

What will be console logged when the following code is run? Why?

```javascript
function fetchData(){
        var data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( console.log )
}

fetchData()
```
The JSON response object from the api link, because if console.log is used in  a .then by itself the program still assumes it is referring to the resulting data.

### Question 3

In your own words: what does asynchronous mean?
When one process does not rely on the other one being completed or executed to be started.
### Question 4

Write out the request and response cycle. What is its purpose? How does it work?

Client sends an HTTP request (get, post etc) to server the server retrieves data and sends a response code once the data is retrieved and its meant to get info from the backend to the frontend.

### Question 5

Check out the JSON you get from making a GET request to [this](https://randomuser.me/api/) url (https://randomuser.me/api/).

Open up the Github repository for this reading and view the provided `src/index.html` file in the browser. In `src/index.js`, make an AJAX request to that url when the button is clicked and append the retrieved information to the DOM. Use the labels to append the right data in the appropriate h4's, h3's and img tags.
