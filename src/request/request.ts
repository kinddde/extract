import fetch from "node-fetch";

const defaults = {};

export default (url: string, options: object): any => {
  return fetch(url, {
    ...defaults,
    ...options
  });
};
