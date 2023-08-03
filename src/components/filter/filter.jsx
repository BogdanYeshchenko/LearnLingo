import "./filter.css";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import getUniqueValues from "../../helpers/getUniqueValues";
import { nanoid } from "@reduxjs/toolkit";

const Filter = ({
  teachers,
  setLanguageFromFilter,
  setLevelFromFilter,
  setPriceFromFilter,
}) => {
  const [isLanguagesOpen, setIsLanguagesOpen] = useState(false);
  const [isLevelOpen, setIsLevelOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState("Сhoose a value");
  const [selectedLevels, setSelectedLevels] = useState("Сhoose a value");
  const [selectedPrice, setSelectedPrice] = useState("Сhoose a value");

  const uniqueLanguagesArray = getUniqueValues(teachers, "languages");
  const uniqueLevelsArray = getUniqueValues(teachers, "levels");
  const uniquePriceArray = getUniqueValues(teachers, "price_per_hour");

  const handleOpenList = (name) => {
    switch (name) {
      case "languages":
        setIsLanguagesOpen(!isLanguagesOpen);
        break;
      case "level":
        setIsLevelOpen(!isLevelOpen);
        break;
      case "price":
        setIsPriceOpen(!isPriceOpen);
        break;

      default:
        break;
    }
  };

  return (
    <div className="FilterMainBox">
      <div className="filterBox">
        <p className="filterTitle">Languages</p>
        <div className="filterInputBox" style={{ minWidth: "221px" }}>
          {selectedLanguage}
          <button
            name="languages"
            type="button"
            className="openListBtn"
            onClick={() => handleOpenList("languages")}
          >
            <BsChevronDown name="languages" size={20} />
          </button>
          {isLanguagesOpen && (
            <ul className="dropDowList">
              <li
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setSelectedLanguage("Сhoose a value");
                  setLanguageFromFilter(false);
                  setIsLanguagesOpen(false);
                }}
              >
                skip...
              </li>
              {uniqueLanguagesArray.map((el) => (
                <li
                  key={nanoid()}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    setSelectedLanguage(e.target.innerText);
                    setLanguageFromFilter(e.target.innerText);
                    setIsLanguagesOpen(false);
                  }}
                >
                  {el}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="filterBox">
        <p className="filterTitle">Level of knowledge</p>
        <div className="filterInputBox" style={{ minWidth: "198px" }}>
          {selectedLevels}
          <button
            name="level"
            type="button"
            className="openListBtn"
            onClick={() => handleOpenList("level")}
          >
            <BsChevronDown size={20} />
          </button>
          {isLevelOpen && (
            <ul className="dropDowList">
              <li
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setSelectedLevels("Сhoose a value");
                  setLevelFromFilter(false);
                  setIsLevelOpen(false);
                }}
              >
                skip...
              </li>
              {uniqueLevelsArray.map((el) => (
                <li
                  key={nanoid()}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    setSelectedLevels(e.target.innerText);
                    setLevelFromFilter(e.target.innerText);
                    setIsLevelOpen(false);
                  }}
                >
                  {el}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="filterBox">
        <p className="filterTitle">Price</p>
        <div className="filterInputBox" style={{ minWidth: "124px" }}>
          {selectedPrice} $
          <button
            name="price"
            type="button"
            className="openListBtn"
            onClick={() => handleOpenList("price")}
          >
            <BsChevronDown size={20} />
          </button>
          {isPriceOpen && (
            <ul className="dropDowList">
              <li
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setSelectedPrice("Сhoose a value");
                  setPriceFromFilter(false);
                  setIsPriceOpen(false);
                }}
              >
                skip...
              </li>
              {uniquePriceArray.map((el) => (
                <li
                  key={nanoid()}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    setSelectedPrice(e.target.innerText);
                    setPriceFromFilter(e.target.innerText);
                    setIsPriceOpen(false);
                  }}
                >
                  {el}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
