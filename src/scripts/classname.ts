type Rule = {
  [key: string]: boolean;
};

type Input = Array<string | Rule>;

export const classname = (...rules: Input): string => (
  rules.reduce((classes, rule) => {
    if (typeof rule === 'string') {
      return `${classes} ${rule}`;
    }

    return `${classes}${
      Object.keys(rule).reduce((accumilation, key) => {
        return `${accumilation}${rule[key] && ` ${key}`}`;
      }, '')
    }`;
  }, '') as string
).trim();
