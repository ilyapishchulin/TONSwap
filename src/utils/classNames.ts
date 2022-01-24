type ClassName = string | undefined | Record<string, boolean|undefined|null>;

export const classNames = (...args: ClassName[]): string => {
  const result: string[] = [];

  args.forEach((item): void => {
    if (!item) {
      return;
    }

    switch (typeof item) {
      case 'object':
        Object.keys(item).forEach((key: string) => {
          if (item[key]) {
            result.push(key);
          }
        });
        break;

      case 'string':
      default:
        result.push(item);
    }
  });

  return result.join(' ');
}