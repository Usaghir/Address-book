import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeProvider from 'global/EmployeeContext';
import Profile from 'components/profile/Profile';
import Home from 'components/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* A provider so the its child could subscribe to its data any where in the tree */}
      <EmployeeProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/:id" element={<Profile />} />
           
          </Routes>
        </Router>
      </EmployeeProvider>
    </div>
  );
}

export default App;
