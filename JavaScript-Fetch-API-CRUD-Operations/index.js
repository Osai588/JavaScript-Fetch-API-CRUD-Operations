const URL = "http://localhost:3000/data/10";

// fetch(URL).then((res)=>res.json()).then((data)=>{
//   for(let i=0;i<data.length;i++){
//     console.log(data[i]);
//   }
// }).catch((res)=>console.log(res));

// let Options = {
//   "method": "post",
//   "headers": {
//     "content-type": "application/json"
//   },
//   "body": JSON.stringify({
//     "id": "10",
//     "name": "swamy",
//     "age": "28"

//   })
// };

// fetch(URL, Options).then((res) => {
//   if (res.ok) {
//     console.log(res.status, res.statusText)
//   }
// }).catch((res) => console.log(res));



// let Options = {
//   "method": "delete",
// };

// fetch(URL, Options).then((res) => {
//   if (res.ok) {
//     console.log(res.status, res.statusText)
//   }
// }).catch((res) => console.log(res));

// let Options = {
//   "method": "put",
//   "headers": {
//     "content-type": "application/json"
//   },
//   "body": JSON.stringify({
//     "id": "4",
//     "name": "nuwan",
//     "age": "32"

//   })
// };

// fetch(URL, Options).then((res) => {
//   if (res.ok) {
//     console.log(res.status, res.statusText)
//   }
// }).catch((res) => console.log(res));

let Options = {
  "method": "PATCH",
  "headers": {
    "content-type": "application/json"
  },
  "body": JSON.stringify({
    
    "name": "Roy"
  

  })
};

fetch(URL, Options).then((res) => {
  if (res.ok) {
    console.log(res.status, res.statusText)
  }
}).catch((res) => console.log(res));

