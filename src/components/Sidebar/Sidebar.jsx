import { useState, useContext } from 'react';
import AIContext from '../../context/Context';
import { assets } from '../../assets/assets';
import './Sidebar.scss';

const Sidebar = () => {
  const [colapsedSider, setColapsedSider] = useState(true);

  const {
    onSent,
    previousPrompts,
    setPreviousPrompts,
    recentPrompt,
    setRecentPrompt,
    setInputValue,
    setShowResult,
    setResult,
  } = useContext(AIContext);

  const handleNewChat = () => {
    setRecentPrompt('');
    setInputValue('');
    setShowResult(false);
    setResult('');
  };

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    const found = previousPrompts.find((p) => p.prompt === prompt);
    if (found) {
      setResult(found.response);
      setShowResult(true);
    }
  };

  const handleDeletePrompt = (promptToDelete) => {
    setPreviousPrompts((prev) => prev.filter((p) => p.prompt !== promptToDelete));
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          className="menu"
          alt="menu"
          onClick={() => setColapsedSider((prev) => !prev)}
        />
        <div className="new-chat" onClick={handleNewChat}>
          <img src={assets.plus_icon} alt="plus" />
          {colapsedSider && <p>New Chat</p>}
        </div>

        {colapsedSider && previousPrompts.length > 0 && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousPrompts.map(({ prompt }, index) => (
              <div className="recent-entry" key={index}>
                <div
                  onClick={() => loadPrompt(prompt)}
                  className="entry-content"
                >
                  <img src={assets.message_icon} alt="message" />
                  <p className="truncate-prompt">{prompt}</p>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => handleDeletePrompt(prompt)}
                >
                  x
                </button>
              </div>
            ))}
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
