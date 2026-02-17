import { ProxyTypeEnum } from '../../src/interfaces/ProxyTypeEnum';

describe('ProxyTypeEnum', () => {
  it('should contain HTTP', () => {
    expect(ProxyTypeEnum.HTTP).toBe('HTTP');
  });

  it('should contain HTTPS', () => {
    expect(ProxyTypeEnum.HTTPS).toBe('HTTPS');
  });

  it('should contain SOCKS4', () => {
    expect(ProxyTypeEnum.SOCKS4).toBe('SOCKS4');
  });

  it('should contain SOCKS5', () => {
    expect(ProxyTypeEnum.SOCKS5).toBe('SOCKS5');
  });

  it('should contain exactly 4 values', () => {
    const values = Object.values(ProxyTypeEnum);
    expect(values).toHaveLength(4);
  });
});
