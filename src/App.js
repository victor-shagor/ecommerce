import Home from './pages/Home';
import './App.css'
import { QueryClient, QueryClientProvider } from "react-query";
import { CartContextProvider } from './context/cartContext';
import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundries';

function App() {
  const queryClient = new QueryClient()
  return (
    <ErrorBoundary>
    <CartContextProvider>
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
    </CartContextProvider>
    </ErrorBoundary>
  )
}

export default App;
