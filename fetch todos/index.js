document.getElementById('fetchbtn').addEventListener('click', Fetchuser);
function Fetchuser (){
    fetch("https://reqres.in/api/users")
    .then(responce =>responce.json())
    .then(data =>{             //in the place of data we changed anthing name 
        let output = "";
        console.log(data.data);       //and next data is actully function
       data.data.forEach(user => {
        output += `
        
        <div class="usercrd">
        <img src="${user.avatar}" alt = "user Avatar">
        <div class="user-details">
            <span class="name"> NAME:${user.first_name}</span><br>
            <span class="email"> EMAIL: ${user.email}</span>
            </div>
        
        </div>
        `
       })
    
       document.getElementById("userlist").innerHTML = output;
    })
    .catch(error => {
        console.error("there is error", error);
    })
}