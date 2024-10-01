import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { persistor, store } from "./store/store";

import "./index.css";
import App from "./App";

window.loadSignIn = (rootId: string) => {
  ReactDOM.createRoot(document.getElementById(rootId) as HTMLElement).render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

if (process.env.NODE_ENV !== "production") {
  window.loadSignIn("root");
}
