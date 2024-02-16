import { useState } from 'react'

import './App.css'
import { Message } from './composants/message/Message'

function App() {

  return (
    <div>
        <h1>SALUT</h1>
        <Message auteur={"François DANET"} enfant={"test"}></Message>
    </div>
  );
}

export default App
