
//https://masai-mock-api.herokuapp.com/news?q=
// https://masai-mock-api.herokuapp.com/news/top-headlines?country=

let searchnews= async (q) =>{


    try{

let res =await fetch(`https://masai-mock-api.herokuapp.com/news?q=${q}`)

let data= await res.json()
 

        return data;

// let {articles}=data

// return articles;

    }
    catch(error){
        console.log;("error :",error)
    }


}


export{searchnews}


let append= (data,container)=>{

data.forEach(({urlToImage,title,description} )=>{

let news_div=document.createElement("div")

news_div.setAttribute("class","news")


let img=document.createElement("img")

img.src=urlToImage;



let ttle=document.createElement("h1");

ttle.innerText=title;



let desc=document.createElement("p")
desc.innerText=description


news_div.append(img,ttle,desc)


container.append(news_div)





})




}

export {append}



let searchside= async (q) =>{


    try{

let res =await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${q}`)

let data= await res.json()
 

        return data;

// let {articles}=data

// return articles;

    }
    catch(error){
        console.log;("error :",error)
    }


}


export {searchside}





let appendnew= (data,container)=>{

    data.forEach(({urlToImage,title,content} )=>{
    
    let news_div=document.createElement("div")
    
    news_div.setAttribute("class","news")
    
    
    let img=document.createElement("img")
    
    img.src=urlToImage;
    
    
    
    let ttle=document.createElement("h1");
    
    ttle.innerText=title;
    
    
    
    let desc=document.createElement("p")
    desc.innerText=content;
    
    
    news_div.append(img,ttle,desc)
    
    
    container.append(news_div)
    
    
    
    
    
    })
}