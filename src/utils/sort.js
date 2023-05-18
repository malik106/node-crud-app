const { DESC } = require('../constants/common');

exports.sortData = (data, sort) => {
  if (sort === DESC) {
    return data.sort((a, b) => {
      if (a.title < b.title) {
        return 1;
      }
      if (b.title < a.title) {
        return -1;
      }
      return 0;
    });
  }

  return data.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    if (b.title > a.title) {
      return -1;
    }
    return 0;
  });
};
