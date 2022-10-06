import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/sb-admin-2.css'; 
import './css/fontawesome-free/css/fontawesome.min.css'; 
import Topbar from './topbar.js'; 
import Dashboard from './dashboard.js';
import Users from './users.js';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {
  return <>
  <BrowserRouter>
    <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar/>
            <Routes>
              <Route path='/dashboard' element={<Dashboard/>}></Route>
              <Route path='/users' element={<Users/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
  </BrowserRouter>
  </> 
}

export default App;
