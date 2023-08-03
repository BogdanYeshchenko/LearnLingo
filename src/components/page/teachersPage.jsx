import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Conteiner from "../conteiner/Conteiner";
import TeacherCard from "../teacherCard/teacherCard";
import "./teachersPage.css";
import { getTeachers } from "../../redux/teachers/teachersOperations";
import PropagateLoader from "react-spinners/PropagateLoader";
import ConteinerCenter from "../conteiner/ConteinerCenter";
import { nanoid } from "@reduxjs/toolkit";
import Button from "../button/button";

const TeachersPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.teachers.isLoading);
  const teachers = useSelector((state) => state.teachers.teachers);

  const [loadedTeachersCount, setLoadedTeachersCount] = useState(4);

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
      ) : (
        <ul className="teachersList">
          {teachers?.slice(0, loadedTeachersCount).map((el) => (
            <TeacherCard key={nanoid()} teacher={el} />
          ))}
        </ul>
      )}
      {teachers?.length > loadedTeachersCount && !isLoading && (
        <ConteinerCenter>
          <Button text="Load more" onClick={handleLoadMore} />
        </ConteinerCenter>
      )}
    </Conteiner>
  );
};

export default TeachersPage;
