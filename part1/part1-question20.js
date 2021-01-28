function run() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
    console.log(1);
}
var i = setInterval(run, 1000);
