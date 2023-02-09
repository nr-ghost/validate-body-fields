function validateFields(validateFields, formData) {
  const formKeys = Object.keys(formData);
  let logs = [];
  for (let i = 0; i < validateFields.length; i++) {
    let validateField = validateFields[i];
    const requiredField = validateFields[i].includes("!");
    const requiredType = validateFields[i].includes(":");

    // Validate Types
    if (requiredType) {
      const key = validateField.split(":")[0].replace(/[^a-zA-Z0-9 ]/g, "");
      const type = validateField.split(":")[1].toLowerCase();
      const form_type = formData[key];
      if (type !== typeof form_type) {
        logs.push(`Required Type: [${type}] ${key}`);
      }
      validateField = validateFields[i].split(":")[0];
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
    }
  }
  return logs.length > 0 ? [true, logs] : [false, null];
}

module.exports = { validateFields };
