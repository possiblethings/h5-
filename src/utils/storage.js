class CacheStorage {
  constructor(isLocal) {
    this.storage = isLocal ? localStorage : sessionStorage;
  }

  /**
   * @param {String} key 缓存名称
   * @param value 缓存值
   */
  setItem(key, value) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value));
    }
  }

  /**
   * @param {String} key 缓存名称
   * @returns 缓存值
   */
  getItem(key) {
    let value = this.storage.getItem(key);
    if (value) {
      value = JSON.parse(value);
      return value;
    }
    return null;
  }

  /**
   * @param {String} key 移除缓存目标
   */
  removeItem(key) {
    this.storage.removeItem(key);
  }

  /**
   * 清空全部缓存
   */
  clear() {
    this.storage.clear();
  }
}

const localCache = new CacheStorage(true);
const sessionCache = new CacheStorage(false);

/**
 * 清空多个指定缓存数据
 * @param {String[]} names
 */
export function clearLocalCacheList(names) {
  for (const name of names) {
    localCache.removeItem(name);
  }
}

/**
 * 清空多个指定缓存数据
 * @param {String[]} names
 */
export function clearSessionCacheList(names) {
  for (const name of names) {
    sessionCache.removeItem(name);
  }
}

export { localCache, sessionCache };
