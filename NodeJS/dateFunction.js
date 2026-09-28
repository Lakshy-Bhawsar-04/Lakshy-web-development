let d = new Date();
console.log(d);

console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getMonth());
console.log(d.getSeconds());
console.log(d.getMilliseconds());


function showTime() {
    let d = new Date(); h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    // console.log(h + ":" + m + ":" + s);
    console.log(`${h}:${m}:${s}`);
}

setInterval(showTime, 1000);

