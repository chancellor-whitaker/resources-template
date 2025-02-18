import { Context } from "./Context";

import options from "../options";
import { createModuleProvider } from "../../createModuleProvider";

const Provider = createModuleProvider({ Context, ...options });

export default Provider;
