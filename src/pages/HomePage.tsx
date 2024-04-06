import { useState } from 'react';

import { Button } from '@/components/ui/button';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='container py-4'>
      <div className='flex flex-col items-center gap-2'>
        <p>{count}</p>
        <Button
          className='max-w-[150px]'
          onClick={() => setCount((count) => count + 1)}
        >
          Increase the counter
        </Button>
      </div>
    </div>
  );
};

export default App;
