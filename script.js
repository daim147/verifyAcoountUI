const cods = document.querySelectorAll(".code")
cods[0].focus()

// cods.forEach((code, idx) =>{
//     code.addEventListener("keyup", (e) =>{
//         if(e.key >= 0 && e.key <= 9 ){
//             cods[idx].value = ''
//             code.value = e.key
//                 cods[idx + 1].focus()
//             // setTimeout(()=>{
//             // },100)
//             // code.value = e.key
//             // console.log(typeof(e.key))
//             // setTimeout(()=>{

//             //     cods[idx].value = ''
//             // },1000)

//         // setTimeout(()=>{
//         //     console.log(code.value)
//         //     console.log(idx,"idx")
//         //     cods[idx + 1].focus()
//         // },10)
          
//         }
//         else if(e.key === "Backspace"){
//             // setTimeout(()=>{
            
//             // },10)
//             cods[idx].value = ''
//             cods[idx - 1].focus()
//             // cods[idx - 1].focus()
//         }
//     })
// })
cods.forEach((code, idx) =>{
    code.addEventListener("keydown", (e) =>{
        if(e.key >= 0 && e.key <= 9 ){
      
            code.value = ''
            setTimeout(()=>{
                
                cods[idx + 1].focus()

            },10)
        }else if(e.key === "Backspace"){
            setTimeout(()=>{
                cods[idx - 1].focus()

            },10)
            

        }
})
})
