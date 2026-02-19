import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import TaskBoard from './pages/TaskBoard';
import CreateTask from './pages/CreateTask';
import TaskDetails from './pages/TaskDetails';
import Dashboard from './pages/Dashboard';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // show creative loading animation for 5 seconds
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<TaskBoard />} />
          <Route path="/create" element={<CreateTask />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#10B981',
                secondary: '#fff',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#EF4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
