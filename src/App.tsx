import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import SMSAnalysisDashboard from './pages/Dashboard/SMSAnalysisDashboard';
import User from './pages/User';

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
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Dashboard | SMS Analysis Plateform" />
              <SMSAnalysisDashboard />
            </>
          }
        />
        <Route
          path="/user"
          element={
            <>
              <PageTitle title="User | SMS Analysis Plateform" />
              <User />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | SMS Analysis Plateform" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | SMS Analysis Plateform" />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | SMS Analysis Plateform" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | SMS Analysis Plateform" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | SMS Analysis Plateform" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | SMS Analysis Plateform" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | SMS Analysis Plateform" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | SMS Analysis Plateform" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | SMS Analysis Plateform" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | SMS Analysis Plateform" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | SMS Analysis Plateform" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
