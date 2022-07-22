import './App.css';
import Header from './Components/Header.jsx';
import Futer from './Components/Futer.jsx';
import CommunityMessage from './Components/CommunityMessage';
import VK from 'react-vk';
import { HashRouter} from "react-router-dom";

function App() {
  return (
    <div>
      <VK>
        <HashRouter>
          <Header />
          <CommunityMessage />
          <Futer />
        </HashRouter>
      </VK>
    </div>
  );
}

export default App;
