import {Content} from "./styles"

function Button({setRandomNumber, pet}){  

    function fetchPets(){
      const number = parseInt(Math.random()*30);
      setRandomNumber(number)
      console.log(pet,number)
    } 

    return(
        <Content onClick={fetchPets}>
            <p >Get a {pet}</p> 
        </Content>
    )
}

export default Button;