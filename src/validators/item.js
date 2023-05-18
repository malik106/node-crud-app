const joi = require('@hapi/joi');

exports.validateItemData = async (req, res, next) => {
  const packet = {
    ...req.body,
  };

  const itemValidator = joi.object({
    title: joi.string().min(1).max(100).required(),
  });

  try {
    const result = await itemValidator.validateAsync(packet);
    if (result) {
      next();
    }
  } catch (error) {
    return res.status(400).json({
      errorType: 'VALIDATION_ERROR',
      errorMessage: error.details[0].message,
    });
  }
};
