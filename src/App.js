import Navigation from "./Components/Navigation";
import ComponentOne from "./Components/ComponentOne";
import ComponentTwo from "./Components/ComponentTwo";
import ComponentThree from "./Components/ComponentThree";


import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element = {<ComponentOne/>}></Route>
      <Route path="/ComponentTwo" element = {<ComponentTwo/>}></Route>
      <Route path="/ComponentThree" element = {<ComponentThree/>}></Route>

    </Routes>

    </>
    
  );
}

export default App;
