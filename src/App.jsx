import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import { lazy } from 'react';
import { GlobalStyle, DarkTheme, LightTheme } from "./styles"
import { Global, ThemeProvider } from '@emotion/react'



const HomePage = lazy(() => import("./pages/HomePage"));
const ChatPage = lazy(() => import("./pages/ChatPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));



const App = () => {
  const theme = "light";

  return (
    <ThemeProvider
      theme={
        theme === "light"
          ? LightTheme
          : DarkTheme
      }
    >
      
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/chat' element={<ChatPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <Global styles={GlobalStyle} />

    </ThemeProvider>
  )
}


export default App;
