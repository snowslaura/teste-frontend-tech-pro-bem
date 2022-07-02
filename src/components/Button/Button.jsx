import {Content} from "./styles"
import axios from "axios"


function Button({pet}){

    function fetchPets(){
        if(pet==="cat"){
            try{
                const {data} =  await axios.get("")
            }catch(e){

            }
        }
    }

    return(
        <Content onCLick={fetchPets(pet)}>
            <p >Get a {pet}</p> 
        </Content>
    )
}

export default Button;