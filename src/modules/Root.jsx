import App from "../App";
import useResources from "./resources/assets/useModule";

export const Root = () => {
  const resources = useResources();

  return <App {...resources}></App>;
};
