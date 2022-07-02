import {Main,Pet} from "./style"
import Button from "../Button/Button";

function Image({pet}){


    return(
        <Main>
            <Pet/>
            <Button pet={pet}/>
        </Main>        
    )
}
export default Image;