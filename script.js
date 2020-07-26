document.addEventListener('DOMContentLoaded', () => {

    const brush = {
        active: false,
        moving: false,
        pos: { x: 0, y: 0},
        prevPos:{ x: 0, y: 0}
    }

    const board = document.querySelector('#board')
    const context = board.getContext('2d')

    board.width = 1200;
    board.height = 600;

    context.lineWidth = 5;

    const drawLine = (line) => {
        context.beginPath()
        context.moveTo(line.prevPos.x, line.prevPos.y)
        context.lineTo(line.pos.x, line.pos.y)
        context.stroke()
    }

    board.onmousedown = (event) => {brush.active = true}
    board.onmouseup = (event) => {brush.active = false}
    
    board.onmousemove = (event) => {
        const posY = event.clientY - 37
        brush.pos.x = event.clientX
        brush.pos.y = posY
        brush.moving = true
    }

    const cicle = () => {
        if(brush.active && brush.moving && brush.prevPos){
            drawLine({pos: brush.pos, prevPos: brush.prevPos})
            brush.moving = false
        }
        brush.prevPos = { x: brush.pos.x, y: brush.pos.y }

        setTimeout(cicle, 10)
    }
    cicle()

})