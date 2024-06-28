export abstract class GetOneResponseDto<T extends object = object> {
  abstract item: T;
}
