function square(arr){
    let index = 0;
    return {
    next: function() {
        if(index < arr.length){
            index++;
            return {value: arr[index -1] * arr[index -1], done: false};
        } else {
            return {done: true};
        }
    }
}
}

const arr = [1, 2, 3, 4, 5];
const sq = square(arr);

for(let i = 0; i <= arr.length; i++){
    console.log(sq.next());
}