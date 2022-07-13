// queue implemetations using functions.

function pushData(queue, data) {
    queue.push(data);
}

function popData(queue) {
    return queue.shift();
}

var queue = [];
pushData(queue, 10);
pushData(queue, 20);
pushData(queue, "ABC");
console.log("Current state of Queue: " + JSON.stringify(queue));

pushData(queue, 34.56);
console.log("After one more push: " + JSON.stringify(queue));

console.log("first pop : " + popData(queue));
console.log("Secons pop : " + popData(queue));

console.log("Final state of queue: " + JSON.stringify(queue));