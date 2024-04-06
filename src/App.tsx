import { useState } from 'react';

import { Button } from './components/ui/button';

import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='container'>
      <h1>Vite + React</h1>
      <div className='card'>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
};

export default App;
