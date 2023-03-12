
import './App.css';
import Signup from './components/Signup';
import Explanation from './components/Explanation';

function App() {
  return (
    <div className="grid grid-cols-2 gap-14 justifybasis-5 bg-orange-100 h-screen cursor-pointer justify-end">
      <Explanation  />
     <Signup className="" />
    
    </div>
  );
}

export default App;
