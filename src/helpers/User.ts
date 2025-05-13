import { DotNetJwtPayload, User } from "../helpers/User.d";

export const CreateUser = (dotnetUser: DotNetJwtPayload): User => {
  return {
    id: dotnetUser[
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
    ],
    name: dotnetUser[
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
    ],
    roles:
      dotnetUser[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
      ],
    iss: dotnetUser.iss,
    aud: dotnetUser.aud,
    exp: dotnetUser.exp,
  };
};
