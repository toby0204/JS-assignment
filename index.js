window.onload=function(){
  document.getElementById("add-button").addEventListener("click",add);
  document.getElementById("schedule").setAttribute("onkeyup","enterkey()");
}

function add(){
  let todo=document.getElementById("schedule").value;
  document.getElementById("schedule").value = "";

  let now = new Date();
  let date=now.getFullYear()+'.'+(now.getMonth()+1)+'.'+now.getDate();

  let check = document.createElement("INPUT");
  check.setAttribute("type","checkbox");
  check.addEventListener("click",function(){  
    if (confirm("삭제하시겠습니까?")) {
      check.parentNode.parentNode.remove();
    } else {
      check.checked=false;
    }
  });

  table=document.getElementsByClassName("table__table");

  tr=document.createElement("tr");
  tdDate=document.createElement("td");
  tdContent=document.createElement("td");
  tdcheck=document.createElement("td");

  tdDate.innerText=date;
  tdContent.innerText=todo;
  tdcheck.appendChild(check);

  tr.appendChild(tdDate);
  tr.appendChild(tdContent);
  tr.appendChild(tdcheck);

  table[0].appendChild(tr);
}

  function enterkey(){
    if (window.event.keyCode==13){
      add();
    }
  }
 