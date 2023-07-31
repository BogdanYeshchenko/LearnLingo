import "./tweetCardaPage.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../../redux/users/usersOperations";
import { useSelector } from "react-redux";
import { useState } from "react";
import { changeFollowingStatus } from "../../redux/followingStatus/followingStatusSlice";
import ConteinerCenter from "../conteiner/ConteinerCenter";
import Conteiner from "../conteiner/Conteiner";
import TweetCard from "../tweetCards/tweetCard";
import Button from "../button/button";
import PulseLoader from "react-spinners/PulseLoader";

const TweetCardsPageBox = () => {
  const dispatch = useDispatch();
  const [visibleCount, setVisibleCount] = useState(3);
  const [filter, setFilter] = useState("show all");

  const followingStatus = useSelector((state) => state.followingStatus);
  const isLoading = useSelector((state) => state.users.isLoading);
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const updateFollowingStatus = async (userId, isFollowing) => {
    await dispatch(changeFollowingStatus({ userId, isFollowing }));
  };

  const filteredUsers = () => {
    switch (filter) {
      case "follow":
        return users.filter((user) => followingStatus[user.id]);
      case "followings":
        return users.filter((user) => !followingStatus[user.id]);
      default:
        return users;
    }
  };

  return (
    <Conteiner>
      <ConteinerCenter>
        <div>
          <select
            className="selectBox"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option className="selectText" value="show all">
              Show All
            </option>
            <option className="selectText" value="follow">
              Follow
            </option>
            <option className="selectText" value="followings">
              Followings
            </option>
          </select>
        </div>
        {isLoading ? (
          <PulseLoader size={25} color="#36d7b7" />
        ) : (
          <ul className="tweetCardsPageBox">
            {filteredUsers()
              .slice(0, visibleCount)
              .map((user) => (
                <TweetCard
                  key={user.id}
                  user={user}
                  isFollowing={followingStatus[user.id]}
                  updateFollowingStatus={updateFollowingStatus}
                />
              ))}
          </ul>
        )}

        <div>
          {visibleCount < filteredUsers().length && (
            <Button
              text="Load More"
              onClick={() => setVisibleCount(visibleCount + 3)}
            />
          )}
        </div>
      </ConteinerCenter>
    </Conteiner>
  );
};

export default TweetCardsPageBox;
