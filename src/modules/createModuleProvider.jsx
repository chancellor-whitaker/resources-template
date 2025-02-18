import createLoadRemoteModule from "@paciolan/remote-module-loader";
import { useEffect, useState } from "react";

export const createModuleProvider = ({ Context, config, url }) => {
  const loadModule = createLoadRemoteModule(config);

  const pendingModule = loadModule(url);

  const ModuleProvider = ({ children }) => {
    const module = usePromise(pendingModule);

    const defaultExport = module && module.default;

    return (
      <Context.Provider value={defaultExport}>
        {defaultExport && children}
      </Context.Provider>
    );
  };

  return ModuleProvider;
};

const usePromise = (promise) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    if (promise) {
      let ignore = false;

      promise.then((response) => !ignore && setState(response));

      return () => {
        ignore = true;
      };
    }
  }, [promise]);

  return state;
};
