import { useState } from "react";

export default function TableElement({ element }) {
  const [clicked, setClicked] = useState(false);
  if (!clicked)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: 50,
        }}
        onClick={() => setClicked(true)}
      >
        <TableCell flex={1}>{element.url_source}</TableCell>
        <TableCell flex={1}>{element.func_source}</TableCell>
        <TableCell flex={1}>{element.type}</TableCell>
        <TableCell flex={1}>{element.warn_level}</TableCell>
        <TableCell flex={1}>{element.unix_date}</TableCell>
        <TableCell textAlign="left" flex={5}>
          {element.payload}
        </TableCell>
      </div>
    );
  else
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          paddingTop: 30,
          paddingBottom: 30,
          paddingLeft: 45,
          paddingRight: 45,
          width: "100%",
        }}
        onClick={() => setClicked(false)}
      >
        <div>
          <b>Source:</b> {element.url_source}
        </div>
        <div>
          <b>Function:</b> {element.func_source}
        </div>
        <div>
          <b>Type:</b> {element.type}
        </div>
        <div>
          <b>Level:</b> {element.warn_level}
        </div>
        <div>
          <b>Date:</b> {element.unix_date}
        </div>
        <div>
          <b>Full Log:</b> {element.payload}
        </div>
      </div>
    );
}

const TableCell = ({ flex, children, textAlign = "center" }) => {
  return (
    <div
      style={{
        paddingTop: 10,
        paddingBottom: 10,
        borderBottom: "1px solid black",
        textAlign,
        flex,
      }}
    >
      {children}
    </div>
  );
};
