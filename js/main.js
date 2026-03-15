document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://rap-names-api-fun-vn42.onrender.com/api/${rapperName}`)

        const data = await response.json()
        console.log(data)

        if(data.birthName === "Robert Hellyuh"){
            document.querySelector('h3').innerText = data.birthName
            document.querySelector('h2').innerText = ""
        } else {
            document.querySelector('h2').innerText = data.birthName
            document.querySelector('h3').innerText = ""
        }

    }catch(error){
        console.log(error)
    }
}

/*

Browser
   ↓
JavaScript fetch()
   ↓
Internet request
   ↓
Your Express API
   ↓
JSON response
   ↓
Browser updates DOM

*/

/*

User action
   ↓
Frontend JavaScript
   ↓
HTTP request
   ↓
Backend server
   ↓
Data processing
   ↓
JSON response
   ↓
Frontend UI update

*/