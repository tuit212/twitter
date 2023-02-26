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
import NotFound from "./components/Common/404/NotFound";
import Tweets from "./components/Pages/Profile/Tweets/Tweets";
import TweetsReplis from "./components/Pages/Profile/TweetsReplis/TweetsReplis"
import Media from "./components/Pages/Profile/Media/Media"
import Like from "./components/Pages/Profile/Like/Like"
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/notification" element={<Notifications/>} />
        <Route path="/messages" element={<Messages/>} />
        <Route path="/bookmarks" element={<Bookmarks/>} />
        <Route path="/lists" element={<Lists/>} />
        <Route path="/profile" element={<Profile/>}>
          <Route path="/profile" element={<Tweets/>} />
          <Route path="/profile/tweets_replies" element={<TweetsReplis/>} />
          <Route path="/profile/media" element={<Media/>} />
          <Route path="/profile/like"  element={<Like/>} />
        </Route>
        <Route path="/more" element={<More/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
