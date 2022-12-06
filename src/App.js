import { useAuthState } from './context/auth/auth-context';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  const { token } = useAuthState();
  return token ? <Dashboard /> : <Login />;
}

export default App;
