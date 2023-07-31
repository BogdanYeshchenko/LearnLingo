import { useState } from "react";
import Button from "../button/button";
import "./tweetCards.css";

const TweetCard = ({ user, isFollowing, updateFollowingStatus }) => {
  const [isFollower, setIsFollower] = useState(isFollowing);

  const onSignUp = () => {
    setIsFollower(!isFollower);
    updateFollowingStatus(user.id, !isFollower);
  };

  return (
    <li className="meinTweetBox">
      <div className="pictureTC"></div>
      <div className="logoBox">
        <div className="rectangle"></div>
        <div className="logoBorder">
          <img src={user?.avatar} alt="User avatar" />
        </div>
      </div>
      <div className="textCards" style={{ marginBottom: 16 }}>
        <span>{user?.tweets}</span>
        <span>tweets</span>
      </div>
      <div className="textCards" style={{ marginBottom: 26 }}>
        <span>
          {isFollower
            ? (user?.followers + 1).toLocaleString()
            : user?.followers.toLocaleString()}
        </span>
        <span>Followers</span>
      </div>

      <Button
        isActive={isFollower}
        onClick={onSignUp}
        text={isFollower ? "Following" : "Follow"}
      />
    </li>
  );
};

export default TweetCard;
