function validateFields(validateFields, formData) {
  const formKeys = Object.keys(formData);
  let results = [];
  for (let i = 0; i < validateFields.length; i++) {
    if (!formKeys.includes(validateFields[i])) results.push(validateFields[i]);
  }
  return results.length > 0 ? [true, results] : [false, null];
}

module.exports = validateFields;
