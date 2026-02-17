import { getAllFieldMetadata } from '../../__mocks__/@nmxjs/validation';
import { GetOneRequestDto } from '../../src/dto/GetOneRequestDto';

describe('GetOneRequestDto', () => {
  beforeAll(() => {
    new (GetOneRequestDto as any)();
  });

  it('id should have type String', () => {
    const meta = getAllFieldMetadata('GetOneRequestDto');
    expect(meta?.get('id')).toEqual({
      type: String,
    });
  });

  it('select should be nullable array of String without GraphQL', () => {
    const meta = getAllFieldMetadata('GetOneRequestDto');
    expect(meta?.get('select')).toEqual({
      type: String,
      array: true,
      nullable: true,
      withoutGraphQl: true,
    });
  });

  it('reject should be nullable Boolean without GraphQL', () => {
    const meta = getAllFieldMetadata('GetOneRequestDto');
    expect(meta?.get('reject')).toEqual({
      type: Boolean,
      nullable: true,
      withoutGraphQl: true,
    });
  });
});
