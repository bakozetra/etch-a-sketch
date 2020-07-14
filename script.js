console.log('it works');
// select the element on the  page - canavas , shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');

const shake = document.querySelector('.shake');
const MOVE_AMOUNT = 50;


// setup our canvas for drawing
//  object destruction(E6) 
// const {width} = canvas.width; // width = canvas.width
// const {height} = canvas.height; // height = canvas.height 
const { width, height } = canvas;
// random x and y between 0 and width / heigth
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * width);

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%,50% )`;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

// start the drawing 
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
// function 
// 
const draw = ({ Key }) => {
        hue = hue + 10;
        ctx.strokeStyle = `hsl(${Math.random() * 360}, 100% , 50%)`;

        console.log(Key);
        ctx.beginPath();
        ctx.moveTo(x, y);


        switch (Key) {
            case 'ArrowUp':
                y = y - MOVE_AMOUNT;
                break;
            case 'ArrowDown':
                y = y + MOVE_AMOUNT;
                break;
            case 'ArrowLeft':
                x = x - MOVE_AMOUNT;
                break;
            case 'ArrowRight':
                x = x + MOVE_AMOUNT;
                break;
            default:
                break;
        }
        // change x and y
        //x -= MOVE_AMOUNT;
        // y -= MOVE_AMOUNT;

        ctx.lineTo(x, y);
        ctx.stroke();
    }
    /*const  draw = (options) => {
        console.log(options);
    }*/

// write a handler for the  keys ( switch statement);
const handleKey = e => {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ Key: e.key });

    }
};
// 
const clearCanvas = () => {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationed', () => {
            canvas.classList.remove('shake');
        }, { once: true } // if we want to delete addEventlistener
    )
}

// listen for arrow key
window.addEventListener('keydown', handleKey);
shake.addEventListener('click', clearCanvas);