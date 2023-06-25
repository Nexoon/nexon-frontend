import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import { lazy, useEffect } from 'react';
import { fetch } from './api/testQuery';

const HomePage = lazy(() => import("./pages/HomePage"));
const ChatPage = lazy(() => import("./pages/ChatPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  useEffect(() => {
    async function getTest() {
      const data = await fetch();
      console.log(data);
      return data;
    }
    getTest();
  }, []);

  
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App;
