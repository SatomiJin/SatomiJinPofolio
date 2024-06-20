import { createContext, useState } from "react";
import DefaultLayout from "./layout/DefaultLayout";
import IntroComponent from "./components/IntroComponent/IntroComponent";
import AboutMeComponent from "./components/AboutMeComponent/AboutMeComponent";
import Projects from "./components/ProjectComponent/Projects";
import ContactComponent from "./components/ContactComponent/ContactComponent";
export let themeContext = createContext();
function App() {
  let [theme, setTheme] = useState("light");
  // function
  const handleChangeTheme = (status) => {
    setTheme(status);
  };
  return (
    <div className="App">
      <themeContext.Provider value={{ theme, handleChangeTheme }}>
        <DefaultLayout>
          <IntroComponent />
          <AboutMeComponent />
          <Projects />
          <ContactComponent />
        </DefaultLayout>
      </themeContext.Provider>
    </div>
  );
}

export default App;
