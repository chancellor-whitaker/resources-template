import { useContext } from "react";

import { Context } from "./Context";

const useModule = () => useContext(Context);

export default useModule;
