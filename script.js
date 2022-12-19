// Navbar
let nodesDetails = document.getElementsByClassName("detail");
if(window.innerWidth<740){
    for (let i = 0; i < nodesDetails.length; i++) {
        nodesDetails[i].style.display="none";
        nodesDetails[i].parentNode.childNodes[0].style.fontSize="30px";
    }
} else {
    for (let i = 0; i < nodesDetails.length; i++) {
        nodesDetails[i].style.display="block";
        nodesDetails[i].parentNode.childNodes[0].style.fontSize="medium";
    }
}

const nodeNav=document.getElementsByTagName("nav")[0]
const nodeHeader=document.getElementsByTagName("header")[0]
window.addEventListener("scroll",event=>{
    if (nodeHeader.getBoundingClientRect().bottom<0){
        nodeNav.children[0].style.position="fixed";
    }
    else{
        nodeNav.children[0].style.position="relative";
    }
})
 
// SlideShow
let active=[0,0];
const nodesSlideShow=document.getElementsByClassName("slideshow");
for (let i = 0; i < nodesSlideShow.length; i++) {
    for (let j = 0; j < nodesSlideShow[i].children.length; j++) {
        if(j>1){
            nodesSlideShow[i].children[j].style.width=nodesSlideShow[i].clientWidth-56+"px";
        }
        
    }
    nodesSlideShow[i].style.height=nodesSlideShow[i].children[active[i]+2].clientHeight+50+"px";
}

const nodesButtons = document.getElementsByClassName("buttons")
for (let i = 0; i < nodesButtons.length; i++) {
    nodesButtons[i].children[0].addEventListener("click", event=>{
        if(active[i]-1!=-1){
            nodesSlideShow[i].children[active[i]+2].style.opacity="0";
            nodesSlideShow[i].children[active[i]+2].style.transform="translateX(200%)";
            active[i]--;
            nodesButtons[i].children[1].textContent=active[i]+1+"/7"
            nodesSlideShow[i].children[active[i]+2].style.opacity="1";
            nodesSlideShow[i].children[active[i]+2].style.transform="translateX(0%)";
            nodesSlideShow[i].style.height=nodesSlideShow[i].children[active[i]+2].clientHeight+50+"px";
        }
    })
    nodesButtons[i].children[2].addEventListener("click", event=>{
        if(active[i]+1!=7){
            nodesSlideShow[i].children[active[i]+2].style.opacity="0";
            nodesSlideShow[i].children[active[i]+2].style.transform="translateX(-200%)";
            active[i]++;
            nodesButtons[i].children[1].textContent=active[i]+1+"/7"
            nodesSlideShow[i].children[active[i]+2].style.opacity="1";
            nodesSlideShow[i].children[active[i]+2].style.transform="translateX(0%)";
            nodesSlideShow[i].style.height=nodesSlideShow[i].children[active[i]+2].clientHeight+50+"px";
        }
    })
}

// Footer
const nodesLinks = document.getElementById("here").children;
for (let i = 0; i < nodesLinks.length; i++) {
    nodesLinks[i].addEventListener("mouseover",event=>{
        nodesLinks[i].children[0].style.color="#ffff00"
    })
    nodesLinks[i].addEventListener("mouseout",event=>{
        nodesLinks[i].children[0].style.color="var(--neon-blue)"
    })
}
nodesLinks[0].addEventListener("click",event=>{
    navigator.clipboard.writeText(nodesLinks[0].children[1].textContent)
    let old=nodesLinks[0].children[1].textContent;
    nodesLinks[0].children[1].textContent="Copied!"
    nodesLinks[0].children[1].style.color="#ffff00"
    setTimeout(function(){
        nodesLinks[0].children[1].textContent=old;
        nodesLinks[0].children[1].style.color="white"
    },1000)
})
nodesLinks[3].addEventListener("click",event=>{
    navigator.clipboard.writeText(nodesLinks[3].children[1].textContent)
    let old=nodesLinks[3].children[1].textContent;
    nodesLinks[3].children[1].textContent="Copied!"
    nodesLinks[3].children[1].style.color="#ffff00"
    setTimeout(function(){
        nodesLinks[3].children[1].textContent=old;
        nodesLinks[3].children[1].style.color="white"
    },1000)
})


// Actualisation
window.addEventListener("resize",event=>{
    if(window.innerWidth<740){
        for (let i = 0; i < nodesDetails.length; i++) {
            nodesDetails[i].style.display="none";
            nodesDetails[i].parentNode.childNodes[0].style.fontSize="30px";
        }
    } else {
        for (let i = 0; i < nodesDetails.length; i++) {
            nodesDetails[i].style.display="block";
            nodesDetails[i].parentNode.childNodes[0].style.fontSize="medium";
        }
    }
    for (let i = 0; i < nodesSlideShow.length; i++) {
        for (let j = 0; j < nodesSlideShow[i].children.length; j++) {
            if(j>1){
                nodesSlideShow[i].children[j].style.width=nodesSlideShow[i].clientWidth-56+"px";
            }
            
        }
        nodesSlideShow[i].style.height=nodesSlideShow[i].children[active[i]+2].clientHeight+50+"px";
    }
})