//all input function---------
function getItem(item){
  const getItem = document.getElementById(item).value;
  return getItem;
}
// creat Element part---------
function inputValue(item){
  // const bookList = document.getElementById('book-list');
  // const newRow = document.createElement('tr');
  const newHeading = document.createElement('th');
   newHeading.innerHTML=getItem(item);
  // bookList.appendChild(newHeading);
  // bookList.appendChild(newRow);
  return newHeading;
}

function addTotal(item){
  const bookList = document.getElementById('book-list');
  const newRow = document.createElement('tr');
  const items = inputValue(item);
  newRow.appendChild(items);
  bookList.appendChild(newRow);
}

document.getElementById('add-book').addEventListener('click',function(){
  //const title = document.getElementById('title').value;
 const title =getItem('title');
  const author =getItem('author');
  const year = getItem('year');
  const bookList = document.getElementById('book-list');

  if(title=='' && author==''&& year==''){
    alert('put value');
  }
  else{
    /*
     const newRow = document.createElement('tr');
    //creat element
    
     const newTitle = document.createElement('th');
     newTitle.innerHTML=title;
     newRow.appendChild(newTitle)

    

    
    //creat element
    const newAuthor = document.createElement('th');
    newAuthor.innerHTML=author;
    newRow.appendChild(newAuthor);
    //creat element
    const newYear = document.createElement('th');
    newYear.innerHTML=year;
    newRow.appendChild(newYear);
    bookList.appendChild(newRow);
    */
    //const bookList = document.getElementById('book-list');
    inputValue('title');
    //console.log(inputValue('title'));
    inputValue('author');
    //console.log( inputValue('author'))
    inputValue('year');
    //console.log(inputValue('year'))
    addTotal(item)
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('year').value = '';

  }
})



 /*
     const newAuthor = document.createElement('th');
     newAuthor.innerHTML=author;
     newRow.appendChild(newAuthor);
 */