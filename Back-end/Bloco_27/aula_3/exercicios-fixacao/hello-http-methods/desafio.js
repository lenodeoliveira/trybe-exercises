const fetch = require('node-fetch');

/* fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=2')
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
    console.log(data[0]._embedded['wp:featuredmedia']);
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

let totalPages = 0;
let posts = [];

fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
  .then((response) => {
    // Ao receber a resposta, verificamos se correu tudo bem
    if (!response.ok) {
      // Caso não, forçamos a Promise a ser rejeitada
      return Promise.reject(response);
    }
    // Caso esteja tudo OK, lemos o body como JSON
    console.log(
      'quantidade total de postagens',
      response.headers.get('X-WP-Total')
    );
    console.log(
      'total de páginas de postagens',
      response.headers.get('X-WP-TotalPages')
    );
    return response.json();
    //posts = response[0]._embedded['wp:featuredmedia'];
  })
  .then((data) => {
    //console.log(data[0]._embedded['wp:featuredmedia']);
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
