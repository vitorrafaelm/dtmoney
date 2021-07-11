import { GlobalStyles } from './styles/global'; 

import {Header} from './components/Header'; 
import {Dashboard} from './components/Dashboard';
export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyles />
    </>
  );
}
