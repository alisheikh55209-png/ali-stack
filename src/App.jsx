import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Hello World!');

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <button onClick={() => setMessage('Hello from ali-stack!')}>
          Change Message
        </button>
        <p>
          Basic React Hello World app connected to GitHub repo.
        </p>
      </header>
    </div>
  );
}

export default App;
