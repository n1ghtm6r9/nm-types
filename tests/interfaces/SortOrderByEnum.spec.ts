import { SortOrderByEnum } from '../../src/interfaces/SortOrderByEnum';

describe('SortOrderByEnum', () => {
  it('should contain ASC', () => {
    expect(SortOrderByEnum.ASC).toBe('ASC');
  });

  it('should contain DESC', () => {
    expect(SortOrderByEnum.DESC).toBe('DESC');
  });

  it('should contain exactly 2 values', () => {
    const values = Object.values(SortOrderByEnum);
    expect(values).toHaveLength(2);
  });
});
