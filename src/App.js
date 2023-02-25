import Header from "./components/Header/Header";
import "./App.scss";
import { Routes , Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Explore from "./components/Pages/Explore/Explore";
import Notifications from "./components/Pages/Notifications/Notifications"
import Messages from "./components/Pages/Messages/Messages"
import Bookmarks from "./components/Pages/Bookmarks/Bookmarks"
import Lists from "./components/Pages/Lists/Lists"
import Profile from "./components/Pages/Profile/Profile"
import More from "./components/Pages/More/More"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/notification" element={<Notifications/>} />
        <Route path="/messages" element={<Messages/>} />
        <Route path="/bookmarks" element={<Bookmarks/>} />
        <Route path="/lists" element={<Lists/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/more" element={<More/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
