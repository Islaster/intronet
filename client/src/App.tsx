import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import "./layout.css";
import Footer from "./components/shared/footer";
import Navbar from "./components/shared/navbar";
const Dashboard = lazy(() => import("./pages/dashboard"));

function App() {
  return (
    <div className="page">
      <Navbar />
      <main className="content">
        <Suspense fallback={<div />}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
