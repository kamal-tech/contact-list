import React, {Suspense} from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import LoadingSpinner from "./UI/LoadingSpinner"
const HomePage = React.lazy(()=>import('./pages/HomePage'))
const LoginPage = React.lazy(()=>import('./pages/LoginPage'))

function App() {
  

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes >
      <Route path="/" element={<Navigate to="login" replace/>} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="home"
          element={<HomePage />}
        />
      </Routes>
    </Suspense>
  );
}

export default App;
