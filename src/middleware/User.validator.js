import * as expressValidator from "express-validator";

export default class UserValidator {
  static validate = () => {
    try {
      return [
        expressValidator.body("_id").optional().isMongoId(),
        expressValidator
          .body("fullName")
          .notEmpty()
          .isString()
          .withMessage("Please enter your full name"),
        expressValidator
          .body("email")
          .notEmpty()
          .isString()
          .trim()
          .isEmail()
          .normalizeEmail({
            all_lowercase: true,
          })
          .withMessage("An email address is required"),
        expressValidator
          .body("password")
          .notEmpty()
          .isString()
          .trim()
          .isStrongPassword({
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
          })
          .withMessage("A valid password should be provided"),
        UserValidator.handleValidationErrors,
      ];
    } catch (e) {
      throw new Error(e.message);
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
