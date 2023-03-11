# Validate-Fields-Body

Validate-Fields-Body is a Javascript library for dealing with validation.

## Installation

```bash
npm i validate-fields-body
```

## Validate Fields Body

### Example

```javascript
const { useValidate } = require("validate-fields-body");

const register = (req, res) => {
  // Set your fields to validate
  const fieldsValidate = ["username", "email", "password", "age", "skills"];

  const [isValid, logs, result] = useValidate(fieldsValidate, req.body);

  if (isValid) return res.status(403).json({ success: false, message: logs });

  return res.status(201).send({ success: true, data: result });
};
```

### Require Value

```javascript
const fieldsValidate = ["!username", "!email", "!password", "!age", "skills"];
```

### Check Types

```javascript
const fieldsValidate = [
  "!username:string",
  "!email:string",
  "!password:string",
  "!age:number",
  "skills:object",
];
```

## Options

| Option  | Keyword        |
| ------- | -------------- |
| !       | Required Value |
| :[TYPE] | Check Type     |

## Contributing

Thanks you :).

## Donation

### Buy me a coffee

<img src="https://user-images.githubusercontent.com/79690698/217761482-40e56be0-40b6-44c6-a346-7cf09c88bfd5.png" width="200" height="230" />

###

Author by: Nero Sengtianthr.

## License

[MIT](https://choosealicense.com/licenses/mit/)
