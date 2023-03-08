import MainComponent from './components/mainComponent.js';
import './App.css';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <MainComponent /> 
    </BrowserRouter>
  );
}

export default App;
