const input = document.getElementById("inputText")
const check = document.getElementById("check")

function vowelCounter(string) {
    let num = 0
    for (let i= 0;i<string.length;i++){
            let str = string.charAt(i)
            let news = str.toLowerCase()
            if ( news=== "a"|| news === "e" || news === "i" || news === "o" || news === "u"){
                num += 1
        }
    }
    alert(num)
    input.value = ""
}


check.addEventListener("click",function () {
    vowelCounter(input.value)
})