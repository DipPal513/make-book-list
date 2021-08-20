

document.getElementById('add-book').addEventListener('click',function(){
  const title = document.getElementById('title').value;
  const author =document.getElementById('author').value;
  const year = document.getElementById('year').value;
  const bookList = document.getElementById('book-list');

  if(title=='' && author==''&& year==''){
    alert('put value');
  }
  else{
    const newRow = document.createElement('tr');
    //creat element
    const newTitle = document.createElement('th');
    newTitle.innerHTML=title;
    newRow.appendChild(newTitle);

    
    //creat element
    const newAuthor = document.createElement('th');
    newAuthor.innerHTML=author;
    newRow.appendChild(newAuthor);
    //creat element
    const newYear = document.createElement('th');
    newYear.innerHTML=year;
    newRow.appendChild(newYear);
    bookList.appendChild(newRow);
  }
})


/*
    const newAuthor = document.createElement('th');
    newAuthor.innerHTML=author;
    newRow.appendChild(newAuthor);
*/