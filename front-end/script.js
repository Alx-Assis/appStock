window.addEventListener("DOMContentLoaded", ()=>{
  
 /*
 const data = async ()=>{
   await fetch('http://localhost:3333/api/v1/indexproduto').then(res=>res.json()).then(res=>console.log(res.status))};
 */
   const urlImg = "https://http2.mlstatic.com/corredica-telescopica-para-gaveta-30kg-700mm-hafele-D_NQ_NP_878162-MLB27475742585_062018-F.jpg";
   
 const list = document.getElementById("list");
 
 const img = document.getElementById('image').src=urlImg;
 
 
 function getElement(element){
   return document.getElementById(element);
 };
 function clean(){
    let codigo = getElemet('codigo').value="";
    let description = getElemet('description').value="";
    let address= getElemet('address').value="";
    console.log(`${codigo} ${description} ${address}`)
  }
 function createBtn(id,event,fc){
   
 return document.getElementById(id).addEventListener(event,fc);
 }
 
  async function read(e){
  
 let search = getElement('search').value;
 let codigo = getElement('codigo').value;
 
 if(search!=""){
   
 let dataset = await fetch(`http://localhost:3333/api/v1/produto/`,{
   method:"GET",
   headers:{
     "Content-type":"application/json"
   },
   body:JSON.stringify({
     search:search,
     codigo:codigo
   })
 }).then(res=>res.json());
 
 let  codigo = getElement('codigo').value=dataset[0].codigo;
 
 let  address = getElement('address').value=dataset[0].address;
 
 let  description = getElement('description').value=dataset[0].description;
 
 }else{
   alert("the fild codigo not null")
 }
  }
  
  async function create(e){
    
    let codigo = getElement('codigo').value;
    let description = getElemet('description').value;
    let address = getElemet('address').value;
    let data={
     codigo:codigo,
     description:description,
     address:address
   };
  
  if(description !=""||address!=""){
    try{
    let dataSet= await fetch('http://localhost:3333/api/v1/produto',{
      headers:{
        "Content-type":"application/json"
      },
      method:"POST",
      body:JSON.stringify(data)
    }).then(res=>res.json()).then(data=>{
      
    alert(`Produto cadstrado com id:${data.id}`)
    
    clean()
    }
    )
    }catch(err){
      alert(err)
    }
  
  }else{
  alert(" the field codigo ,description and address not null");
    
  };
   
 };
 
  async function update(e){
 
    let codigo = getElement('codigo').value;
    let description = getElement('description').value;
    let address = getElement('address').value;
    
    let data={
      codigo:codigo,
     description:description,
     address:address
   };
  
  if(description !=""||address!=""){
  
    let dataSet= await fetch('http://localhost:3333/api/v1/produto',{
      headers:{
        "Content-type":"application/json"
      },
      method:"PUT",
      body:JSON.stringify(data)
    }).then(res=>res.json()).catch(err=>alert(`ocorreu um erro:${err}`));
    alert("Product update sucess")
   
  }else{
    alert("the field description e address  not null");
  }
  
  
   
 };
 
  async function Delete(e){
    
    
    let codigo = getElement('codigo').value
    let dados = await fetch(`http://localhost:3333/api/v1/produto/${codigo}`,{
      method:"DELETE",
      headers:{
        "Content-type":"application/json"
      }
    }).then(res=>res.json()).catch(err=>alert(`problem:${err}`))
    alert("item deletado com sucesso")
    clean();
  }
  
 const btn = createBtn('btnBusca','click',read);
 
 const btnCreate = createBtn('Criar','click',create);
 
 const btnDelete = createBtn('Deletar','click',Delete);
 
 const btnUpdate = createBtn('Alterar','click',update);
 
});