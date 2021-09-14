function main(){
const liEl = document.getElementsByTagName("li")
for( const i of liEl){

    if(

 i.addEventListener("click",function(e){
        e.stopPropagation()
        this.setAttribute("class","filter-active")
      console.log(i)
    })
    ){i.firstChild.classList.remove()
   }
   
    
}

}
main()