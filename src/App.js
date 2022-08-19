import GetPhotos from "./SendRequest/GetPhotos";
import Strapi from "./SendRequest/Strapi";
import "./App.scss";
import Dropdown from "./DropDown/Dropdown";
import MuiDropdown from "./MUI/MuiDropdown";
import Sidebar from "./DropDown/Sidebar";
import DatasheetGrid from "./DatasheetGrid/DatasheetGrid";
import "react-datasheet-grid/dist/style.css";

function App() {
  return (
    <div className="App">
      {/* <Dropdown /> */}
      {/* <Sidebar />
      <div className="main_container"></div> */}
      {/* <div className="main_side"> */}
      {/* <MuiDropdown /> */}
      {/* </div> */}
      <DatasheetGrid />
      {/* <GetPhotos /> */}
    </div>
  );
}

export default App;
