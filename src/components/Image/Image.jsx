import {Main,Pet} from "./style"
import Button from "../Button/Button";
import { useState } from "react";

function Image({pet,url}){

    const [randomNumber,setRandomNumber] = useState(1)   
    
    return(
        <Main>
            <Pet src={`${url}?image=${randomNumber}`}/>
            <Button  setRandomNumber={setRandomNumber} pet={pet}/>
        </Main>        
    )
}
export default Image;