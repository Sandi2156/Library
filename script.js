let libraryform = document.getElementById("libraryForm");
add();
function library(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}


function Display(lr){
    this.lr = lr;
}
Display.prototype.clear = function(){
    libraryform.reset();
}
function delete__row(id){

  let libarray = JSON.parse( localStorage.getItem('Library'));
  libarray.splice(id,1);
  localStorage.setItem('Library', JSON.stringify(libarray));
  add()
}
function add(){
    let tableBody = document.getElementById("tableBody");
    let libarray = JSON.parse(localStorage.getItem('Library'));
    let all = '';
    for(i in libarray){
        all += `<tr>
    <td scope="col">${libarray[i].name}</td>
    <td scope="col">${libarray[i].author}</td>
    <td scope="col">${libarray[i].type}</td>
    <td scope="col"><button class="btn btn-primary delete__btn" onclick=delete__row(this.id) id="${i}">Delete</button></td>
</tr>`;
    }
    tableBody.innerHTML = all;
}
Display.prototype.store = function()
{
    let libarray;
    if(localStorage.getItem('Library') == null)
        libarray = [];
    else {
        libarray = JSON.parse(localStorage.getItem('Library'));
    }
    libarray.push(this.lr);

    localStorage.setItem('Library', JSON.stringify(libarray));
    add();

}
Display.prototype.alert = function(){
    if (this.lr.name.length < 4) {
        document.getElementById(
          "alert"
        ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;"><symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </symbol></svg>
    
            <div class="alert alert-warning d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
            <div>
              Length of the Book Name must be greater than 3..
            </div>
          </div>`;
        setTimeout(() => {
            document.getElementById('alert').innerHTML = '';
        }, 3000);
      }
      else if (this.lr.author.length < 6) {
        document.getElementById(
          "alert"
        ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;"><symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </symbol></svg>
    
            <div class="alert alert-warning d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
            <div>
              Length of the Author must be greater than 5..
            </div>
          </div>`;
          setTimeout(() => {
            document.getElementById('alert').innerHTML = '';
        }, 3000);
      }
      else{
        this.clear();
        this.store();
        document.getElementById('alert').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;"><symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </symbol></svg>
      <div class="alert alert-success d-flex align-items-center" role="alert">
      <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
      <div>
        Added Successfully..
      </div>
    </div>`;
        setTimeout(() => {
            document.getElementById('alert').innerHTML = '';
        }, 3000);
      }
}


libraryform.addEventListener("submit", getDetails);
function getDetails(e) {
  e.preventDefault();
  let bookName = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let radio;
  if (fiction.checked) radio = fiction.value;
  else if (programming.checked) radio = programming.value;
  else radio = cooking.value;

  // console.log(bookName,author,radio);
  let lr = new library(bookName, author, radio);
  let disp = new Display(lr);
  disp.alert();
  
}




let search = document.getElementById('search-by-name');
search.addEventListener('input',()=>{

  let libarray =JSON.parse( localStorage.getItem('Library'));
  let all = '';
  for(i in libarray)
  {
    if(libarray[i].name.toLowerCase().includes(search.value.toLowerCase())){
      all += `<tr>
      <td scope="col">${libarray[i].name}</td>
      <td scope="col">${libarray[i].author}</td>
      <td scope="col">${libarray[i].type}</td>
      <td scope="col"><button class="btn btn-primary delete__btn" onclick=delete__row(this.id) id="${i}">Delete</button></td>
  </tr>`;
    }
  }
  document.getElementById("tableBody").innerHTML =all;
})

let search2 = document.getElementById('search-by-author');
search2.addEventListener('input',()=>{

  let libarray =JSON.parse( localStorage.getItem('Library'));
  let all = '';
  for(i in libarray)
  {
    if(libarray[i].author.toLowerCase().includes(search2.value.toLowerCase())){
      all += `<tr>
      <td scope="col">${libarray[i].name}</td>
      <td scope="col">${libarray[i].author}</td>
      <td scope="col">${libarray[i].type}</td>
      <td scope="col"><button class="btn btn-primary delete__btn" onclick=delete__row(this.id) id="${i}">Delete</button></td>
  </tr>`;
    }
  }
  document.getElementById("tableBody").innerHTML =all;
})

let search3 = document.getElementById('search-by-type');
search3.addEventListener('input',()=>{

  let libarray =JSON.parse( localStorage.getItem('Library'));
  let all = '';
  for(i in libarray)
  {
    if(libarray[i].type.toLowerCase().includes(search3.value.toLowerCase())){
      all += `<tr>
      <td scope="col">${libarray[i].name}</td>
      <td scope="col">${libarray[i].author}</td>
      <td scope="col">${libarray[i].type}</td>
      <td scope="col"><button class="btn btn-primary delete__btn" onclick=delete__row(this.id) id="${i}">Delete</button></td>
  </tr>`;
    }
  }
  document.getElementById("tableBody").innerHTML =all;
})