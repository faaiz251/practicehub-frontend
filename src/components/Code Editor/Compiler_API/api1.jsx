import { LANGUAGE_VERSIONS } from "../../../constants";
import API from "../../../api";

export const executeCode = async (language, sourceCode) => {
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  });

  return response.data;
};
