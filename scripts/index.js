// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page




// `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${q}

import {navbar} from "../components/navbar.js"

let navbar_div=document.getElementById("navbar")
navbar_div.innerHTML=navbar()








import { searchnews,append,searchside } from "./fetch.js"








let inputsearch = (e) => {



    if(e.key=="Enter"){

    
        let q=document.getElementById("searchinput").value
    
    console.log(q)
    

    // localStorage.setItem("query",q)
    // let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${q}`
    
    
    searchnews(q).then((data)=>{
    
        // console.log(data)
    
    
    append(data.articles,results)
    localStorage.setItem("news",JSON.stringify(data))

   
    
    
    })
   
    
    }

  window.location.href="search.html"
    }
    
    document.getElementById("searchinput").addEventListener("keydown",inputsearch)
    
  
  






let sidebar=document.getElementById("sidebar").children;


function sidebarsearch(){
// console.log(this.id)

  
      searchside(this.id).then((data)=>{
    
        // console.log(data)
   let container=document.getElementById("results")
    
    append(data.articles,container)

   

    
    
    })
   

}

for (let el of sidebar){
     el.addEventListener("click",sidebarsearch)

}


