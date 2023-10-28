const accessKey="Kxn8LNhNYp5c6sVJEyOshBzzjWWPFfP-4fXfMT3kS40"
const formE1=document.querySelector("form")
const inputE1=document.getElementById("search-input")
const searchresults=document.querySelector(".search-results")
const showMore=document.getElementById("show-more-button")

let inputData="";
let page=1;

async function searchimages()
{
    inputData=inputE1.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
    
    const responce=await fetch(url)
    const data=await responce.json()

    const results=data.results
     if(page==1)
     {
        searchresults.innerHTML=""
     }
    results.map((result)=>{
        const imagewrapper=document.createElement("div");
        imagewrapper.classList.add("search-result");
        const image=document.createElement("img");
        image.src=result.urls.small;
        image.alt=result.alt_description;
        const imagelink=document.createElement("a");

        imagelink.href="result.links.html";
        imagelink.target="-blank";
        imagelink.textContent=result.alt_description;

        imagewrapper.appendChild(image);
        imagewrapper.appendChild(imagelink);
        searchresults.appendChild(imagewrapper);
    });

    page++;
    if(page>1)
    {
        showMore.style.display="block";
    }
}

formE1.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchimages();
})
showMore.addEventListener("click",()=>{
    searchimages();
})
