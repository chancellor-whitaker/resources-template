import { createRemoteModuleProvider } from "../createRemoteModuleProvider";
import { RemoteModuleContext as Context } from "./RemoteModuleContext";
import { config } from "../config";

export const RemoteModuleProvider = createRemoteModuleProvider({
  Context,
  config,
});
