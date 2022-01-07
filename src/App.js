import Container from "./components/Container";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { AppProvider } from "./context/AppContext";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  return (
    <HelmetProvider>
      <Helmet>
        <body data-theme={theme} />
      </Helmet>
      <AppProvider
        value={{
          theme,
          setTheme,
        }}
      >
        <div
          style={{
            background: theme === "light" ? "#f4f4f5" : "#1c1c1c",
            transition: "background-color 0.2s ease",
          }}
        >
          <Container />
        </div>
      </AppProvider>
    </HelmetProvider>
  );
}

export default App;
