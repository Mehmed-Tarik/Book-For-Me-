const router = require('express').Router()
let BookCard = require('../models/BookCard.model')

router.route('/:filters/:genres').get((req,res) => {

    console.log('222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222');
    
    let f = req.params.filters
        f = f.toString()
    let filterArray = []
    let coma = ','
    filterArray = f.split(coma)
    
    let Ganres = req.params.genres
    console.log(Ganres + " +++ +++ ++");
    

    BookCard.find({genre: Ganres}, (err, book) => {
        
        
        
        // Calculate Number Of Matched Filter
        for(let i=0;i<book.length;i++){
            let counter = 0
            for(let j=0;j<(filterArray.length-1);j++){
                
                if(book[i].filters[j].toString() === filterArray[j].toString()){
                    
                    counter++
                    
                }
            }
            
            book[i].matched = counter
        }
        
        // Based on Matched Filter Display Message and order it 
        for(let i=0;i<book.length;i++){
            
            if(book[i].matched === 13){
                book[i].matchedMessage = 'Best Match'
            } else if(book[i].matched < 13 && book[i].matched >= 12) {
                book[i].matchedMessage = 'Great Match'
            } else if(book[i].matched < 12 && book[i].matched >= 10) {
                book[i].matchedMessage = 'Good Match'
            } else if(book[i].matched < 10 && book[i].matched >= 8) {
                book[i].matchedMessage = 'Average Match'
            } else {
                book[i].matchedMessage = ''
            }
        }

        let len = book.length;
        for (let i = 0; i < (len - 1); i++) {
            for (let j = 0; j < (len - 1); j++) {
                if (book[j].matched < book[j + 1].matched) {
                    let tmp = book[j];
                    book[j] = book[j + 1];
                    book[j + 1] = tmp;
                }
            }
        }

        res.json(book)
        
    })
})

module.exports = router