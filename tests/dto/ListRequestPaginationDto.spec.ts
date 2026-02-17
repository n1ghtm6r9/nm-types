import { getAllFieldMetadata } from '../../__mocks__/@nmxjs/validation';
import { paginationLimit } from '../../__mocks__/@nmxjs/constants';
import { ListRequestPaginationDto } from '../../src/dto/ListRequestPaginationDto';

describe('ListRequestPaginationDto', () => {
  let instance: any;

  beforeAll(() => {
    instance = new (ListRequestPaginationDto as any)();
  });

  it('page should have type Number with default 1', () => {
    const meta = getAllFieldMetadata('ListRequestPaginationDto');
    expect(meta?.get('page')).toEqual({
      type: Number,
      default: 1,
    });
  });

  it('limit should have type Number with default paginationLimit', () => {
    const meta = getAllFieldMetadata('ListRequestPaginationDto');
    expect(meta?.get('limit')).toEqual({
      type: Number,
      default: paginationLimit,
    });
  });

  it('page defaults to 1', () => {
    expect(instance.page).toBe(1);
  });

  it('limit defaults to paginationLimit', () => {
    expect(instance.limit).toBe(paginationLimit);
  });
});
