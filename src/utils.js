export const getFragments = (text, limit) => {
    const chars = text.replace(/[^a-zA-Z0-9\s]+/g, '').split('');
  
    const result = chars.reduce((acc, char, index) => {
      if (index % limit === 0) {
        acc.push(char);
      } else {
        acc[acc.length - 1] += char;
      }
      return acc;
    }, []);
  
    return result;
  };