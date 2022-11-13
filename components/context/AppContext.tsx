import { createContext, useState } from "react";

import { AppDataInterface, AppDataContext, defaultData } from "./context.type";

const AppContext = createContext<AppDataContext>([
  defaultData,
  () => null
]);

export const AppContextProvider = ({children}:any) => {

  const [appData, setAppData] = useState<AppDataInterface>(defaultData);

  return (
    <AppContext.Provider value={[appData!, setAppData]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
