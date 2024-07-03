const axios = require ('axios')
const prompt = require ("prompt")



export const apiReq = (url) => {
    axios.get(url, (err, response)).then((result) => {
        console.log("", result)
    }).catch((err) => {
        alert(err)
    });
}


export const Pokemon = (url) => {






    return     (




        <div className="pokemon">
        <h1>Pokemon</h1>

        <p id = "pokemon-api" value = {name}> </p>
      <button className="LoadImage"></button>
      </div>
    )


}




