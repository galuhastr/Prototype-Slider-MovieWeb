import './App.css';
import './style/LandingPage.css'

// eslint-disable-next-line
import "swiper/css/bundle";
import './style/SwiperStyle.css'

import NavigationBar from './components/NavigationBar';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div>
      {/* Landing Page START*/}
      <div className="myBG">
        <NavigationBar />
        <LandingPage />
      </div>
      {/* Landing Page END*/}
    </div>
  );
}

export default App;
