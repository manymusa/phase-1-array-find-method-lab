function didWin(element){
    return (element.result === 'W'); 
}


function superbowlWin(arry){
    const result = arry.find(didWin);
    if(result !== undefined){
        return result.year
    } else {
        return result
    }
}


