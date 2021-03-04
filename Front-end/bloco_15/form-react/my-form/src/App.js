import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import Form from './components/Form';

function App() {
  return (
    <div className="App">
     <Provider store={ store }> 
     <Form />
     </Provider>
    </div>
  );
}

export default App;
