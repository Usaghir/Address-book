import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import EmployeeProvider from 'global/EmployeeContext';

import Profile from 'components/profile/Profile';
import Home from 'components/Home';
import NotFound from 'components/NotFound';

function App() {
  return (
    <div className="App">
      <EmployeeProvider>
        <Router>
          <Routes>
            <Route exact path="/"  element={<Home/>} />
            <Route exact path="/Profile"  element={<Profile/>} />
            <Route path = '*' element={<NotFound/>} />
          </Routes>
        </Router>
      </EmployeeProvider>
      
    </div>
  );
}

export default App;
