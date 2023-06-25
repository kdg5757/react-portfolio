import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles'
import { RecoilRoot } from 'recoil';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainRoute } from "./constants/Routes";
import { theme } from './theme';

const App: React.FC = () => {
  const router = createBrowserRouter(MainRoute);
  
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  )
}

export default App;
