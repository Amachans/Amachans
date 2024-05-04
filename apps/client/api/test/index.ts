import { mockMethods } from "aspida-mock";

export type Methods = {
  get: {
    status: number;
    resBody: string;
  };
};

export default mockMethods<Methods>({
  get: ({ query, reqHeaders, reqBody }) => ({
    status: 200,
    resBody: "mock test",
  }),
});
