import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./homes.scss";
const URL =
  "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
function Homes({ setCurrHome }) {
  const { t, i18n } = useTranslation();
  const [homes, setHomes] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((homes) => setHomes(homes));
  }, []);
  /**
    * {
"name": "Casa Bogotá",
"address": "Calle 12 No. 7-25",
"phone": "3104916478",
"type": "house",
"isActive": true,
"id": "H001"
}
    */
  return (
    <>
      <h2 style={{ marginLeft: "3rem" }}>{t("homes.title")}</h2>
      <div className="home-container">
        {homes &&
          homes.map((home, i) => {
            return (
              <div
                key={i}
                onClick={() => setCurrHome(home)}
                className="home-item"
              >
                <div className="img">
                  <img
                    src={`https://source.unsplash.com/random/200x200/?${home.name
                      .split(" ")
                      .join(",")}`}
                    alt=""
                  />
                </div>
                <p>{home.name}</p>
                <p>{home.address}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Homes;
