import {
  check,
  validationResult
} from 'express-validator';

/**
 *Contains ListValidator
 *
 *
 *
 * @class ListValidator
 */
class ListValidator {
  /**
   * validate Add/Remove comment data.
   * @memberof ListValidator
   * @returns {null} - No response.
   */
  static validateAddList() {
    return [
      check('userId')
        .exists()
        .withMessage('User ID is required')
        .isMongoId()
        .withMessage('User ID should be a mongoID'),
      check('text')
        .exists()
        .withMessage('List is required')
        .not()
        .isEmpty()
        .withMessage('List must not be empty')
    ];
  }

  /**
  * validate Add/Remove comment data.
  * @memberof ListValidator
  * @returns {null} - No response.
  */
  static validateListUpdate() {
    return [
      check('text')
        .exists()
        .withMessage('Comment text is required')
        .not()
        .isEmpty()
        .withMessage('Comment text must not be empty')
    ];
  }

  
  /**
   * Validate user data.
   * @param {Request} req - Response object.
   * @param {Response} res - The payload.
   * @param {Response} next - The next parameter.
   * @memberof Login
   * @returns {JSON} - A JSON success response.
   */
   static async myValidationResult(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errArr = errors.array().map(({ msg }) => msg);
      return res.status(400).json({
        status: '400 Invalid Request',
        error: 'Your request contains invalid parameters',
        errors: errArr,
      });
    }
    return next();
  } 
}
export default ListValidator;