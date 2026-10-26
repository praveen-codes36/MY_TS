import './App.css'
import { ChaiCard } from './components/ChaiCard.tsx';
import { Counter } from './components/Counter.tsx';

function App(){
  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <ChaiCard  name="Headphones"  price={5000}  />
        <ChaiCard  name="iPhone"  price={105000}  />
      </div>
      <div>
        <Counter></Counter>
      </div>
    </>
  );
}


export default App;
