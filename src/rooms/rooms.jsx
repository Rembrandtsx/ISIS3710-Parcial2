import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./rooms.scss";
const URL =
  "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
function Rooms({ setCurrRoom, home, setDevices }) {
  const { t, i18n } = useTranslation();
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((rooms) => setRooms(rooms));
  }, []);

  if (home) {
    return (
      /**
      * {
"name": "Living room",
"homeId": "H001",
"devices": [
{
"name": "temperature",
"desired": {
"value": "26",
"unit": "C"
},
"id": "T01"
},
{
"name": "light01",
"id": "L01",
"desired": {
"value": "off",
"unit": "boolean"
}
}
],
"type": "room",
"powerUsage": {
"unit": "KwH",
"value": 0.2
}
},
      */
      <div className="rooms-container">
        {rooms &&
          rooms.map((room) => {
            if (room.homeId === home.id) {
              return (
                <div
                  onClick={() => {
                    setDevices(room.devices);
                  }}
                  className="room"
                >
                  <h4>{room.name}</h4>
                  <img
                    src={`https://source.unsplash.com/random/200x200/?${room.name
                      .split(" ")
                      .join(",")}`}
                    alt=""
                  />
                </div>
              );
            }
          })}
      </div>
    );
  } else {
    return <div>{t("main.room")}</div>;
  }
}

export default Rooms;
