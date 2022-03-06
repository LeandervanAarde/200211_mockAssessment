import axios from "axios";

axios.get('https://www.balldontlie.io/api/v1/stats')
.then((response) =>{
    console.log(response)
    console.log(response.data.data[1].player.first_name)

})
.catch((err) =>{
console.log(err)

});

const ComponentOne = () =>{
    return(

        <h1>This is Component one bruh</h1>
    );


}

export default ComponentOne;