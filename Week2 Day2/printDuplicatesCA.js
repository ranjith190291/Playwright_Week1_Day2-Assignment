//Class Assignment to print the Duplicates

let Duplicates = [23, 34, 54, 76, 75, 75, 23, 54, 90];

for (let i=0; i<Duplicates.length; i++) {
    for(let j=i+1; j<Duplicates.length; j++)
        if(Duplicates[i] === Duplicates[j])
            console.log(Duplicates[i]);
}
