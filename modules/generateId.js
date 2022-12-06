const generateId = (length) => {
  let id = '';
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charLength = chars.length;
  for (let i = 0; i < length; i += 1) {
    id += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return id;
};

export default generateId;