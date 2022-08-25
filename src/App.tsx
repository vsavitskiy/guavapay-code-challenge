import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import {QueryStringProvider} from "./context/queryString";
import {HomePage} from './pages/Home';
import {RepositoriesPage} from "./pages/Repositories";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <QueryStringProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/:userLogin/repositories" element={<RepositoriesPage/>} />
          </Routes>
        </Router>
      </QueryStringProvider>
    </QueryClientProvider>
  );
}

export default App;
