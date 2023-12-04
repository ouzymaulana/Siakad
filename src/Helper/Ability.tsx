import { defineAbility } from "@casl/ability";

export default defineAbility((can, cannot) => {
  can("manage", "all");
  cannot("delete", "User");
});

// import { createContextualCan } from "@casl/react";
// import React from "react";

// export const AbilityContext = React.createContext();
// export const Can = createContextualCan(AbilityContext.Consumer);
