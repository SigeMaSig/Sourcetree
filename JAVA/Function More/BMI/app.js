const bmiobj = {
    usere : [],
    rateit(usere) {
        if (usere){
            this.usere.push(usere);
        }
        const total = this.usere.reduce((x, y) => x +y);
        console.log(total)
        return total ;
    }
};

console.log(bmiobj.rateit(50));
