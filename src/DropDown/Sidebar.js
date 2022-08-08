import React, { useState } from "react";

const Sidebar = () => {
  const [selectedNav, setselectedNav] = useState(null);
  const items = [
    {
      title: "Navside-1",
      items: ["item-6", "item-2"],
    },
    {
      title: "Naving-2",
      items: ["item-3", "item-2", "item-3", "item-4"],
    },
    {
      title: "Navbar-3",
      items: ["item-11"],
    },
  ];

  const selectItem = (index) => {
    console.log(index);
    if (selectedNav == index) {
      return setselectedNav(null);
    }
    setselectedNav(index);
  };
  console.log(selectedNav);
  return (
    <div className="sidebar_container">
      <h1>Dashboard</h1>
      <div className="sidebar_box">
        {items.map((el, index) => (
          <div
            key={`${el.title}-${index}`}
            className="sidebar_single_item"
            onClick={() => selectItem(index)}
          >
            <p>{el.title}</p>
            <div className={selectedNav == index ? "content open" : "content"}>
              {el?.items.length > 0 &&
                el.items.map((item, id) => (
                  <li key={`${item}-${id}`}>{item}</li>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
