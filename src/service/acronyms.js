const axios = require('axios');
const base_url = 'http://www.nactem.ac.uk/software/acromine/dictionary.py';

export const handleShortFormSearch = async (searchText) => {
  const url = base_url + '?sf=' + searchText;
  try {
    let payload = [];
    const res = await axios({
      method: 'get',
      url,
    });
    res.data.forEach((item) => {
      if (item.sf === searchText) {
        payload = item.lfs;
      }
    });
    return payload;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
