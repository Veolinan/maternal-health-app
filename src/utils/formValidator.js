// src/utils/formValidator.js

/**
 * Validates email format.
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Validates password length (min 6).
 * @param {string} password
 * @returns {boolean}
 */
export function isStrongPassword(password) {
  return password.length >= 6;
}

/**
 * Checks if a field is not empty.
 * @param {string} value
 * @returns {boolean}
 */
export function isRequired(value) {
  return value.trim() !== '';
}

/**
 * Validates a form with provided rules.
 * @param {Object} fields - key-value pairs of field names and values
 * @param {Object} rules - key-value pairs of field names and validation functions
 * @returns {Object} errors - { fieldName: errorMessage }
 */
export function validateForm(fields, rules) {
  const errors = {};

  Object.entries(rules).forEach(([field, ruleSet]) => {
    ruleSet.forEach(rule => {
      if (rule === 'required' && !isRequired(fields[field])) {
        errors[field] = 'This field is required';
      }

      if (rule === 'email' && !isValidEmail(fields[field])) {
        errors[field] = 'Invalid email format';
      }

      if (rule === 'password' && !isStrongPassword(fields[field])) {
        errors[field] = 'Password must be at least 6 characters';
      }
    });
  });

  return errors;
}
