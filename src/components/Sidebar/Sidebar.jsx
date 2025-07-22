import { useState } from 'react';
import { assets } from '../../assets/assets';
import './Sidebar.scss';

const Sidebar = () => {
  const [colapsedSider, setColapsedSider] = useState(true);
  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          className="menu"
          alt="menu"
          onClick={() => setColapsedSider((prev) => !prev)}
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="plus" />
          {colapsedSider && <p>New Chat</p>}
        </div>
        {colapsedSider && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="message" />
              <p>What is react...</p>
            </div>
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question" />
          {colapsedSider && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="history" />
          {colapsedSider && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="setting" />
          {colapsedSider && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
