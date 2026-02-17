const fieldMetadata = new Map<string, Map<string, any>>();

export const getFieldMetadata = (target: string, property: string) => {
  return fieldMetadata.get(target)?.get(property);
};

export const getAllFieldMetadata = (target: string) => {
  return fieldMetadata.get(target);
};

export const Field = (options: any): PropertyDecorator => {
  return (target: any, propertyKey: string | symbol) => {
    const className = target.constructor.name;
    if (!fieldMetadata.has(className)) {
      fieldMetadata.set(className, new Map());
    }
    fieldMetadata.get(className)!.set(String(propertyKey), options);
  };
};
