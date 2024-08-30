import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./UI/AppLayout";

import Dashboard from "./Pages/Dashboard";
import Airtime from "./Pages/Airtime";
import AirtimeToCash from "./Pages/AirtimeToCash";
import Bills from "./Pages/Bills";
import Help from "./Pages/Help";
import TransactionHistory from "./Pages/TransactionHistory";
import TvSubscription from "./Pages/TvSubscription";
import EditDashboard from "./Components/Dashboard/EditDashboard";
import Data from "./Pages/Data";
import Login from "./Components/Login";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Dashboard />} />
            <Route path="airtime" element={<Airtime />} />
            <Route path="airtime-to-cash" element={<AirtimeToCash />} />
            <Route path="bills" element={<Bills />} />
            <Route path="help" element={<Help />} />
            <Route path="transactions" element={<TransactionHistory />} />
            <Route path="subscriptions" element={<TvSubscription />} />
            <Route path="data" element={<Data />} />
            <Route path="edit-dashboard" element={<EditDashboard />} />
            <Route path="/auth-login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
