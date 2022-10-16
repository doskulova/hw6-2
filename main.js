document.querySelector('#search').addEventListener("click", getUserId);
function getId (userId){
    return userId.toLowerCase();
}
function getUserId(e){
    const userId =document.querySelector('#getPosts').value;
    const id= getId(userId);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response)=> response.json())
    .then((data)=>{
        document.querySelector("#posts").innerHTML += `
        <div class="post"> 
        <h4>User id: ${data.userId}</h4>
        <h4> Id: ${data.id}</h4> 
          <p>${data.title}</p>
        <p>${data.body}</p> 
        </div> 
      
        `
        console.log(data)

       
    }).catch((err)=>{
        console.log('not found', err)
    });
    e.preventDefault();

}
