const { describe, expect, it } = require('@jest/globals');
const { validateItemData } = require('../validators/item');

describe('validateItemData', () => {
  it('should call next() when data is valid', async () => {
    const req = {
      body: {
        title: 'Valid Title',
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    await validateItemData(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });

  it('should return validation error response when data is invalid', async () => {
    const req = {
      body: {
        title: '',
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    await validateItemData(req, res, next);

    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      errorType: 'VALIDATION_ERROR',
      errorMessage: '"title" is not allowed to be empty',
    });
  });
});
