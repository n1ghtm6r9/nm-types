import { FilterOperatorEnum } from '../../src/interfaces/FilterOperatorEnum';

describe('FilterOperatorEnum', () => {
  it('should contain EQ', () => {
    expect(FilterOperatorEnum.EQ).toBe('EQ');
  });

  it('should contain IN', () => {
    expect(FilterOperatorEnum.IN).toBe('IN');
  });

  it('should contain SEARCH', () => {
    expect(FilterOperatorEnum.SEARCH).toBe('SEARCH');
  });

  it('should contain LESS', () => {
    expect(FilterOperatorEnum.LESS).toBe('LESS');
  });

  it('should contain LESS_OR_EQ', () => {
    expect(FilterOperatorEnum.LESS_OR_EQ).toBe('LESS_OR_EQ');
  });

  it('should contain MORE', () => {
    expect(FilterOperatorEnum.MORE).toBe('MORE');
  });

  it('should contain MORE_OR_EQ', () => {
    expect(FilterOperatorEnum.MORE_OR_EQ).toBe('MORE_OR_EQ');
  });

  it('should contain exactly 7 values', () => {
    const values = Object.values(FilterOperatorEnum);
    expect(values).toHaveLength(7);
  });
});
