// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import {navbar} from "../components/navbar.js"

let navbar_div=document.getElementById("navbar")
navbar_div.innerHTML=navbar()

import { searchnews,append } from "./fetch.js"



let newdata=JSON.parse(localStorage.getItem("news"))

console.log(newdata)


//         let q=document.getElementById("searchinput").value
    
//     console.log(q)
    
//     // let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${q}`
    

    
    append(newdata.articles,results)
    
   



// import { searchnews,append } from "./fetch.js"



// let results=document.getElementById("results")

// let inputsearch = (e) => {



//     if(e.key=="Enter"){
//     window.location.href="search.html"
    
//         let q=document.getElementById("searchinput").value
    
//     console.log(q)
    
//     // let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${q}`
    
    
//     searchnews(q).then((data)=>{
    
//         console.log(data)
    
//     append(data.articles,results)
    
//     })
    
    
//     }
    
    
//     }
    
//     document.getElementById("searchinput").addEventListener("keydown",inputsearch)
    
    