console.log('tic tack')




function setTimer(node) {

    let now = new Date();
    let time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    node.textContent = time;

}
