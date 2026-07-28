const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const jogo = document.getElementById('jogo')
const formulario = document.getElementById('formulario')

ctx.fillStyle = "white"


const size = 30

const snake = [
    {x: 200, y:200},
    {x: 230, y:200},
]

//  movimentação
let direcao, loopId

const moveSnake = () => {
    if (!direcao) return

    const head = snake[snake.length - 1]
    

    if (direcao == "right"){
        snake.push({x:head.x + size , y: head.y})
    }
    if (direcao == "left"){
        snake.push({x:head.x - size , y: head.y})
    }
    if (direcao == "up"){
        snake.push({x:head.x, y: head.y - size})
    }
    if (direcao == "down"){
        snake.push({x:head.x, y: head.y + size})
    }
    
    
    snake.shift()
}

// inciar jogo:

document.getElementById('botaoIniciar').addEventListener('click', async () => {
    
    jogo.classList.remove("hidden");
    formulario.classList.add("hidden");

    const drawSnake = () => {
        ctx.fillStyle - '#ddd'
    
        snake.forEach((position, index) =>{
            if (index == snake.length - 1){
                ctx.fillStyle = 'red'
            }
    
            ctx.fillRect(position.x, position.y, size, size)
        })
    }
    
    const gameLoop = () => {
        // limpa o quadro
        clearInterval(loopId)
        ctx.clearRect(0, 0, 600, 600)
    
       
        drawSnake()
        moveSnake()
    
        loopId = setTimeout (() => {
            gameLoop()
        }, 250)
    
    }
        
    gameLoop()

    document.addEventListener("keydown", ({key}) => {
        if (key == "ArrowRight" && direcao != "left") {
            direcao = 'right'
        }
        if (key == "ArrowLeft" && direcao != "right") {
            direcao = 'left'
        }
        if (key == "ArrowUp" && direcao != "down") {
            direcao = 'up'
        }
        if (key == "ArrowDown" && direcao    != "up") {
            direcao = 'down'
        }
    })
})



