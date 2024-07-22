


import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import First from "./Components/First";
import Game from "./Components/Game";
import ChatMain from './Components/ChatMain';



function App() {
  

  return (
   
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<First />} />
      <Route exact path='/game' element={<Game />} />
      <Route exact path='/chat' element={<ChatMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
