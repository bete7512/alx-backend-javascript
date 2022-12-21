function handleResponseFromAPI(promise) {
  return promise.then(() => ({ status: 200, body: 'Success' })).catch(() => Error()).finally(() => console.log('Got a response from the API'));
  //       })
  //  new Promise((resolve, reject) => {
  //     if (promise) {
  //       resolve({
  //         status: 200,
  //         body: 'Success',
  //       });
  //       console.log('Got a response from the API');
  //     } else {
  //       reject(new Error());
  //     }
  //   });
}

export default handleResponseFromAPI;
