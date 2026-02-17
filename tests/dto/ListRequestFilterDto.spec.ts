import { getAllFieldMetadata } from '../../__mocks__/@nmxjs/validation';
import { FilterOperatorEnum } from '../../src/interfaces';
import { ListRequestFilterDto } from '../../src/dto/ListRequestFilterDto';

describe('ListRequestFilterDto', () => {
  beforeAll(() => {
    new (ListRequestFilterDto as any)();
  });

  it('field should have type String', () => {
    const meta = getAllFieldMetadata('ListRequestFilterDto');
    expect(meta?.get('field')).toEqual({ type: String });
  });

  it('value should have type JSON (not String)', () => {
    const meta = getAllFieldMetadata('ListRequestFilterDto');
    expect(meta?.get('value')).toEqual({ type: JSON });
  });

  it('value should NOT have type String', () => {
    const meta = getAllFieldMetadata('ListRequestFilterDto');
    expect(meta?.get('value')?.type).not.toBe(String);
  });

  it('operator should be enum FilterOperatorEnum', () => {
    const meta = getAllFieldMetadata('ListRequestFilterDto');
    expect(meta?.get('operator')).toEqual({
      type: { FilterOperatorEnum },
      enum: true,
    });
  });

  it('not should be nullable Boolean', () => {
    const meta = getAllFieldMetadata('ListRequestFilterDto');
    expect(meta?.get('not')).toEqual({
      type: Boolean,
      nullable: true,
    });
  });

  describe('value accepts different data types', () => {
    it('string "test"', () => {
      class TestFilter extends ListRequestFilterDto {
        field = 'name';
        value: any = 'test';
        operator = FilterOperatorEnum.EQ;
      }
      const instance = new TestFilter();
      expect(instance.value).toBe('test');
      expect(typeof instance.value).toBe('string');
    });

    it('array ["a", "b"]', () => {
      class TestFilter extends ListRequestFilterDto {
        field = 'id';
        value: any = ['a', 'b'];
        operator = FilterOperatorEnum.IN;
      }
      const instance = new TestFilter();
      expect(instance.value).toEqual(['a', 'b']);
      expect(Array.isArray(instance.value)).toBe(true);
    });

    it('number 123', () => {
      class TestFilter extends ListRequestFilterDto {
        field = 'age';
        value: any = 123;
        operator = FilterOperatorEnum.EQ;
      }
      const instance = new TestFilter();
      expect(instance.value).toBe(123);
      expect(typeof instance.value).toBe('number');
    });

    it('object { key: "val" }', () => {
      class TestFilter extends ListRequestFilterDto {
        field = 'data';
        value: any = { key: 'val' };
        operator = FilterOperatorEnum.EQ;
      }
      const instance = new TestFilter();
      expect(instance.value).toEqual({ key: 'val' });
      expect(typeof instance.value).toBe('object');
      expect(Array.isArray(instance.value)).toBe(false);
    });

    it('UUID array for IN operator', () => {
      const uuids = ['550e8400-e29b-41d4-a716-446655440000', '6ba7b810-9dad-11d1-80b4-00c04fd430c8'];

      class TestFilter extends ListRequestFilterDto {
        field = 'id';
        value: any = uuids;
        operator = FilterOperatorEnum.IN;
      }
      const instance = new TestFilter();
      expect(instance.value).toEqual(uuids);
      expect(Array.isArray(instance.value)).toBe(true);
      expect(instance.value).not.toBe(uuids.join(','));
    });
  });
});
