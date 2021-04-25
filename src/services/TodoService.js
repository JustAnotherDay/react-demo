const axios = require("axios");

const api_url = "http://justanother-nodejstodo.herokuapp.com";

function GetLoginToken() {
  return axios
    .post(`${api_url}/login`, {})
    .then(function (response) {
      //console.log("GetLoginToken result - ", response);
      return response.data.token;
    })
    .catch(function (error) {
      console.error(error);
    });
}

function GetTodoItems(token) {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  console.log("GetTodoItems - " + token);
  return axios
    .get(`${api_url}/todo`, config)
    .then(function (response) {
      //console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
}

export { GetLoginToken, GetTodoItems };
