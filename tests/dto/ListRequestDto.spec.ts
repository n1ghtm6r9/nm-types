import { getAllFieldMetadata } from '../../__mocks__/@nmxjs/validation';
import { ListRequestDto } from '../../src/dto/ListRequestDto';
import { ListRequestFilterDto } from '../../src/dto/ListRequestFilterDto';
import { ListRequestSortDto } from '../../src/dto/ListRequestSortDto';
import { ListRequestPaginationDto } from '../../src/dto/ListRequestPaginationDto';

describe('ListRequestDto', () => {
  beforeAll(() => {
    new (ListRequestDto as any)();
  });

  it('filters should be nullable array of ListRequestFilterDto', () => {
    const meta = getAllFieldMetadata('ListRequestDto');
    expect(meta?.get('filters')).toEqual({
      type: ListRequestFilterDto,
      array: true,
      nullable: true,
    });
  });

  it('sorts should be nullable array of ListRequestSortDto', () => {
    const meta = getAllFieldMetadata('ListRequestDto');
    expect(meta?.get('sorts')).toEqual({
      type: ListRequestSortDto,
      array: true,
      nullable: true,
    });
  });

  it('pagination should be nullable ListRequestPaginationDto', () => {
    const meta = getAllFieldMetadata('ListRequestDto');
    expect(meta?.get('pagination')).toEqual({
      type: ListRequestPaginationDto,
      nullable: true,
    });
  });

  it('select should be nullable array of String without GraphQL', () => {
    const meta = getAllFieldMetadata('ListRequestDto');
    expect(meta?.get('select')).toEqual({
      type: String,
      array: true,
      nullable: true,
      withoutGraphQl: true,
    });
  });
});
