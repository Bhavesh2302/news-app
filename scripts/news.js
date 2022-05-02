// Ude Import export (MANDATORY)

import {navbar} from "../components/navbar.js"

let navbar_div=document.getElementById("navbar")
navbar_div.innerHTML=navbar()



import { searchnews,append,searchside,appendnew } from "./fetch.js"




let newdata=JSON.parse(localStorage.getItem("news"))

console.log(newdata)


//         let q=document.getElementById("searchinput").value
    
//     console.log(q)
    
//     // let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${q}`
    

    
    append(newdata.articles,results)