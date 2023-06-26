import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles'
import { RecoilRoot } from 'recoil';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainRoute } from "./constants/Routes";
import { theme } from './theme';

type Props = Record<string, never>;

const App: React.FC<Props> = () => {
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
