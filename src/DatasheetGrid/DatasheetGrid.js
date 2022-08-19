import React, { useState } from "react";
import {
  DataSheetGrid,
  checkboxColumn,
  textColumn,
  keyColumn,
  createTextColumn,
} from "react-datasheet-grid";
import MyCell from "./MyCell";

const DatasheetGrid = () => {
  const [data, setData] = useState([
    { active: true, firstName: "Elon", lastName: "Musk" },
    { active: false, firstName: "Jeff", lastName: "Bezos" },
    { active: false },
  ]);
  const columns = [
    {
      ...keyColumn("active", checkboxColumn),
      title: "Active",
      alignRight: true,
    },
    {
      ...keyColumn("firstName", textColumn),
      title: "First name",
      alignRight: false,
    },
    { ...keyColumn("lastName", textColumn), title: "Last name" },
    {
      ...keyColumn(
        "customText",
        createTextColumn({
          placeholder: "Game",
          continuousUpdates: false,
          alignRight: true,
          // deletedValue: () => null,
          pasteValue: ({ value }) => value + "Test",
        })
      ),
      title: "Custome Text",
    },
  ];

  const changeHandler = (e) => {
    console.log(e);
    setData(e);
  };

  return (
    <div>
      <h1>
        <DataSheetGrid
          value={data}
          onChange={(e) => changeHandler(e)}
          columns={[...columns, { component: MyCell, title: "MyCeLl" }]}
        />
      </h1>
    </div>
  );
};

export default DatasheetGrid;
