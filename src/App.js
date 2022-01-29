import Container from "./components/Container";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { AppProvider } from "./context/AppContext";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  return (
    <HelmetProvider>
      <Helmet>
        <body data-theme={theme} />
      </Helmet>
      <Provider store={store}>
        <Container />
      </Provider>
    </HelmetProvider>
  );
}

export default App;
