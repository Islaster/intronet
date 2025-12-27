import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import "./App.css";
import Footer from "./components/shared/footer";
import Navbar from "./components/shared/navbar";
const Dashboard = lazy(() => import("./pages/dashboard"));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
