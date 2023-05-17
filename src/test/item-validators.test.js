const {
  describe, expect, it, beforeEach,
} = require('@jest/globals');
const { mockRequest, mockResponse } = require('jest-mock-req-res');
const { validateItemData } = require('../validators/item');

describe('validateItemData', () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
    next = jest.fn();
  });

  it('valid user data should call next', async () => {
    req.body = {
      title: 'for test',
    };
    await validateItemData(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
