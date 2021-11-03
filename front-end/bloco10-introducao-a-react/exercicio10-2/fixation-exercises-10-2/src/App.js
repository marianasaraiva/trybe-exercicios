import staringCat from './staringCat.jpg';
import Image from './image.js';


function App() {
  return (<div>
    <Image source={ staringCat } alternativeText="Cute cat staring" />
  </div>
  );
}

export default App;
