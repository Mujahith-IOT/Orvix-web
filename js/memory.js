function saveMemory(entry){
    let log = JSON.parse(localStorage.getItem("orvix_memory")) || [];
    log.push(entry);
    localStorage.setItem("orvix_memory", JSON.stringify(log));
}

function getMemory(){
    return JSON.parse(localStorage.getItem("orvix_memory")) || [];
}

function lastInteraction(){
    let log = getMemory();
    return log.length ? log[log.length - 1] : null;
}
