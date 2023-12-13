export const formattedCpf = (cpf: string) => {
    const numbers = cpf.replace(/\D/g, "");
  
    let formatted = numbers;
    if (numbers.length > 3) {
      formatted = `${numbers.substring(0, 3)}.${numbers.substring(3)}`;
    }
    if (numbers.length > 6) {
      formatted = `${numbers.substring(0, 3)}.${numbers.substring(3, 6)}.${numbers.substring(6)}`;
    }
    if (numbers.length > 9) {
      formatted = `${numbers.substring(0, 3)}.${numbers.substring(3, 6)}.${numbers.substring(6, 9)}-${numbers.substring(9, 11)}`;
    }
  
    return formatted;
  };