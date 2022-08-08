import GetPhotos from "./SendRequest/GetPhotos";
import Strapi from "./SendRequest/Strapi";
import "./App.scss";
import Dropdown from "./DropDown/Dropdown";
import MuiDropdown from "./MUI/MuiDropdown";
import Sidebar from "./DropDown/Sidebar";

function App() {
  return (
    <div className="App">
      {/* <Dropdown /> */}
      <Sidebar />
      <div className="main_container"> {/* <Strapi /> */}</div>
      <div className="main_side">
        <MuiDropdown />
      </div>
      {/* <GetPhotos /> */}
    </div>
  );
}

export default App;
