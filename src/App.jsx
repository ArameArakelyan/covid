import './App.css';
import { DarkModeProvider } from './comonents/darkmode';
import Main from './comonents/main';

function App() {
  return (
    <div className="App">
     <DarkModeProvider>
      <Main></Main>
     </DarkModeProvider>
    </div>
  );
}

export default App;
