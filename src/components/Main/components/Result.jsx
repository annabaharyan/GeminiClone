import { useContext } from 'react';
import AIContext from '../../../context/Context';
import { assets } from '../../../assets/assets';
import Loader from './Loader';

const Result = () => {
  const { recentPrompt, result, loading } = useContext(AIContext);
  return (
    <div className="result">
      <div className="result-title">
        <img src={assets.user_icon} alt="user" className="user-icon" />
        <p>{recentPrompt}</p>
      </div>
      <div className="result-data">
        <img
          src={assets.gemini_icon}
          alt="gemini-icon"
          className="gemini-icon"
        />
        {loading ? (
          <Loader />
        ) : (
          <p dangerouslySetInnerHTML={{ __html: result }} className='result-value'></p>
        )}
      </div>
    </div>
  );
};

export default Result;
