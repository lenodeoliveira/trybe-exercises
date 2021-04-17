//http://cep.la/api

const fetch = require('node-fetch');

const URL = 'http://cep.la/30310030';

const apiCEP = async (cep) => {
  const headers = new fetch.Headers({
    Accept: 'application/json',
  });

  return await fetch(`http://cep.la/${cep}`, {
    headers,
    method: 'GET',
  })
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response);
      }
      return response.json();
    })
    .catch((errorOrResponse) => {
      if (errorOrResponse.status) {
        return console.error(
          `Request failed with status ${errorOrResponse.status}`
        );
      }
      console.error(errorOrResponse);
    });
};

const getTeste = async () => {
  const cepresponse = await apiCEP('92990000').then((response) => {
    return response;
  });
  return cepresponse;
};
console.log(getTeste());
/* 
const headers = new fetch.Headers({
  Accept: 'application/json',
});

fetch(URL, {
  // Passamos o objeto de headers como parâmetro para o fetch
  headers,
  method: 'GET',
})
  .then((response) => {
    // Ao receber a resposta, verificamos se correu tudo bem
    if (!response.ok) {
      // Caso não, forçamos a Promise a ser rejeitada
      return Promise.reject(response);
    }
    // Caso esteja tudo OK, lemos o body como JSON
    return response.json();
  })
  .then((data) => {
    // Por fim, escrevemos o body no console
    console.log(data);
  })
  .catch((errorOrResponse) => {
    // Em caso de falha simples (a request completou com um status diferente de 2xx)
    // simplesmente logamos o status no console
    if (errorOrResponse.status) {
      return console.error(
        `Request failed with status ${errorOrResponse.status}`
      );
    }

    // Caso tenha acontecido um erro de rede (não foi possível completar a request)
    // logamos o erro todo
    console.error(errorOrResponse);
  });
 */
