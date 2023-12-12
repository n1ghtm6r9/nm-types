import { Field } from '@nmxjs/validation';

export abstract class UpdateRequestDto<T = object> {
  abstract payload: T;

  @Field({
    type: String,
  })
  id: string;
}
