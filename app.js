function getInput(input){
  const inputId = document.getElementById(input);
  const inputValue = inputId.value;
  
  inputId.value ='';
  return inputValue;
}
function setData(){
  const title = getInput('title');
  const author = getInput('author');
  const year = getInput('year');
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <th>${title}</th>
    <th>${author}</th>
    <th>${year}</th>
  `
  const bookList = document.getElementById('book-list')
  bookList.appendChild(tr);
}
document.getElementById('add-book').addEventListener('click',function(){

  setData()

})