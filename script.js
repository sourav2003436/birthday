const app = document.getElementById('app');
const music = document.getElementById('birthday-music');

document.body.insertAdjacentHTML('beforeend', `<div id="modal" class="modal" onclick="this.style.display='none'"><img id="modal-img"></div>`);

const scenes = {
    start: `<div class="scene"><h1>Surprise for Nishu! 💖🎂✨</h1><p>Ready for your adventure? 🌹🎀</p><button class="btn" onclick="show('q1')">Enter 🎁💖</button></div>`,
    q1: `<div class="scene"><h1>Do you want to see the surprise? 🍬🍭</h1><button class="btn" onclick="show('q2')">Yes! 💖✨</button></div>`,
    q2: `<div class="scene"><h1>Really? Do you want to see the surprise? 🌹🍰</h1><button class="btn" onclick="show('birth')">Yes! 😍💞</button><button class="btn" onclick="alert('No choice! 😜💖')">No ❌</button></div>`,
    birth: `<div class="scene"><h1>Enter Sourav's Year of Birth 🎀✨</h1><input type="number" id="year" placeholder="YYYY"><br><br><button class="btn" onclick="checkYear()">Submit 🎁🍰</button></div>`,
    puzzle: `<div class="scene"><h1>Solve the puzzle 🧩🌹💖</h1><div id="puzzle-board"></div></div>`,
    memories: `<div class="scene"><h1>Our Memories 📸💖✨</h1><div class="gallery-grid" id="grid"></div><button id="final-btn" class="btn" onclick="show('message')">Final Surprise 🎁🌹</button></div>`,
    message: `<div class="scene"><h1>To My Special Girl, Nishu 💖🌹🎂</h1><p>Happy Birthday, Nishu! Many many returns of the day... my cute sweet lady. Lifetime jhelna hai, be prepared! 😜💕✨🎁</p></div>`
};

function show(scene) {
    app.innerHTML = scenes[scene];
    if(scene === 'puzzle') createPuzzle();
    if(scene === 'memories') loadMemories();
    if(scene !== 'start') music.play().catch(()=>{});
}

function checkYear() {
    if(document.getElementById('year').value === '2003') show('puzzle');
    else alert('Wrong year! Try again 🌹');
}

function createPuzzle() {
    const board = document.getElementById('puzzle-board');
    for(let i=0; i<9; i++) {
        const div = document.createElement('div');
        div.className = 'puzzle-piece';
        div.style.backgroundImage = "url('images/image1.png')";
        div.style.backgroundPosition = `-${(i%3)*100}px -${Math.floor(i/3)*100}px`;
        div.onclick = () => { div.style.opacity = '0.3'; if(document.querySelectorAll('.puzzle-piece[style*="opacity: 0.3"]').length === 9) show('memories'); };
        board.appendChild(div);
    }
}

function loadMemories() {
    const grid = document.getElementById('grid');
    for(let i=1; i<=20; i++) {
        const img = document.createElement('img');
        img.src = `images/image${i}.png`;
        img.className = 'gallery-img';
        img.onclick = () => { document.getElementById('modal-img').src = img.src; document.getElementById('modal').style.display = 'flex'; };
        grid.appendChild(img);
    }
}

show('start');