import './App.css';
//import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='/jobs' element={<Blank />} />
                    <Route path='/applications' element={<Blank />} />
                    <Route path='/followers' element={<Blank />} />
                    <Route path='/myinventory' element={<Blank />} />
                    <Route path='/companyprofile' element={<Blank />} />
                    <Route path='/allusers' element={<Blank />} />
                    <Route path='/myaccount' element={<Blank />} />
                    <Route path='/dashboard' element={<Blank />} />
                    <Route path='/packages' element={<Blank />} />
                    <Route path='/events' element={<Blank />} />
                    <Route path='/blogs' element={<Blank />} />
                    <Route path='/changepwd' element={<Blank />} />
                    


                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;