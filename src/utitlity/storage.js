import ls from "localstorage-slim";

export const setItemToLocalStorage = (key, value) => {
  try {
    ls.set(key, value, { encrypt: true });
  } catch (e) {
    throw new Error(e);
  }
};

export const getItemFromLocalStorage = (key) => {
  try {
    return ls.get(key, { decrypt: true });
  } catch (e) {
    throw new Error(e);
  }
};
export const removeItemFromLocalStorage = (key) => {
  try {
    return ls.remove(key);
  } catch (e) {
    throw new Error(e);
  }
};
export const clearItemsFromLocalStorage = () => {
  try {
    return ls.clear();
  } catch (e) {
    throw new Error(e);
  }
};
