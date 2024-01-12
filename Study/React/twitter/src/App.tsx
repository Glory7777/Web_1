import { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './component/layout'
import Home from './routes/home'
import Profile from './routes/profile'
import Login from './routes/login'
import CreateAccount from './routes/createAccount'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import LoadingScreen from './component/loadingScreen'
import { auth } from './firebase'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "profile",
        element: <Profile></Profile>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/create_account", 
    element: <CreateAccount/>,
  },
]);


const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color: white;
    font-family: system-ui,

  }
  `;


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const init = async() => {
    await auth.authStateReady();
    // wait firebase
    // setTimeout(() => setIsLoading(false), 2000);
    setIsLoading(false);
  }
  useEffect(() => {
    init();
  }, []);
  return (
    <>
    <GlobalStyles/>
    {isLoading ? <LoadingScreen/> : <RouterProvider router={router} /> }
    </>
  )
}

export default App
