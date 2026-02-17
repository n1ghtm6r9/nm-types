import { GetOneResponseDto } from '../../src/dto/GetOneResponseDto';

describe('GetOneResponseDto', () => {
  it('should be abstract class with field item', () => {
    class TestResponse extends GetOneResponseDto<{ name: string }> {
      item? = { name: 'test' };
    }
    const instance = new TestResponse();
    expect(instance.item).toEqual({ name: 'test' });
  });

  it('item can be undefined', () => {
    class TestResponse extends GetOneResponseDto<{ name: string }> {
      item? = undefined;
    }
    const instance = new TestResponse();
    expect(instance.item).toBeUndefined();
  });
});
