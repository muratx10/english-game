const fetchData = async (level) => {
  let data;
  switch (+level) {
    case 1: data = await import('../model/data/book1');
    break;
    case 2: data = await import('../model/data/book2');
    break;
    case 3: data = await import('../model/data/book3');
    break;
    case 4: data = await import('../model/data/book4');
    break;
    case 5: data = await import('../model/data/book5');
    break;
    case 6: data = await import('../model/data/book6');
    break;
    default: data = await import('../model/data/book1');
  }
  return data.default;
}

export default fetchData;