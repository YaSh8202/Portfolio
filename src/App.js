import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";

// Components
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import Main from "./components/Main";
import MySkillsPage from "./components/MySkillsPage";
import WorkPage from "./components/WorkPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/blog" element={<BlogPage />} />
          <Route exact path="/work" element={<WorkPage />} />
          <Route exact path="/skills" element={<MySkillsPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
