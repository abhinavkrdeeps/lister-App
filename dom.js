let form = document.getElementById('addForm');

let lit= document.getElementById('items');


let filter=document.getElementById('filter');

form.addEventListener(
  'submit', (e)=>{
    e.preventDefault();
    let newItem = document.getElementById('item');
    console.log(newItem);
    

    let li= document.createElement('li');
    console.log(li);
    

    li.className='list-group-item';

    li.appendChild(document.createTextNode(newItem.value));
  //  console.log(1);

    let button = document.createElement('button');

    button.className='btn btn-danger btn-sm float-right delete';

    button.appendChild(document.createTextNode('X'))

    li.appendChild(button);

  lit.appendChild(li);

  }
);


lit.addEventListener('click',(e)=>{

  if(e.target.classList.contains('delete')){

    if(confirm('Are U Sure ? ')){
       let li= e.target.parentElement;
       lit.removeChild(li);
    }
  }

   console.log(e);
   
});

filter.addEventListener('keypress',(e)=>{

    let val = e.target.value.toLowerCase();

    let list1= lit.getElementsByTagName('li');

    Array.from(list1).forEach((lis)=>{
      
      let t= lis.firstChild.textContent;

      if(t.toLowerCase().indexOf(val)!=-1)
      {
        lis.style.display='block'
      }else{
        lis.style.display='none'
      }
      
    })
    console.log(list1);
    

})