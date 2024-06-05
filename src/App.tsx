import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SMSAnalysisDashboard from './pages/Dashboard/SMSAnalysisDashboard';
import User from './pages/UserTable';
import UserForm from './pages/UserForm';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/useAuth';
import ProtectedRoute from './util/ProtectedRoute';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <AuthProvider>
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <PageTitle title="Login | SMS Analysis Plateform" />
                <LoginPage />
              </>
            }
          />
          <Route
            index
            element={
              <>
                <PageTitle title="Dashboard | SMS Analysis Plateform" />
                <ProtectedRoute>
                  <SMSAnalysisDashboard />
                </ProtectedRoute>
              </>
            }
          />
          <Route
            path="/users"
            element={
              <>
                <PageTitle title="User | SMS Analysis Plateform" />
                <User />
              </>
            }
          />
          <Route
            path="/user"
            element={
              <>
                <PageTitle title="User | SMS Analysis Plateform" />
                <UserForm />
              </>
            }
          />
          <Route
            path="/user/:id"
            element={
              <>
                <PageTitle title="User | SMS Analysis Plateform" />
                <UserForm />
              </>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
