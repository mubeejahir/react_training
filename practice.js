//error handling with promises

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => {
//     if (!res.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return res.json();
//   })
//   .then(data => {
//     console.log('Data:', data);
//   }).then(console.log("hi"))
//   .catch(error => {
//     console.log('An error occurred:', error);
//   })
//   .finally(
//     console.log("final statement")
//   );

//Try catch 
// function a (){
//     try {
//         console.log(b)
        
//     } catch (error) {
//         console.log(error)
//     }
    
//       console.log("hi"); 
//     }


let async = async ()=>{
    let request = await fetch("https://jsonplaceholder.typicode.com/comments");
    console.log(request);
    let response = await request.json();
    console.log(response)
}

async();