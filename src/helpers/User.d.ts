export type DotNetJwtPayload = {
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": string;
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string;
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string[];
  exp: number;
  iss: string;
  aud: string;
};
/* dotnet claims names */

export type User = {
  id: string;
  name: string;
  roles: string[];
  iss: string;
  aud: string;
  exp: number;
};
