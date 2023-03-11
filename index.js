"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useValidate = void 0;

function useValidate(validateKeys, formData) {
  const formKeys = Object.keys(formData);
  let result = {};
  let logs = [];
  for (let i = 0; i < validateKeys.length; i++) {
    let validateField = validateKeys[i];
    const requiredField = validateKeys[i].includes("!");
    const requiredType = validateKeys[i].includes(":");
    // Validate Types
    if (requiredType) {
      const key = validateField.split(":")[0].replace(/[^a-zA-Z0-9 ]/g, "");
      const type = validateField.split(":")[1].toLowerCase();
      const form_type = formData[key];
      if (type !== typeof form_type) {
        logs.push(`Required Type: [${type}] ${key}`);
      }
      validateField = validateKeys[i].split(":")[0];
    }
    // Validate Require
    if (requiredField) {
      let key = validateField.split("!")[1];
      if (!formKeys.includes(key) || formData[key] === "") {
        logs.push(`Required Value: ${key}`);
      }
      validateField = key;
    }
    // Validate Matching Key Field
    if (!formKeys.includes(validateField)) {
      logs.push(`Required Field: ${validateField}`);
    } else {
      result[validateField] = formData[validateField];
    }
  }
  return logs.length > 0 ? [true, logs, null] : [false, null, result];
}
exports.useValidate = useValidate;
//# sourceMappingURL=index.js.map
