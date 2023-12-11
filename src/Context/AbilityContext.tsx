// import React, { createContext } from "react";
// import { Ability } from "@casl/ability";
// import { createContextualCan, useAbility as useCaslAvility } from "@casl/react";
// import ability from "./../Helper/Ability";

// export const AbilityContext = createContext(ability);
// export const Can = createContextualCan(AbilityContext.Consumer);

// export const useAbility = (): Ability => {
//   return useCaslAvility(AbilityContext);
// };

// export const AbilityProvier: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   return (
//     <AbilityContext.Provider value={ability}>
//       {children}
//     </AbilityContext.Provider>
//   );
// };
