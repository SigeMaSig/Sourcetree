const ratingobj = {
    rating : [],
    rateit (rating){
        if (rating){
            this.rating.push(rating);
        }
        const total = this.rating.reduce((x,y) => x+y)
        return total /this.rating.length;
    }
}
ratingobj.rateit(10);
ratingobj.rateit(20);
ratingobj.rateit(30);
ratingobj.rateit(40);
ratingobj.rateit(50);
ratingobj.rateit(60);

const avgRating = ratingobj.rateit();
console.log(avgRating)