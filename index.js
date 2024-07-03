const axios = require ('axios')
const prompt = require ("prompt")

const url = prompt("Enter api URL")
const request = (url) => {

axios.get(url, (err, response)).then((result) => {
    console.log("", result)
}).catch((err) => {
    alert(err)
});


}