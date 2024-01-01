function FistName(call) {
    setTimeout(()=>{
        console.log("hello")
    call()

    },2000)
}
function LastName() {
    console.log("world")
}
FistName(LastName)
