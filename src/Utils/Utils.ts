export function removeHashFromKeys(obj: { [key: string]: any }): {
  [key: string]: any;
} {
  const newObj: { [key: string]: any } = {};
  for (let key in obj) {
    const newKey = key.replace("#", "");
    newObj[newKey] = obj[key];
  }
  return newObj;
}
