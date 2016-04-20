import 'es6-promise';
import 'fetch-polyfill';
import Storage from 'services/storage';
import fetchBanks from './fetch-banks';

const URL = {
  LOGIN:  config.assets.path + '/ok.json',
  SIGNUP: config.assets.path + '/ok.json',
  LOGOUT: config.assets.path + '/ok.json',
};

export default {
  login,
  signup,
  logout,
  getBanks: fetchBanks,
};

export function login(payload) {
  const config = {
    method: 'POST',
    body: payload,
  };

  return fetch(URL.LOGIN, config).then(() => {
    // try get user from Storage if auth
    var user = Storage.get('user', {});

    if (user.username !== payload.username) {
      throw new Error('User not found');
    }

    if (user.password !== payload.password) {
      throw new Error('Bad credentials');
    }

    return user;
  })
}

export function signup(payload) {
  const config = {
    method: 'POST',
    body: payload,
  };

  return fetch(URL.SIGNUP, config).then(() => {
    // try get user from Storage if auth
    var user = Storage.get('user', {});

    if (user.username === payload.username) {
      throw new Error('User exist');
    }

    return user;
  })
}

export function logout(payload) {
  const config = {
    method: 'POST',
    body: payload,
  };

  return fetch(URL.LOGOUT, config).then(() => {
    return true;
  })
}
