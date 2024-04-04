declare module '@nmxjs/validation' {
  interface IFieldOptions {
    type: String | Number | Boolean | object;
    enum?: boolean;
    array?: boolean;
    nullable?: boolean;
    default?: any;
  }
  const Field: (options: IFieldOptions) => PropertyDecorator;
}
