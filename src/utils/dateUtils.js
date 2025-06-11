// src/utils/dateUtils.js

/**
 * Formats a JavaScript Date object into 'YYYY-MM-DD' format.
 * @param {Date | string} date
 * @returns {string}
 */
export function formatDate(date) {
  const d = new Date(date);
  return d.toISOString().split('T')[0]; // 'YYYY-MM-DD'
}

/**
 * Returns a formatted full date string (e.g. "June 11, 2025").
 * @param {Date | string} date
 * @returns {string}
 */
export function formatFullDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Returns the time part of a Date (e.g. "14:35").
 * @param {Date | string} date
 * @returns {string}
 */
export function formatTime(date) {
  return new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Checks if a given date is today.
 * @param {Date | string} date
 * @returns {boolean}
 */
export function isToday(date) {
  const today = new Date();
  const d = new Date(date);
  return (
    today.getFullYear() === d.getFullYear() &&
    today.getMonth() === d.getMonth() &&
    today.getDate() === d.getDate()
  );
}
