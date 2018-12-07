document.getElementById('button').addEventListener('click', loadData);


function loadData() {
  // Create a XHR object
  const xhr = new XMLHttpRequest();

  // Open
  // The open method serve to especify the type request that will make
  // and de URL or the file name that we wanna make to
  // xhr.open(type of request, url or file name, boolean to be async
  //  or not (true for async))
  xhr.open('GET', 'data.txt', true);

  // console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function() {
    console.log('READYSTATE', xhr.readyState);
  }

  // Here we can do whatever we want with the onload method
  xhr.onload = function() {

  console.log('READYSTATE', xhr.readyState);
    // Now we check the status of our request
    // Some HTTP Statuses
    // 200: "OK"
    // 403: "Forbbiden"
    // 404: "Not Found"
    if(this.status === 200) { // If ok
      // console.log(this.responseText);

      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function() {
    console.log('Request error...');
  }

  // Just for finalize evething we do
  xhr.send();
}

// READY STATE
// ready state values
// 0: request no initialized
// 1: server conection established
// 2: request received
// 3: processing request
// 4: request finished and respone is ready
