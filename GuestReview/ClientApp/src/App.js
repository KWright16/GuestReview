import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
import {Toast} from "./components/notifications/Toast";
import './custom.css';

const queryClient = new QueryClient()

const App = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Layout>
          <ThemeProvider theme={theme}>
          <Routes>
            {AppRoutes.map((route, index) => {
              const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            })}
          </Routes>
          <Toast/>
          </ThemeProvider>
        </Layout>
      </QueryClientProvider>
    );  
}

export default App;