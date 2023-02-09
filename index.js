function validateFields(validateFields, formData) {
  const formKeys = Object.keys(formData);
  let results = [];
  for (let i = 0; i < validateFields.length; i++) {
    let validateField = validateFields[i];
    const requiredField = validateFields[i].includes("!");

    // Validate Require
    if (requiredField) {
      let key = validateFields[i].split("!")[1];
      if (!formKeys.includes(key) || formData[key] === "") {
        results.push(`Require Value: ${validateFields[i].split("!")[1]}`);
      }
      validateField = validateFields[i].split("!")[1];
    }

    // Validate Matching Key Field
    if (!formKeys.includes(validateField)) {
      results.push(`Required Field: ${validateField}`);
    }
  }
  return results.length > 0 ? [true, results] : [false, null];
}

module.exports = validateFields;
