import "./App.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Homes from "./homes/homes";
import Rooms from "./rooms/rooms";
import Devices from "./rooms/devices/devices";
function App() {
  const { t, i18n } = useTranslation();
  const changeLang = (lang) => i18n.changeLanguage(lang);
  const langs = [
    { code: "es", text: "Español" },
    { code: "en", text: "English" },
  ];
  const [open, setOpen] = useState(false);

  const [home, setCurrHome] = useState();
  const [devices, setCurrDevices] = useState();

  return (
    <>
      <div className="nav">
        <h1>Smart Home</h1>
        <div className="lang-changer">
          <h3
            onClick={() => {
              setOpen(!open);
            }}
          >
            {t("main.changeLang")}
          </h3>

          {open && (
            <div className="langs-container">
              {langs.map((el) => {
                return (
                  <div
                    className="langs"
                    key={el.code}
                    onClick={() => {
                      changeLang(el.code);
                      setOpen(!open);
                    }}
                  >
                    {el.text} <b>({el.code.toUpperCase()})</b>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="container">
        <Homes setCurrHome={setCurrHome}></Homes>
        <div className="inferior">
          <Rooms home={home} setDevices={setCurrDevices}></Rooms>
          <Devices devices={devices}></Devices>
        </div>
      </div>
    </>
  );
}

export default App;
