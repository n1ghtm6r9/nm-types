import { getAllFieldMetadata } from '../../__mocks__/@nmxjs/validation';
import { SortOrderByEnum } from '../../src/interfaces';
import { ListRequestSortDto } from '../../src/dto/ListRequestSortDto';

describe('ListRequestSortDto', () => {
  beforeAll(() => {
    new (ListRequestSortDto as any)();
  });

  it('field should have type String', () => {
    const meta = getAllFieldMetadata('ListRequestSortDto');
    expect(meta?.get('field')).toEqual({ type: String });
  });

  it('type should be enum SortOrderByEnum', () => {
    const meta = getAllFieldMetadata('ListRequestSortDto');
    expect(meta?.get('type')).toEqual({
      type: { SortOrderByEnum },
      enum: true,
    });
  });
});
