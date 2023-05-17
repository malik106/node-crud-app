const fs = require('fs/promises');

exports.readDataFromFile = async () => {
  const jsonData = await fs.readFile('items.json', 'utf8');
  return JSON.parse(jsonData);
};

exports.writeDataToFile = async (data) => {
  const jsonData = JSON.stringify(data, null, 2);
  await fs.writeFile('items.json', jsonData, 'utf8');
};
