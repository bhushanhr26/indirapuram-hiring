import React from "react";
import data from "../assets/indirapuram.json";
import "./main.css";
import { Button } from "@mui/material";
import pic from "../assets/welcome.png";

export default function Main() {
  const [value, setValue] = React.useState(data);
  const ascending = (value) => {
    let x = [...value].sort((a, b) => b.deviceid - a.deviceid);
    setValue(x);
  };
  const descending = (value) => {
    let x = [...value].sort((a, b) => a.deviceid - b.deviceid);
    setValue(x);
  };
  return (
    <div>
      <div className="pot div1">
        <div className="btn">
          <img
            src={pic}
            alt=""
            style={{ width: "150px", borderRadius: "45px" }}
            className="c"
          />
        </div>
        <table style={{ width: "100%", border: "1px solid brown" }}>
          <tr>
            <th
              style={{
                border: "1px solid black",
                backgroundColor: "darksalmon",
              }}
            >
              deviceid
            </th>
            <th
              style={{
                border: "1px solid black",
                backgroundColor: "darksalmon",
              }}
            >
              latitude
            </th>
            <th
              style={{
                border: "1px solid black",
                backgroundColor: "darksalmon",
              }}
            >
              longitude
            </th>
            <th
              style={{
                border: "1px solid black",
                backgroundColor: "darksalmon",
              }}
            >
              temp1
            </th>
          </tr>

          {value.map((x, i) => {
            return (
              <tr key={i}>
                <td
                  style={{
                    border: "1px solid black",
                    backgroundColor: "#B673E2",
                  }}
                >
                  {x.deviceid}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    backgroundColor: "#F9F7FF",
                  }}
                >
                  {x.latitude}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    backgroundColor: "#F9F7FF",
                  }}
                >
                  {x.longitude}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    backgroundColor: "#F9F7FF",
                  }}
                >
                  {x.attributes.temp1}
                </td>
                {/* <td style={{ border: "1px solid black" }}></td> */}
              </tr>
            );
          })}
        </table>
      </div>
      <div className="btn">
        <div>
          <Button
            variant="contained"
            title="ascending"
            onClick={() => {
              ascending(value);
            }}
          >
            ascending
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            title="Descending"
            onClick={() => {
              descending(value);
            }}
          >
            descending
          </Button>
        </div>
      </div>
    </div>
  );
}
