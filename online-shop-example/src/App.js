import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { Shop, Product } from './pages'
import './App.css';

const App = () => {
  return (
	<BrowserRouter>
			<Routes>
				<Route path={'/'} element={<MainLayout/>}>
					<Route index element={<Shop/>}/>
				</Route>
				<Route path={'products'} element={<MainLayout/>}>
					{/* <Route index element = {<Products>}/> */}
					<Route path={':productId'} element={<Product/>}/>
				</Route>
			</Routes>
	</BrowserRouter>
  );
}

export default App;
