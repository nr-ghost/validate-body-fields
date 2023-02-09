# Validate Body Fields

Validate-Body-Fields is a Javascript library for dealing with validation.

## Installation

```bash
npm i validate-body-fields
```

## Usage

```javascript
const validateFields = require("validate-body-fields");

const fieldsValidate = ["username", "email", "password"];
const [isValid, logs] = validateFields(fieldsValidate, req.body);

// isValid: return Boolean
// logs: return Array
```

## Contributing

Thanks you :).
Author by: Nero Sengtianthr.

## License

[MIT](https://choosealicense.com/licenses/mit/)
