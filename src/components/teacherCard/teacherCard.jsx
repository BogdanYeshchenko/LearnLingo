import "./teacherCard.css";
import { PiBookOpen } from "react-icons/pi";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import Button from "../button/button";

const TeacherCard = ({ teacher }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    id,
    name,
    surname,
    languages,
    levels,
    rating,
    reviews,
    price_per_hour,
    lessons_done,
    avatar_url,
    lesson_info,
    conditions,
    experience,
  } = teacher;

  return (
    <li className="teacherItemBox">
      <div className="avatarBox">
        <img src={avatar_url} className="avatarImg" alt="Teacher avatar" />
      </div>
      <div className="teacherDescriptionBox">
        <div className="teacherDiscrHead">
          <div className="teacherName">
            <p className="greyTitle">Languages</p>
            <h2>
              {name} {surname}
            </h2>
          </div>
          <ul className="teacherDiscrHeadList">
            <li
              className="bleackTitle teacherDiscrHeadItem"
              style={{ display: "flex", gap: "8px", alignItems: "center" }}
            >
              <PiBookOpen size={16} color="#000000" />
              <span>Lessons online</span>
            </li>
            <li className="bleackTitle teacherDiscrHeadItem">
              Lessons done: {lessons_done}
            </li>
            <li
              className="bleackTitle teacherDiscrHeadItem"
              style={{ display: "flex", gap: "8px", alignItems: "center" }}
            >
              <AiFillStar color="#FFC531" size={16} />
              <span>Rating: {rating}</span>
            </li>
            <li className="bleackTitle">
              Price / 1 hour:
              <span className="greenText"> {price_per_hour}$</span>
            </li>
          </ul>
        </div>
        <div className="teacherDiscrMain">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            <p>
              <span className="greyTitle">Speaks: </span>
              <span className="bleackTitle">{languages.join(", ")}</span>
            </p>
            <p>
              <span className="greyTitle">Lesson Info: </span>
              <span className="bleackTitle">{lesson_info}</span>
            </p>
            <p>
              <span className="greyTitle">Conditions: </span>
              <span className="bleackTitle">{conditions}</span>
            </p>
          </div>

          {isExpanded && (
            <>
              <p className="teacherOpenDiscr">{experience}</p>
              <ul className="fitbackList">
                {reviews.map((el) => (
                  <li key={nanoid()} className="fitbackItem">
                    <div className="fitbackUser">
                      <img
                        src={el.avatar_url}
                        className="fidbackAvatar"
                        alt="Fitback avatar"
                      />
                      <div className="fidbackAuthor">
                        <span className="greyTitle">{el.reviewer_name}</span>
                        <span className="fitbackStars">
                          <AiFillStar color="#FFC531" size={16} />
                          {el.reviewer_rating}
                        </span>
                      </div>
                    </div>
                    <p className="fidbackText bleackTitle">{el.comment}</p>
                  </li>
                ))}
              </ul>
            </>
          )}

          {!isExpanded && (
            <button
              className="bleackTitle ReadMoreBtn"
              onClick={() => setIsExpanded(true)}
            >
              Read more
            </button>
          )}

          <ul className="levelsList">
            {levels.map((el) => (
              <li key={nanoid()} className="levelsItem">
                {el}
              </li>
            ))}
          </ul>
          <Button
            text="Book trial lesson"
            onClick={() => console.log("Book trial lesson", `id=${id}`)}
          />
        </div>
      </div>
    </li>
  );
};

export default TeacherCard;
