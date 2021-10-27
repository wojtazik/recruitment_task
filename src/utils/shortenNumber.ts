export default (amount: number): string => {
  if (amount < 1000) {
    return `${amount} $`;
  }
  if (amount < 1000000) {
    return `${parseFloat((amount / 1000).toString()).toFixed(2)} k $`;
  }
  if (amount < 1000000000) {
    return `${parseFloat((amount / 1000000).toString()).toFixed(2)} mln $`;
  }

  if (amount < 1000000000000) {
    return `${parseFloat((amount / 1000000000).toString()).toFixed(2)} bln $`;
  }

  return `${amount} $`;
};
