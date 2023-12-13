export const formattedRg = (rg: string) => {
    const numbers = rg.replace(/\D/g, "");
  
    let formatted = numbers;
    if (numbers.length > 2) {
      formatted = `${numbers.substring(0, 2)}.${numbers.substring(2)}`;
    }
    if (numbers.length > 5) {
      formatted = `${numbers.substring(0, 2)}.${numbers.substring(2, 5)}.${numbers.substring(5)}`;
    }
    if (numbers.length > 9) {
      formatted = `${numbers.substring(0, 2)}.${numbers.substring(2, 5)}.${numbers.substring(5, 8)}-${numbers.substring(8, 9)}`;
    }
  
    return formatted;
  };