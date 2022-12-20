function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Success');
    } else {
      reject('Failure');
    }
  });
}

export default getResponseFromAPI;
