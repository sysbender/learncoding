// real example

function handleSuccess(response) {
  console.log(" success = ", response.message);
}

function handleError(error) {
  console.error("error = ", error);
}

function fetchDataCallback(resolve, reject) {
  setTimeout(() => {
    let num = Math.random();
    if (Math.round(num)) {
      resolve();
    } else {
      reject();
    }
  }, 2000);
}

function fetchDataFromServer() {
  return new Promise(fetchDataCallback);
}

fetchDataFromServer().then(handleSuccess).catch(handleError);
