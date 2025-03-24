





export function getCurrentDateTime(dateSeparator = '-', timeSeparator = ':') {
    const newDate = new Date();
  
    // তারিখ
    const date = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const year = newDate.getFullYear();
  
    // সময়
    const hours = String(newDate.getHours()).padStart(2, '0');
    const minutes = String(newDate.getMinutes()).padStart(2, '0');
    const seconds = String(newDate.getSeconds()).padStart(2, '0');
  
    return `${year}${dateSeparator}${month}${dateSeparator}${date} ${hours}${timeSeparator}${minutes}${timeSeparator}${seconds}`;
  }