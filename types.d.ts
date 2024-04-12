declare module '@nmxjs/validation' {
  interface IFieldOptions {
    type: String | Number | Boolean | object | JSON;
    enum?: boolean;
    array?: boolean;
    nullable?: boolean;
    default?: any;
  }
  const Field: (options: IFieldOptions) => PropertyDecorator;
}
