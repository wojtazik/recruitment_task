export default (entry: Record<string, any>): Record<string, any> =>
  Object.keys(entry).reduce(
    (total: Record<string, any>, current: string) => ({
      ...total,
      [current.substr(3)]: entry[current],
    }),
    {}
  );
