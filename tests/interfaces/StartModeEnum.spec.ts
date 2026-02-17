import { StartModeEnum } from '../../src/interfaces/StartModeEnum';

describe('StartModeEnum', () => {
  it('should contain DEV', () => {
    expect(StartModeEnum.DEV).toBe('DEV');
  });

  it('should contain NATIVE', () => {
    expect(StartModeEnum.NATIVE).toBe('NATIVE');
  });

  it('should contain WATCH', () => {
    expect(StartModeEnum.WATCH).toBe('WATCH');
  });

  it('should contain exactly 3 values', () => {
    const values = Object.values(StartModeEnum);
    expect(values).toHaveLength(3);
  });
});
