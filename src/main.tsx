import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { persistor, store } from "./store/store";

import "./index.css";
import App from "./App";

/**
 * Функция для инициализации приложения.
 * @param rootId - ID элемента, в который будет рендериться приложение.
 */
export function loadSignIn(rootId: string) {
  const rootElement = document.getElementById(rootId);

  if (!rootElement) {
    console.error(`Элемент с id "${rootId}" не найден.`);
    return;
  }

  ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}

// Автоматическая инициализация в режиме разработки
if (import.meta.env.DEV) {
  loadSignIn("root");
}
