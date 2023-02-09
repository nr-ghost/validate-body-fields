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

### Add "!" In Front Of Field Key For Required Value

```javascript
const fieldsValidate = ["!username", "!password", "email"];
const [isValid, logs] = validateFields(fieldsValidate, req.body);

// isValid: return Boolean
// logs: return Array
```

### Add ":[TYPES]" After Field Key For Validate Type

#### Types : number, string, boolean, object, undefined

```javascript
const fieldsValidate = ["!username:string", "password:string", "age:number"];
const [isValid, logs] = validateFields(fieldsValidate, req.body);

// isValid: return Boolean
// logs: return Array
```

## Contributing

Thanks you :).

## Donation

### Buy me a coffee

<img src="https://user-images.githubusercontent.com/79690698/217761482-40e56be0-40b6-44c6-a346-7cf09c88bfd5.png" width="200" height="230" />

###

Author by: Nero Sengtianthr.

## License

[MIT](https://choosealicense.com/licenses/mit/)
