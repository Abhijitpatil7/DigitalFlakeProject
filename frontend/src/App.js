import Home from './components/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCategory from './components/Form/AddCategory';
import AddProduct from './components/Form/AddProduct';
import ShowProduct from './components/Form/ShowProduct';
import ShowCategory from './components/Form/showcategory';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/addcategory' element={<AddCategory/>}></Route>
      <Route exact path='/addproduct' element={<AddProduct/>}></Route>
      <Route exact path='/showproduct' element={<ShowProduct/>}></Route>
      <Route exact path='/showcategory' element={<ShowCategory/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}
export default App;
