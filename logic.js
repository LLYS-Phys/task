var array = [2, 3, 4, 6, 8, 9, 15, 20];
var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function display(){
    for(i=0; i<array.length; i++){
        for(j=0; j<x.length; j++){
            for(k=0; k<y.length; k++){
                if(array[i]%2==0 && array[i]%3==0){
                    console.log(2**x[j]*3**y[k]);
                }
                else if(array[i]%2==0 && array[i]%3!==0){
                    console.log(3**y[k]);
                }
                else if(array[i]%3==0 && array[i]%2!==0){
                    console.log(2**x[j]);
                }
            }
        }
    }
}
//display();

function sort(){
    let xplusy = [];
    for(i=0; i<array.length; i++){    
        for(j=0; j<x.length; j++){
            for(k=0; k<y.length; k++){
                if(array[i]%2!==0){
                    x[j]=0
                };
                if(array[i]%3!==0){
                    y[k]=0
                };
                xplusy.push(x[j]+y[k]);
            }
        }
    }
    console.log(xplusy);
}
//sort();

function sum(){
    let arr = [];
    for(i=1; arr.length<100; i++){
        if(i%2==0 || i%3==0){
            arr.push(i);
        }
    }
    console.log(arr);
    let add = 0;
    for(j=0; j<100; j++){
        add += arr[j];
    }
    console.log(add);
}
//sum();
