import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import "./layout.css";
import Footer from "./components/shared/footer";
const JobBoard = lazy(() => import("./pages/jobBoard/page"));
const Dashboard = lazy(() => import("./pages/dashboard"));
import Navbar from "./components/shared/navbar";

function App() {
  return (
    <div className="page">
      <Navbar />
      <main className="content">
        <Suspense fallback={<div />}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/board" element={<JobBoard />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
