import { getAllFieldMetadata } from '../../__mocks__/@nmxjs/validation';
import { UpdateRequestDto } from '../../src/dto/UpdateRequestDto';

describe('UpdateRequestDto', () => {
  beforeAll(() => {
    new (UpdateRequestDto as any)();
  });

  it('id should have type String', () => {
    const meta = getAllFieldMetadata('UpdateRequestDto');
    expect(meta?.get('id')).toEqual({ type: String });
  });

  it('should support abstract field payload', () => {
    class TestUpdate extends UpdateRequestDto<{ name: string }> {
      payload = { name: 'test' };
    }
    const instance = new TestUpdate();
    expect(instance.payload).toEqual({ name: 'test' });
  });
});
