export const Pick = <T, K extends keyof T>(obj: T, keys: K[]) =>
  keys
    .map(key => ({[key]: obj[key]}))
    .reduce((result, value) => ({...result, ...value}), {});

export const PickToArr = <T, K extends keyof T>(obj: T, keys: K[]) =>
  keys.map(key => obj[key]);
