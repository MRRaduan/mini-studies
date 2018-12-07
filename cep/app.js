document.querySelector('#cep').addEventListener('blur', getAddress);

function getAddress(e) {
  const cepNumber = e.target.value;
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `https://viacep.com.br/ws/${cepNumber}/json`, true);
 
  xhr.onload = function() {
    if(xhr.status === 200) {
      const response = JSON.parse(this.responseText);
      let output = '';
      console.log(typeof response);

      
    }
  }

  xhr.send();

}