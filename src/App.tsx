import React, {useState} from 'react';

// Compoents
import Home from './components/Home';

// Style
import GlobalStyle from './GlobalStyle';


function App() {

  const [flashBackground, setFlashBackground] = useState(false);

  return (
    <>
      <Home setFlashBackground={setFlashBackground} />

      <GlobalStyle flashBackground={flashBackground} />
    </>
  );
}

export default App;
