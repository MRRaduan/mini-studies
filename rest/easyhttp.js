function easeyHTTP() {
  this.http = new XMLHttpRequest();
}



//
// Make HTTP GET request
//
easeyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);
  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200 ){
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status)
    }
  }

  this.http.send();
}



//
// Make HTTP POST request
//
easeyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'aplication/json');

  let self = this;
  this.http.onload = function(){
    callback(null, self.http.responseText);
  }

  // I'ts need to send the data (object) like a string
  this.http.send(JSON.stringify(data));
}



//
// Make HTTP PUT request
//
easeyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'aplication/json');

  let self = this;
  this.http.onload = function(){
    callback(null, self.http.responseText);
  }

  // I'ts need to send the data (object) like a string
  this.http.send(JSON.stringify(data));
}



//
// Make HTTP DELETE request
//
easeyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);
  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200 ){
      callback(null, 'Post Deleted');
    } else {
      callback('Error: ' + self.http.status)
    }
  }

  this.http.send();
}