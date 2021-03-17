import { Header } from "./conponents/Header";
import { GlobalStyle } from "./styles/global";
import { Dashboard } from './conponents/Dashboard'

export function App() {
  return (
    <>      
      <Header/>
        <Dashboard />
      <GlobalStyle />
    </>
  );
}

