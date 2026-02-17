import { EnvironmentEnum } from '../../src/interfaces/EnvironmentEnum';

describe('EnvironmentEnum', () => {
  it('should contain DEVELOPMENT', () => {
    expect(EnvironmentEnum.DEVELOPMENT).toBe('development');
  });

  it('should contain PRODUCTION', () => {
    expect(EnvironmentEnum.PRODUCTION).toBe('production');
  });

  it('should contain TEST', () => {
    expect(EnvironmentEnum.TEST).toBe('test');
  });

  it('should contain exactly 3 values', () => {
    const values = Object.values(EnvironmentEnum);
    expect(values).toHaveLength(3);
  });
});
