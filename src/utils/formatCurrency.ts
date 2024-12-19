export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-gb', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }
