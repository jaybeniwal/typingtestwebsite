let arr = [
    'A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea.',
    'A paragraph is defined as “a group of sentences or a single sentence that forms a unit”. Length and appearance do not determine ',
    'Love involves emotions and behaviors characterized by passion, intimacy, and commitment. While it is usually positive, love is complex and variable.',
    'The true meaning of love is when God gave his only son for the forgives of all our sin. He is a God that dresses himself to become a human so that He will feel what​'
];
const btn = document.getElementById('btn');
const msg = document.getElementById('msg');
const cmsg = document.getElementById('cmsg');
let stime, etime;


const typestart = () => {
    let num = Math.floor(Math.random() * arr.length);
    msg.innerHTML = arr[num];
    stime = new Date().getTime();
}
const counter = (str) => {
    let res = str.split(' ').length;
    console.log(res);
    return res;
}
const typeend = () => {
    if (cmsg.value == '') {
        alert('enter smthing')
    }
    else {
        etime = new Date().getTime();
        const total = (etime - stime) / 1000;
        console.log(total);
        let totalstr = cmsg.value;
        const wordsc = counter(totalstr);
        let speed = Math.round((wordsc / total) * 60);
        msg.innerHTML = `your typing speed is ${speed} words per minutes`

    }
}

btn.addEventListener('click', () => {
    if (btn.innerHTML == 'start') {
        btn.innerHTML = 'done';
        typestart();
    }
    else if (btn.innerHTML == 'done') {
        btn.innerHTML = 'start';
        typeend();
    }
})