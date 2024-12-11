import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/mainPageComponents/MainPage";
import { MainPageDataProvider } from "./components/mainPageComponents/MainPageDataProvider";
import { TempletCollectionProvider } from "./components/mainPageComponents/TempletCollectionsProvider";
import Blue from "./components/portfolioComponents/blueComponents/BlueMainPage";
import Pink from "./components/portfolioComponents/pinkComponents/PinkMainPage";
import Purple from "./components/portfolioComponents/purpleComponents/PurpleMainPage";
import Yellow from "./components/portfolioComponents/yellowComponents/YellowMainPage";
import Green from "./components/portfolioComponents/greenComponents/GreenMainPage";
import DarkBlue from "./components/portfolioComponents/blueDarkComponents/BlueDarkMainPage";
import DarkYellow from "./components/portfolioComponents/yellowDarkComponents/YellowDarkMainPage";
import DarkGreen from "./components/portfolioComponents/greenDarkComponents/GreenDarkMainPage";
import DarkPink from "./components/portfolioComponents/pinkDarkComponents/pinkDarkMainPage";
import DarkWhite from "./components/portfolioComponents/whiteDarkComponents/WhiteDarkMainPage";
import PortfolioPreviewSection from "./components/mainPageComponents/PortfolioPreviewSection";
import MainFormComponent from "./components/mainPageComponents/formComponents/MainFormComponent";

function App() {
  return (
    <>
      <MainPageDataProvider>
        <TempletCollectionProvider>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/preview/:id" element={<PortfolioPreviewSection />} />
            <Route path="/form" element={<MainFormComponent />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/blue/:id" element={<Blue />} />
            <Route path="/pink/:id" element={<Pink />} />
            <Route path="/yellow/:id" element={<Yellow />} />
            <Route path="/purple/:id" element={<Purple />} />
            <Route path="/green/:id" element={<Green />} />
            <Route path="/blueDark/:id" element={<DarkBlue />} />
            <Route path="/whiteDark/:id" element={<DarkWhite />} />
            <Route path="/yellowDark/:id" element={<DarkYellow />} />
            <Route path="/greenDark/:id" element={<DarkGreen />} />
            <Route path="/pinkDark/:id" element={<DarkPink />} />
          </Routes>
        </TempletCollectionProvider>
      </MainPageDataProvider>
    </>
  );
}

export default App;
