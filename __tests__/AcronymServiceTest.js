import {data} from './../MockData/MockResponseData';
import {handleShortFormSearch} from './../src/service/acronyms';

describe('Search function', () => {
  test('it should return empty array', async () => {
    const input = 123;
    const output = [];

    expect(await handleShortFormSearch(input)).toEqual(output);
  });
  test('it should return expected array from the nested api search results', async () => {
    const input = 'EGG';
    const output = data;

    expect(await handleShortFormSearch(input)).toEqual(output);
  });
});
