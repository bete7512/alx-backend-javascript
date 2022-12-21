async function handleResponseFromAPI(promise) {
  let res = {
    status: 200,
    body: 'Success'
  };
  try {
    res = await promise();
  } catch (error) {
    console.log('Got a response from the API');
  }
  return res;
}

export default handleResponseFromAPI;
