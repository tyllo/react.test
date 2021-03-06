/* global config */

const Storage = localStorage;
const prefix = '__react-app__';

export default { get, set, clear }

// getter
export function get(name, defaults) {
  try {
    return JSON.parse(Storage.getItem(prefix + name));
  } catch (e) {
    config.isDebug && console.log(e);
    return defaults;
  }
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
