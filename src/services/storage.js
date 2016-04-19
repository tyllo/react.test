const Storage = localStorage;
const prefix = '__react-app__';

/* global config */

export default { get, set, clear }

// getter
export function get(name, defaults = null) {
  var data;

  try {
    data = JSON.parse(Storage.getItem(prefix + name));
  } catch (e) {
    config.isDebug && console.log(e);
    data = null;
  }

  if (!data) {
    data = Object.assign({}, defaults);
    data && set(prefix + name, defaults);
  }

  return data;
}

// setter
export function set(name, payload) {
  Storage.setItem(prefix + name, JSON.stringify(payload));
}

// clear all storage
export function clear() {
  // TODO: clean only with prefix
  Storage.clear();
}
