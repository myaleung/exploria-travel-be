import * as expressValidator from "express-validator";

export default class UserValidator {
  static validate = () => {
    try {
      return [
        expressValidator.body("_id").optional().isMongoId(),
        expressValidator
          .body("email")
          .notEmpty()
          .isString()
          .withMessage("An email address is required"),
        expressValidator
          .body("password")
          .notEmpty()
          .isString()
          .withMessage("A valid password should be provided"),
        UserValidator.handleValidationErrors,
      ];
    } catch (e) {
      console.log(e);
      return [];
    }
  };

  static handleValidationErrors = (req, res, next) => {
    const errors = expressValidator.validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  };
}