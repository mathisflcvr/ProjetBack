const url = "https://localhost3000/MOB";
fetch(url, {
  method: "get",
  headers: new Headers({
    "Content-Type": "application/json",
  }),
})
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResponse) {
    console.log(jsonResponse);
  });
