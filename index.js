
function superbowlWin(array) {
    let ret = array.find((obj) => {
        return obj.result == "W"
    })
    if (ret){
        return ret.year;
    }
    else {return undefined}
}