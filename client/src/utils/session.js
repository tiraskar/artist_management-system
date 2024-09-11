
const getValue = (key) => {
  const value = localStorage.getItem(key);
  return value;
};

const setValue = (key, value) => {
  localStorage.setItem(key, value);
};

const clearItem = (key) => {
  localStorage.removeItem(key);
};

const session = {
  getValue,
  setValue,
  clearItem
};

export default session;