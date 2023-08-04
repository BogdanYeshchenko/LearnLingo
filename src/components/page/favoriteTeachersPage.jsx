import "./teachersPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { getTeachers } from "../../redux/teachers/teachersOperations";
import TeacherCard from "../teacherCard/teacherCard";
import Conteiner from "../conteiner/Conteiner";
import PropagateLoader from "react-spinners/PropagateLoader";
import ConteinerCenter from "../conteiner/ConteinerCenter";
import Button from "../button/button";

const FavoriteTeachersPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.teachers.isLoading);
  const teachers = useSelector((state) => state.teachers.teachers);
  const favoriteList = useSelector((state) => state.favorite.favorite);

  const [loadedTeachersCount, setLoadedTeachersCount] = useState(4);

  const favoriteTeacher = teachers?.filter((el) =>
    favoriteList.includes(el.id)
  );

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  const handleLoadMore = () => {
    setLoadedTeachersCount((prevCount) => prevCount + 4);
  };

  return (
    <Conteiner>
      {isLoading ? (
        <ConteinerCenter>
          <PropagateLoader
            color={"var(--accent-color)"}
            size={40}
            cssOverride={{ marginBottom: "64px" }}
          />
        </ConteinerCenter>
      ) : favoriteTeacher.length !== 0 ? (
        <ul className="teachersList">
          {favoriteTeacher
            .map((el) => <TeacherCard key={nanoid()} teacher={el} />)
            .slice(0, loadedTeachersCount)}
        </ul>
      ) : (
        <ConteinerCenter>
          <p className="bleackTitle">There are no favorite teachers yet</p>
        </ConteinerCenter>
      )}
      {favoriteTeacher.length > loadedTeachersCount && !isLoading && (
        <ConteinerCenter>
          <Button text="Load more" onClick={handleLoadMore} />
        </ConteinerCenter>
      )}
    </Conteiner>
  );
};

export default FavoriteTeachersPage;
