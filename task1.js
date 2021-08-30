var array = [
    [],
    [],
    [],
    []
]
var array2 = [
    [],
    [],
    [],
    []
]
var array4 = [
    [],
    [],
    [],
    []
]

for(i=1; i<17; i++){
    for(j=0; j<4; j++){
        if(array[j].length<1){
            this.array[j].push(i++);
        }
        else if(array[j].length<2){
            this.array[j].push(i++-1);
        }
        else if(array[j].length<3){
            this.array[j].push(i++-2)
        }
        else if(array[j].length<4){
            this.array[j].push(i++-3)
        }
    }
}
console.log(array);

for(k=1; k<17; k++){
    for(l=0; l<4; l++){
        if(array2[l].length<1){
            this.array2[l].push(k++);
        }
        else if(array2[l].length<2){
            this.array2[l].push(k--+2);
        }
        else if(array2[l].length<3){
            this.array2[l].push(k+++6)
        }
        else if(array2[l].length<4){
            this.array2[l].push(k--+8)
        }
    }
}
console.log(array2);

for(i1=1; i1<17; i1++){
    for(j1=0; j1<4; j1++){
        if(array4[j1].length<1){
            this.array4[j1].push(i1++);
        }
        else if(array4[3].length<4){
            this.array4[3].push(i1++-1);
        }
        else if(array4[j1].length<2){
            this.array4[j1].push(i1--+1)
        }
        else if(array4[0].length<4){
            this.array4[0].splice(1,0, i1--)
        }
    }
}
console.log(array4);