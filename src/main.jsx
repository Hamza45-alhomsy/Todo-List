import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"; // Fixed import
import App from "./App.jsx";
import { AuthProvider } from "./components/context/AuthProvider.jsx"; // Fixed import path
import store from "./redux/store/store.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </BrowserRouter>,
);
