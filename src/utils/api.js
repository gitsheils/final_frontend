import processServerResp from "./utils";

const baseUrl = "http://localhost:3001";

function signup(email, password) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(processServerResp);
}

function signin(email, password) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(processServerResp);
}

function getSharedRecipes() {
  return fetch(`${baseUrl}/items/shared`).then(processServerResp);
}

function getUserInfo(token) {
  return fetch(`${baseUrl}/user/getuser`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(processServerResp);
}

function getMyRecipes(token) {
  return fetch(`${baseUrl}/items/myrecipes`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(processServerResp);
}

function addRecipe(token, title, ing, ins, shared, image) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      ing,
      ins,
      shared,
      image,
    }),
  }).then(processServerResp);
}
function deleteRecipe(token, itemId) {
  return fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(processServerResp);
}

export {
  getSharedRecipes,
  signin,
  getUserInfo,
  signup,
  addRecipe,
  getMyRecipes,
  deleteRecipe,
};
