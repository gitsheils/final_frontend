const baseUrl = "https://api.calorieninjas.com/v1/nutrition";

function getFruit(fruit) {
  return fetch(`${baseUrl}?query=${fruit}`, {
    headers: { "X-Api-Key": "DRpy7ih1ZGlu02Ut3fgRUQ==NcJap6bT5WWxTsm6" },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  });

  /*
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((res) => {
    console.log("fetched");
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  });
  */
}
export { getFruit };
