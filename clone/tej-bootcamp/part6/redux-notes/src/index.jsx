import { createRoot } from "react-dom/client";
import App from "./CounterApp";
// import { Provider } from "react-redux";
// import store from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CounterContextProvider } from "./CounterContext";

const container = document.getElementById("root");
const root = createRoot(container);

const queryClient = new QueryClient();

root.render(
  <CounterContextProvider>
    <App />
  </CounterContextProvider>
);
