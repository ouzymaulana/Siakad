export const login = async (role: string) => {
  switch (role) {
    case "admin":
      return [
        {
          action: ["read", "update", "create", "delete"],
          subject: "Admin",
          fields: ["name", "address", "creditCard"],
        },
      ];
    default:
      return [
        {
          action: ["read", "update"],
          subject: "User",
          fields: ["name", "address"],
        },
      ];
  }
};
