const open_input = document.getElementById("open_input");
const add = document.getElementById("add");
const my_data = document.querySelector(".data_list");
const my_input = document.getElementById("data")
const my_list = document.querySelector("ul");
const warning = document.querySelector(".warning");
const edit = document.querySelector(".edit");
const listalph = document.querySelector(".imgg");
const refresh = document.querySelector(".imgg1");
const searching = document.getElementById("search");
const info = document.querySelector(".information");

open_input.addEventListener("mouseover",()=>{
    info.style.border = "1px solid red"
    info.innerText = "Click and open input";
})
open_input.addEventListener("mouseout",()=>{
    info.style.border = "1px solid black"
    info.innerText = "Info";
    
})

add.addEventListener("mouseover",()=>{
    info.style.border = "1px solid red"
    info.innerText = "Click and add your to-do";
})
add.addEventListener("mouseout",()=>{
    info.style.border = "1px solid black"
    info.innerText = "Info";
    
})

refresh.addEventListener("mouseover",()=>{
    info.style.border = "1px solid red"
    info.innerText = "refresh your to-do list";
})
refresh.addEventListener("mouseout",()=>{
    info.style.border = "1px solid black"
    info.innerText = "Info";
    
})
open_input.addEventListener("click",()=>{
    my_data.style.display = "none";
    my_input.style.display = "block";
    warning.style.display = "none";
    listalph.style.display = "none";
    refresh.style.display = "none";
    searching.style.display = "none";
})


add.addEventListener("click",(e)=>{
    if(my_input.value == ""){
        warning.style.display = "block";
        my_input.style.display = "block";
        my_data.style.display = "none";
        searching.style.display = "none";
    }
    else{
        if(my_input.value.length>5){
            warning.innerText = "Zehmet olmasa 6 herfden az daxil edin";
            warning.style.display = "block";
        }
        else{
            searching.style.display = "block";
            my_input.style.display = "none";
            my_data.style.display = "block";
            warning.style.display = "none";
            listalph.style.display = "block";
            refresh.style.display = "block";
            my_list.innerHTML+=`<div class="my_list"><li>${my_input.value}</li><img         class="delete_from_list" src="images/delet.png"><img class="edit" src="images/editt.png" ></div>`;
            // const hesen = document.querySelector(".my_list");
            const dl = document.querySelectorAll(".delete_from_list");
            const dt = document.querySelectorAll(".edit");
            for(let edt of dt){
                edt.addEventListener("mouseover",()=>{
                    info.style.border = "1px solid red";
                    info.innerText = "edit your to-do"
                })
                edt.addEventListener("mouseout",()=>{
                    info.style.border = "1px solid black";
                    info.innerText = "Info";
                })
            }
            for(let btn of dl){
                btn.addEventListener("mouseover",()=>{
                    btn.src = "images/delet1.png";
                    info.style.border = "1px solid red"
                    info.innerText = "delete to-do from list";
                })
                btn.addEventListener("mouseout",()=>{
                    btn.src = "images/delet.png";
                    info.style.border = "1px solid black"
                    info.innerText = "Info";

                })

            }

            // console.log(my_input.value);
            const massiv = document.querySelectorAll("li");
            let new_massiv = [];
            let massiv_data = [];
            for(let dt of massiv){
                new_massiv.push(dt.innerText)
            }
            // console.log(new_massiv);
            let old = [...new_massiv];
            let old_old = [...old];
            let sorted = new_massiv.sort();
            // console.log(old);
            // console.log(sorted);
            my_list.addEventListener("click",(e)=>{
                if(e.target.classList.contains("delete_from_list")){
                    e.target.parentElement.remove();
                    // if(massiv.length == 0){
                    //     listalph.style.display = "none";
                    // }
                    // else{
                    //     listalph.style.display = "block";
                    // }  
                }
                ; 
            })
            function sort(){
                console.log(listalph.src=="http://127.0.0.1:5501/images/sorted.png")

                

               
                if(listalph.src=="http://127.0.0.1:5501/images/btnnn.png"){
                    listalph.src = "http://127.0.0.1:5501/images/list.png";
                    listalph.addEventListener("mouseover",()=>{
                        listalph.src = "images/reversed.png";
                        
                    });
                    listalph.addEventListener("mouseout",()=>{
                        listalph.src = "images/btnnn.png";
                        
                    })
                    
                    console.log(listalph.src)
                    for(let i=0;i<massiv.length;i++){
                            massiv[i].innerText = sorted[i]   
                        }
                        
                    }
                else{
                    listalph.src = "http://127.0.0.1:5501/images/btnnn.png";
                    listalph.addEventListener("mouseover",()=>{
                        listalph.src = "images/sorted.png";
                    });
                    listalph.addEventListener("mouseout",()=>{
                        listalph.src = "images/list.png";
                    })
                    

                    for(let i=0;i<massiv.length;i++){
                        massiv[i].innerText = old.sort().reverse()[i]
                    }
                    console.log(listalph.src)
                }
            }
            function refreshh(){
                for(let i=0;i<massiv.length;i++){
                    massiv[i].innerText = old_old[i];
                }


            }
            refresh.addEventListener("click",refreshh);
            // console.log(listalph.src)
            listalph.addEventListener("click",sort);
            my_list.addEventListener("click",(e)=>{
                if(e.target.classList.contains("edit")){
                    searching.style.display = "none";
                    my_data.style.display = "none";
                    my_input.style.display = "block";
                    // let edit_word = e.target.parentElement.innerText;
                    // console.log(new_massiv.indexOf(edit_word));
                    e.target.parentElement.remove()
                }
            })
            my_input.value = "";
            // searchinnnng
            searching.addEventListener('keypress',(e)=>{
                if(e.keyCode == 13){
                    let arr=[...old];
                    

                    let indexes = [], i = -1;
                    while ((i = arr.indexOf(searching.value, i+1)) != -1){
                        indexes.push(i);
                        }
  
                    console.log(indexes)


                    // console.log(searching.value)
                    
                    let count= 0;
                    for(let i of indexes){
                        
                        // console.log(`axtaris neticesi tapildui deyer ${i}`)
                        // let index_of_element = old.indexOf(i)
                        // indexs = []
                        // indexs.push(i)
                        massiv[i].style.backgroundColor = "red";    
                        
                    }
                    
                    // for(let i of result){  
                    //     massiv[old.indexOf(i)].style.backgroundColor = "red"; 
                    // }   
                }
                // let arr=[...new_massiv]
                // let count= 0;
                // for(let i of arr){
                //     if(i == searching.value){
                //         count =1;
                //         let a = searching.value;
                //         break
                //     }
                //     else{
                //         continue
                //     }
                // }
                // if(count == 1){
                //     console.log(`axtaris neticesi tapildi ${a}`);
                // }
                // else{
                //     console.log("axtaris neticesi tapilmadi");
                // }
                // arr.forEach(item=>{
                //     if( !item.textContent.toLowerCase().trim().includes(this.value.toLowerCase().trim())){
                //     item.classList.add('hidden')
                //     }else if(item.textContent.toLowerCase().trim().includes(this.value.toLowerCase().trim())){
                //     item.classList.remove("hidden")
                //     }
                // })
                })
            
// searchinnnn
        }
}

})
// my_list.addEventListener("click",(e)=>{
//     if(e.target.classList.contains("delete_from_list")){
//         e.target.parentElement.remove()  
//     } 
// })
// my_list.addEventListener("click",(e)=>{
//     if(e.target.classList.contains("edit")){
//         my_data.style.display = "none";
//         my_input.style.display = "block";
//         let edit_word = e.target.parentElement.innerText;
//         console.log(edit_word);
//         e.target.parentElement.remove()
//     }
// })
