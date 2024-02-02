import axios$1 from 'axios';

const axios = axios$1.create({
  baseURL: "https://api-buildwithus.ai-softdev.com/"
  // baseURL: 'http://192.168.100.5:8000/',
  // baseURL: 'http://127.0.0.1:8000/'
});

const __isNotNull = (variable) => {
  if (typeof variable !== 'undefined' && variable !== null) {
    return true
  }
  return false
};

const __getData = (storage, key) => {
  try {
    const ls = storage;
    const cache = ls.getItem(key);
    if (__isNotNull(cache)) {
      const cacheParsed = JSON.parse(cache);
      if (__isNotNull(cacheParsed)) {
        // check cache expiry time
        const timeNow = new Date().getTime();
        const dateCache = cacheParsed.created;
        let milisMultiplier = (1000 * 60); // default is in minutes unit

        if (cacheParsed.unit && cacheParsed.unit === 's') { // in second unit
          milisMultiplier = (1000);
        } else if (cacheParsed.unit && cacheParsed.unit === 'm') { // in minute unit
          milisMultiplier = (1000 * 60);
        } else if (cacheParsed.unit && cacheParsed.unit === 'h') { // in hour unit
          milisMultiplier = (1000 * 60 * 60);
        } else if (cacheParsed.unit && cacheParsed.unit === 'd') { // in day unit
          milisMultiplier = (1000 * 60 * 60 * 24);
        }

        const expiryInMilis = parseInt(cacheParsed.expiry, 10) * milisMultiplier;
        const expiryTime = parseInt(dateCache, 10) + expiryInMilis;

        if (expiryTime > timeNow) {
          return cacheParsed.value
        } else {
          // remove if cache expired to get bigger space
          // ls.removeItem(key)
          console.warn('storage is expired');
        }
      }
    }
  } catch (e) {
    console.warn('failed parse JSON');
  }

  return null
};

const __setData = (storage, key, value = '', expiryInMinutes = 5, expiryUnit = 'm') => {
  try {
    const ls = storage;
    const data = {
      created: new Date().getTime(),
      value,
      expiry: expiryInMinutes,
      unit: expiryUnit
    };
    ls.setItem(key, JSON.stringify(data));
    return data
  } catch (e) {}
  return null
};

const __removeItem = (storage, key) => {
  try {
    storage.removeItem(key);
  } catch (e) {}
};

const __clear = (storage) => {
  try {
    storage.clear();
  } catch (e) {}
};

function getStorage$1 () {
  return 'localStorage' in window && window.localStorage
    ? window.localStorage
    : null
}

const getData$1 = key => {
  try {
    const ls = getStorage$1();
    return __getData(ls, key)
  } catch (e) {}

  return null
};

const setData$1 = (key, value = '', expiryInMinutes = 5, expiryUnit = 'm') => {
  try {
    const ls = getStorage$1();
    return __setData(ls, key, value, expiryInMinutes, expiryUnit)
  } catch (e) {}
  return null
};

const removeItem$1 = key => {
  try {
    const ls = getStorage$1();
    __removeItem(ls, key);
  } catch (e) {}
};

const clear$1 = () => {
  try {
    const ls = getStorage$1();
    __clear(ls);
  } catch (e) {}
};

function getStorage () {
  return 'sessionStorage' in window && window.sessionStorage
    ? window.sessionStorage
    : null
}

const getData = key => {

  return null
};

const setData = (key, value = '', expiryInMinutes = 5, expiryUnit = 'm') => {
  return null
};

const removeItem = key => {
  try {
    const ls = getStorage();
    __removeItem(ls, key);
  } catch (e) {}
};

const clear = () => {
  try {
    const ls = getStorage();
    __clear(ls);
  } catch (e) {}
};

const nuxtStorage = {
  localStorage: {
    getData: getData$1,
    setData: setData$1,
    removeItem: removeItem$1,
    clear: clear$1
  },
  sessionStorage: {
    getData: getData,
    setData: setData,
    removeItem: removeItem,
    clear: clear
  }
};

export { axios as a, nuxtStorage as n };
//# sourceMappingURL=nuxt-storage.mjs.map
