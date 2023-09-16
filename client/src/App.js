import './App.css';
import {Routes, Route} from 'react-router-dom';
import NuevoProducto from './componentes/NuevoProducto';
import TodosProductos from './componentes/TodosProductos';
import VerProducto from './componentes/VerProducto';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/nuevo' element={<NuevoProducto/>}/>
        <Route path='/' element={<TodosProductos/>}/>
        <Route path='/elproducto/:id' element={<VerProducto/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
