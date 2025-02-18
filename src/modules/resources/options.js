import { createRequires } from "@paciolan/remote-module-loader";
import React from "react";

export default {
  config: { requires: createRequires({ react: React }) },
  url: import.meta.env.remoteUrl,
};
