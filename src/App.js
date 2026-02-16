import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './Aboutus';
import ContactUs from './Contactus';
import Services from './Services';
import AddEmployee from './AddEmployee';
import GetEmployee from './GetEmployee';
import EmployeeDashboard from './EmployeeDashboard';
import AdminDashboard from './AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/addemp" element={<AddEmployee />} />
        <Route path="/getemployee" element={<GetEmployee />} />
        <Route path="/employeedashboard" element={<EmployeeDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
