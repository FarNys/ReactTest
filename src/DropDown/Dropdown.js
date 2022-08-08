import React, { useRef, useState } from "react";

const Dropdown = () => {
  return (
    <div className="dropdown_container">
      <h1>DropDown</h1>
      <div className="dropdown_box">
        <DropdownItem
          title="Drop-1"
          list={["item-1", "item-1", "item-1", "item-1", "item-1", "item-1"]}
        />
        <DropdownItem title="Drop-2" list={["item-1"]} />
        <div className="dropdown_item">
          <h5>Drop-2</h5>
          <ul className="dropdown_ul">
            <li>List 21</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

const DropdownItem = ({ title, list }) => {
  const getItem = useRef(null);
  const ulRef = useRef(null);
  const openHandler = () => {
    setopen(!open);
    if (!open) {
      ulRef.current.style.maxHeight = `${list.length * 25}px`;
    } else {
      ulRef.current.style.maxHeight = "0px";
    }
  };
  const [open, setopen] = useState(false);
  return (
    <div
      ref={getItem}
      className={open ? "dropdown_item_active" : "dropdown_item"}
      //   className="dropdown_item"
    >
      <h5 onClick={openHandler}>Drop-1</h5>
      <ul className="dropdown_ul" ref={ulRef}>
        {list.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  );
};
