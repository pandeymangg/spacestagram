import Container from "./components/Container";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  return (
    <HelmetProvider>
      <Helmet>
        <body data-theme={theme} />
      </Helmet>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Container />
        </PersistGate>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
