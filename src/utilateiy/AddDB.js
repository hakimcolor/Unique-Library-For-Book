export const getStordbook = () => {
  const storBook = localStorage.getItem('readLIst');
  if (storBook) {
    const storBookData = JSON.parse(storBook);
    return storBookData;
  } else {
    return[]
  }
}
export const addtoDB = (id) => {
  const storBookData = getStordbook();
  if (storBookData.includes(id)) {
    alert('already exist')
  } else {
    storBookData.push(id);
    const data = JSON.stringify(storBookData);
    localStorage.setItem('readLIst', data);
  }
  
}