import { getAllFieldMetadata } from '../../__mocks__/@nmxjs/validation';
import { EntityDto } from '../../src/dto/EntityDto';

describe('EntityDto', () => {
  beforeAll(() => {
    new (EntityDto as any)();
  });

  it('id should have type String', () => {
    const meta = getAllFieldMetadata('EntityDto');
    expect(meta?.get('id')).toEqual({ type: String });
  });

  it('createdAt should have type Number', () => {
    const meta = getAllFieldMetadata('EntityDto');
    expect(meta?.get('createdAt')).toEqual({ type: Number });
  });

  it('updatedAt should have type Number', () => {
    const meta = getAllFieldMetadata('EntityDto');
    expect(meta?.get('updatedAt')).toEqual({ type: Number });
  });

  it('should have exactly 3 fields', () => {
    const meta = getAllFieldMetadata('EntityDto');
    expect(meta?.size).toBe(3);
  });
});
