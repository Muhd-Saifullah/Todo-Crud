
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Todo from './component/Todo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Todo/>
    </div>
  );
}

export default App;
