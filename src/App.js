import './App.css';
import Header from './Components/Header.jsx';
import Futer from './Components/Futer.jsx';
import CommunityMessage from './Components/CommunityMessage';
import VK from 'react-vk';

function App() {
  return (
    <div>
      <VK>
          <Header />
          <CommunityMessage />
          <Futer />
      </VK>
    </div>
  );
}

export default App;
