function useValidate(
  validateKeys: Array<string>,
  formData: object
): (boolean | object | null)[] {
  const formKeys: Array<string> = Object.keys(formData);
  let result: object = {};
  let logs: Array<string> = [];
  for (let i: number = 0; i < validateKeys.length; i++) {
    let validateField: string = validateKeys[i];
    const requiredField: boolean = validateKeys[i].includes("!");
    const requiredType: boolean = validateKeys[i].includes(":");

    // Validate Types
    if (requiredType) {
      const key: string = validateField
        .split(":")[0]
        .replace(/[^a-zA-Z0-9 ]/g, "");
      const type: string = validateField.split(":")[1].toLowerCase();
      const form_type: any = formData[key];
      if (type !== typeof form_type) {
        logs.push(`Required Type: [${type}] ${key}`);
      }
      validateField = validateKeys[i].split(":")[0];
    }

    // Validate Require
    if (requiredField) {
      let key: string = validateField.split("!")[1];
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

export { useValidate };
