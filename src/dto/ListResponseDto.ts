import { Field } from '@nmxjs/validation';
import { ListResponseCursorDto } from './ListResponseCursorDto';

export abstract class ListResponseDto<T = object> {
  abstract items: T[];

  @Field({
    type: ListResponseCursorDto,
  })
  cursor: ListResponseCursorDto;
}
