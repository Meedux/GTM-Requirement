import { CognitoUserPool, ICognitoUserPoolData } from "amazon-cognito-identity-js";

const poolData: ICognitoUserPoolData = {
  UserPoolId: "ap-southeast-2_JnVMlWbf7",
  ClientId: "1rml84ttmmj7csqkg17edusil6",
};

export const userPool = new CognitoUserPool(poolData);