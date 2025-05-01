var TimeLimitedCache = function () {
  this.cache = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const expireTime = Date.now() + duration;

  const isAccessible =
    key in this.cache && this.cache[key].duration > Date.now();

  this.cache[key] = {
    value: value,
    duration: expireTime,
  };
  return isAccessible;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  const current = this.cache[key];
  if (current && current.duration > Date.now()) {
    return current.value;
  }
  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  let count = 0;
  let now = Date.now();

  for (let key in this.cache) {
    if (this.cache[key].duration > now) {
      count += 1;
    }
  }
  return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
