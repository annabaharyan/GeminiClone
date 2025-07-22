import { useContext } from 'react';
import AIContext from '../../context/Context';
import { assets } from '../../assets/assets';
import Card from './components/Card';
import Result from './components/Result';
import './Main.scss';

const Main = () => {
  const { onSent, showResult, inputValue, setInputValue } =
    useContext(AIContext);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span className="user-name">Hello, Ann</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <Card
                desc="Suggest beautiful places to see on an upcomingroad trip"
                imageUrl={assets.compass_icon}
              />
              <Card
                desc="Briefly summerize this concept: urban planning"
                imageUrl={assets.bulb_icon}
              />
              <Card
                desc="Brainstorm team bonding activities for our work retreat"
                imageUrl={assets.message_icon}
              />
              <Card
                desc="Improve the readability of the following code"
                imageUrl={assets.code_icon}
              />
            </div>
          </>
        ) : (
          <Result />
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onSent();
                }
              }}
            />
            <div className="icon-container">
              <img src={assets.gallery_icon} alt="gallery" />
              <img src={assets.mic_icon} alt="mic" />
              <img src={assets.send_icon} alt="send" onClick={onSent} />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
