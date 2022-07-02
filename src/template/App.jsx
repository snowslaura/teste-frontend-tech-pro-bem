import {Title, Main , Middle} from "./style"
import Image from "../components/Image/Image";


function App() {
  const pets = [{name:"cat", url:"http://placekitten.com/300/200"},{name:"dog", url:"http://place.dog/300/200"}]
  return (
   <Main>
      <Title>
        <p> Pet Generator</p>
      </Title>  
      <Middle>
        {pets.map((pet, index)=> <Image key={index} pet={pet.name} url={pet.url}/>)}      
      </Middle>      
   </Main>
  );
}

export default App;
