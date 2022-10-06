
import './App.css';
import EmployeeProvider from 'global/EmployeeContext';
import Employee from 'components/contacts/Employee';

function App() {
  return (
    <div className="App">
      <EmployeeProvider>
        <Employee></Employee>
    </EmployeeProvider>
    </div>
  );
}

export default App;
