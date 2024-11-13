function getData(callback) {
  setTimeout(() => {
    callback("Data Fetched");
  }, 1000);
}
getData((message) => {
  console.log(message);
});

async function fetchData() {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 1000);
  });
  console.log(result);
}
fetchData();

//API HTTP REQUESTS
fetch("https://fakestoreapi.com/products/")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => "Error, error");

fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => "Error, error");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => "Error, error");
