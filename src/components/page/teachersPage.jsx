import "./teachersPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { getTeachers } from "../../redux/teachers/teachersOperations";
import Conteiner from "../conteiner/Conteiner";
import TeacherCard from "../teacherCard/teacherCard";
import PropagateLoader from "react-spinners/PropagateLoader";
import ConteinerCenter from "../conteiner/ConteinerCenter";
import Button from "../button/button";
import Filter from "../filter/filter";

const TeachersPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.teachers.isLoading);
  const teachers = useSelector((state) => state.teachers.teachers);

  const [loadedTeachersCount, setLoadedTeachersCount] = useState(4);
  const [languageFromFilter, setLanguageFromFilter] = useState(false);
  const [levelFromFilter, setLevelFromFilter] = useState(false);
  const [priceFromFilter, setPriceFromFilter] = useState(false);

  const filteredTeachers = teachers.filter((teacher) => {
    if (!languageFromFilter && !levelFromFilter && !priceFromFilter) {
      return true;
    }
    const languageFilterResult =
      !languageFromFilter || teacher.languages.includes(languageFromFilter);
    const levelFilterResult =
      !levelFromFilter || teacher.levels.includes(levelFromFilter);
    const priceFilterResult =
      !priceFromFilter || `${teacher.price_per_hour}` === priceFromFilter;
    return languageFilterResult && levelFilterResult && priceFilterResult;
  });

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  const handleLoadMore = () => {
    setLoadedTeachersCount((prevCount) => prevCount + 4);
  };

  return (
    <Conteiner>
      <Filter
        teachers={teachers}
        setLanguageFromFilter={(data) => setLanguageFromFilter(data)}
        setLevelFromFilter={(data) => setLevelFromFilter(data)}
        setPriceFromFilter={(data) => setPriceFromFilter(data)}
      />

      {isLoading ? (
        <ConteinerCenter>
          <PropagateLoader
            color={"var(--accent-color)"}
            size={40}
            cssOverride={{ marginBottom: "64px" }}
          />
        </ConteinerCenter>
      ) : filteredTeachers?.length !== 0 ? (
        <ul className="teachersList">
          {filteredTeachers?.slice(0, loadedTeachersCount).map((el) => (
            <TeacherCard key={nanoid()} teacher={el} />
          ))}
        </ul>
      ) : (
        <ConteinerCenter>
          <p className="bleackTitle">
            No teacher was found according to your criteria
          </p>
        </ConteinerCenter>
      )}
      {filteredTeachers?.length > loadedTeachersCount && !isLoading && (
        <ConteinerCenter>
          <Button text="Load more" onClick={handleLoadMore} />
        </ConteinerCenter>
      )}
    </Conteiner>
  );
};

export default TeachersPage;
