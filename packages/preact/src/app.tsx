import { useState } from 'preact/hooks';
import { Avatar } from './components/Avatar';
import { Button } from './components/Button';
import { Counter } from './components/Counter';

export function App() {
  const [count, setCount] = useState(999);
  return (
    <div>
      <Avatar>BH</Avatar>
      <Avatar color="purple">BH</Avatar>
      <Button onClick={() => setCount(count + 1)} fullwidth>
        Button
        <Counter slot="after" count={count} inverse />
      </Button>
    </div>
  );
}
