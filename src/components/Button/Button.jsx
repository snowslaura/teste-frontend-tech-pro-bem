import {Content} from "./styles"

function Button({setRandomNumber, pet}){  

    function fetchPets(){
      const number = parseInt(Math.random()*50);
      setRandomNumber(number)
    } 

    return(
        <Content onClick={fetchPets}>
            <p >Get a {pet}</p> 
        </Content>
    )
}

export default Button;