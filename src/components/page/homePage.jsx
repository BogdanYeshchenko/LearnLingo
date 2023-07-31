import "./homePage.css";
import ConteinerCenter from "../conteiner/ConteinerCenter";
import Conteiner from "../conteiner/Conteiner";

const HomePage = () => {
  return (
    <Conteiner>
      <ConteinerCenter>
        <div className="homeMeinBox">
          <p>Home Page</p>
          <p>go to</p>
          <p style={{ fontSize: "60px" }}>Tweets Cards</p>
        </div>
      </ConteinerCenter>
    </Conteiner>
  );
};

export default HomePage;
