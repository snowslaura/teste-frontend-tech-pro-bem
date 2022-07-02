import {Title, Main , Middle} from "./style"
import Image from "../components/Image/Image";


function App() {
  const pets = ["cat","dog"]
  return (
   <Main>
      <Title>
        <p> Pet Generator</p>
      </Title>  
      <Middle>
        {pets.map((pet)=> <Image pet={pet}/>)}      
      </Middle>      
   </Main>
  );
}

export default App;
