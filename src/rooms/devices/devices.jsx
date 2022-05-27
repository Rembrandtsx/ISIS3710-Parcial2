import React from "react";
import { useTranslation } from "react-i18next";
import "./devices.scss";
function Devices({ devices }) {
  const { t, i18n } = useTranslation();
  if (devices) {
    return (
      <table>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>{t("devices.device")}</th>
          <th>{t("devices.value")}</th>
        </tr>
        {devices &&
          /**
         * {
"name": "temperature",
"desired": {
"value": "26",
"unit": "C"
},
"id": "T01"
},
         */
          devices.map((device, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{device.id}</td>
                <td>{device.name}</td>
                <td>{device.desired.value ? device.desired.value : "---"}</td>
              </tr>
            );
          })}
      </table>
    );
  } else {
    return <div className="container-devices">{t("main.device")}</div>;
  }
}

export default Devices;
