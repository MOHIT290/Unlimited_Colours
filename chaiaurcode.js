const body = document.querySelector('body')


const randomcolor = () => {

    const hex = "0123456789ABCDEF"
    let str = "#"

    for (let i = 0; i < 6; i++) {
        const ran = Math.floor(Math.random() * 16)
        str += hex[ran]
    }

    return str
}

const changecolor = () => {

    const res = randomcolor()
    body.style.backgroundColor = res

}

let func1

document.getElementById('start').addEventListener('click', () => {

    if(!func1)
    {
        func1 = setInterval(changecolor, 2000)
    }

})

document.getElementById('stop').addEventListener('click', () => {

    clearInterval(func1)
    func1=null
})


