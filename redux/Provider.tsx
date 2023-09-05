"use client";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

//persistGate is used to persist the data in the local storage and to prevent the data loss on page refresh and avoid hydration error
export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
