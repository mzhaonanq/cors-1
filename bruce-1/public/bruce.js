// // CORS跨域;
// const request = new XMLHttpRequest();
// request.open("GET", "http://qqq.com:8888/friends.json");
// request.onreadystatechange = () => {
//   if (request.readyState === 4 && request.status === 200) {
//     console.log(request.response);
//   }
// };
// request.send();

//JSONP跨域
const random = "bruceJSONPCallbackName" + Math.random();
window[random] = (data) => {
  console.log(data);
};
const script = document.createElement("script");
script.src = `http://qqq.com:9999/friends.js?functionName=${random}`;
document.body.appendChild(script);
