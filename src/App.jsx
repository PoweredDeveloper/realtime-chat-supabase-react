import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppContextProvider, useAppContext } from "./context/appContext";

function App() {
  const { username, setUsername, routeHash } = useAppContext();

  if (routeHash) {
    if (routeHash.endsWith("&type=recovery")) {
      window.location.replace(`/login/${routeHash}`);
    }
    if (routeHash.startsWith("#error_code=404"))
      return (
        <div>
          <p>Ссылка вышла</p>
          <a href="/" style={{ cursor: "pointer" }} variant="link">
            Назад
          </a>
        </div>
      );
  }
  return (
    <ChakraProvider theme={theme}>
      <AppContextProvider>
        <Box bg="gray.100">
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <Chat />
                    <Footer />
                  </>
                }
              />
              <Route path="*" element={<p>Не найдено</p>} />
            </Routes>
          </Router>
        </Box>
      </AppContextProvider>
    </ChakraProvider>
  );
}

export default App;
