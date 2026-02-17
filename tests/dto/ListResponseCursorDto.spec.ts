import { getAllFieldMetadata } from '../../__mocks__/@nmxjs/validation';
import { ListResponseCursorDto } from '../../src/dto/ListResponseCursorDto';

describe('ListResponseCursorDto', () => {
  beforeAll(() => {
    new (ListResponseCursorDto as any)();
  });

  it('totalCount should have type Number', () => {
    const meta = getAllFieldMetadata('ListResponseCursorDto');
    expect(meta?.get('totalCount')).toEqual({ type: Number });
  });

  it('totalPages should have type Number', () => {
    const meta = getAllFieldMetadata('ListResponseCursorDto');
    expect(meta?.get('totalPages')).toEqual({ type: Number });
  });

  it('nextPage should be nullable Number', () => {
    const meta = getAllFieldMetadata('ListResponseCursorDto');
    expect(meta?.get('nextPage')).toEqual({
      type: Number,
      nullable: true,
    });
  });
});
