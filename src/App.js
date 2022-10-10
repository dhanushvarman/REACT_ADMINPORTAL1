import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/sb-admin-2.css'; 
import './css/fontawesome-free/css/all.min.css'; 
// import '../public/img'; 
import Topbar from './topbar.js'; 
import Dashboard from './dashboard.js';
import Users from './users.js';
import Createuser from './createuser';
import Viewuser from './viewuser.js';
import Edituser from './edituser.js';
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
              <Route path='/createuser' element={<Createuser/>}></Route>
              <Route path='/users/:id' element={<Viewuser/>}></Route>
              <Route path='/users/edituser' element={<Edituser/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
  </BrowserRouter>
  </> 
}

export default App;
