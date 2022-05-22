import { Route, Routes, useLocation } from "react-router";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";
import {AnimatePresence} from 'framer-motion';
// Components
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import Main from "./components/Main";
import MySkillsPage from "./components/MySkillsPage";
import WorkPage from "./components/WorkPage";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        {/* For framer-motion animation on page change!*/}
        <AnimatePresence exitBeforeEnter >
          <Routes location={location} key={location.pathname} >
            <Route exact path="/" element={<Main />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/blog" element={<BlogPage />} />
            <Route exact path="/work" element={<WorkPage />} />
            <Route exact path="/skills" element={<MySkillsPage />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
