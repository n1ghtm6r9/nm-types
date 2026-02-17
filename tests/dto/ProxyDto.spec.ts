import { getAllFieldMetadata } from '../../__mocks__/@nmxjs/validation';
import { ProxyTypeEnum } from '../../src/interfaces';
import { ProxyDto } from '../../src/dto/ProxyDto';

describe('ProxyDto', () => {
  beforeAll(() => {
    new ProxyDto();
  });

  it('ip should have type String', () => {
    const meta = getAllFieldMetadata('ProxyDto');
    expect(meta?.get('ip')).toEqual({ type: String });
  });

  it('port should have type Number', () => {
    const meta = getAllFieldMetadata('ProxyDto');
    expect(meta?.get('port')).toEqual({ type: Number });
  });

  it('type should be enum ProxyTypeEnum', () => {
    const meta = getAllFieldMetadata('ProxyDto');
    expect(meta?.get('type')).toEqual({
      type: { ProxyTypeEnum },
      enum: true,
    });
  });

  it('username should be nullable String', () => {
    const meta = getAllFieldMetadata('ProxyDto');
    expect(meta?.get('username')).toEqual({
      type: String,
      nullable: true,
    });
  });

  it('password should be nullable String', () => {
    const meta = getAllFieldMetadata('ProxyDto');
    expect(meta?.get('password')).toEqual({
      type: String,
      nullable: true,
    });
  });
});
