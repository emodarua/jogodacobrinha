const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const jogo = document.getElementById('jogo')
const formulario = document.getElementById('formulario')

ctx.fillStyle = "white"


const size = 30

const snake = [
    {x: 210, y:180},
    {x: 240, y:180},
    {x: 270, y:180},
    {x: 300, y:180},
    {x: 330, y:180},
    {x: 360, y:180},
    {x: 390, y:180},
    {x: 420, y:180},
    {x: 450, y:180},
    {x: 480, y:180},
    {x: 510, y:180},
    {x: 540, y:180},
    {x: 570, y:180},
    {x: 600, y:180},
    {x: 630, y:180},
    {x: 660, y:180},
    {x: 690, y:180},
    {x: 720, y:180},
    {x: 750, y:180},
    {x: 780, y:180},
    {x: 820, y:180},
    {x: 850, y:180},

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
        ctx.fillStyle = '#ddd'
    
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
        }, 70)
    
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


