import { NavLink, Route, Routes } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/home/home-page';
import DetailsPage from './pages/details/details-page';
import NoPage from './pages/4O4/no-page';

export function App() {
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Currency Converter Example</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/details">Details</NavLink>
      </nav>
      <Routes>
        <Route
          index
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <HomePage />
            </React.Suspense>
          }
        />

        <Route
          path="details"
          index
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <DetailsPage />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
