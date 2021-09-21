export const notVerySecure = (str: string) => {
  return !!(str.length && !str.match(/[^a-zA-Z0-9]/));
};
