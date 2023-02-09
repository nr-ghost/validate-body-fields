# Validate-Fields-Body

Validate-Fields-Body is a Javascript library for dealing with validation.

## Installation

```bash
npm i validate-fields-body
```

## Usage

```javascript
const validateFields = require("validate-fields-body");

const fieldsValidate = ["username", "email", "password"];
const [isValid, logs] = validateFields(fieldsValidate, req.body);

// isValid: return Boolean
// logs: return Array
```

## Contributing

Thanks you :).

###

Author by: Nero Sengtianthr.

## License

[MIT](https://choosealicense.com/licenses/mit/)
