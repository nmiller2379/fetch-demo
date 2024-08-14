const list = document.querySelector("#todos");

// fetch makes a request to the server and returns a promise. A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. In this case, the promise is resolved with the response object representing the response to the request. The object returned by fetch is a Response object. It holds information about the request and the response, such as the status of the request and the response headers. The response object is then passed to the next then() method.
fetch("https://dummyjson.com/todos?limit=5")
  // The response object is passed to the next then() method. The response object has a json() method that returns a promise that resolves with the result of parsing the body text as JSON. The result is an object representing the parsed JSON. The object is then passed to the next then() method.
  .then((res) => res.json())
  //   The object representing the parsed JSON is passed to the next then() method. The object has a todos property that holds an array of objects. The array is then iterated over using the forEach() method. The forEach() method calls a function once for each element in the array. The function creates a new list item element and sets its text content to the value of the todo property of each object in the array. The list item element is then appended to the list element.
  .then((data) => {
    // We can see the data in the console
    console.log(data);
    // We can also use the data to display the todos
    data.todos.forEach((item) => {
      //   Here we are creating a new list item element for each todo item
      const li = document.createElement("li");
      //   Here we are setting the text content of the list item element to the value of the todo property of each object in the
      li.textContent = item.todo;
      //   Here we are appending the list item element to the list element
      list.appendChild(li);
    });
  })
  .catch(console.error);
