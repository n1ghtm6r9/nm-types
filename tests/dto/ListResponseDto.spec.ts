import { getAllFieldMetadata } from '../../__mocks__/@nmxjs/validation';
import { ListResponseDto } from '../../src/dto/ListResponseDto';
import { ListResponseCursorDto } from '../../src/dto/ListResponseCursorDto';

describe('ListResponseDto', () => {
  beforeAll(() => {
    new (ListResponseDto as any)();
  });

  it('cursor should have type ListResponseCursorDto', () => {
    const meta = getAllFieldMetadata('ListResponseDto');
    expect(meta?.get('cursor')).toEqual({
      type: ListResponseCursorDto,
    });
  });

  it('should support abstract field items', () => {
    class TestListResponse extends ListResponseDto<{ id: string }> {
      items = [{ id: '1' }];
    }
    const instance = new TestListResponse();
    expect(instance.items).toEqual([{ id: '1' }]);
  });
});
