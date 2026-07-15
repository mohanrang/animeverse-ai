import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Search from "../pages/Search";
import AnimeDetails from "../pages/AnimeDetails";
import Library from "../pages/Library";
import News from "../pages/News";
import Calendar from "../pages/Calendar";
import AIAssistant from "../pages/AIAssistant";
import Statistics from "../pages/Statistics";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/anime/:id" element={<AnimeDetails />} />
          <Route path="/library" element={<Library />} />
          <Route path="/news" element={<News />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/ai" element={<AIAssistant />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}