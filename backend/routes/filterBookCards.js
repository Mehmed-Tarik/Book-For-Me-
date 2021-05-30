const router = require('express').Router()
let BookCard = require('../models/BookCard.model')

// Filtered Rest Api Calls 
// router.route('/filteredBooks/add').post((req,res) => {
// http://localhost:8080/filteredBooks/:author/:authorNationa/:bookGanre/:mainCharacterNation
// only author
router.route('/:author/:filters').get((req,res) => {

    console.log('### ### ### ### ### ### ### ### ### ### ### ### #####');
    
    let f = req.params.filters
        f = f.toString()
    let filterArray = []
    let coma = ','
    filterArray = f.split(coma)
    
    let Author = req.params.author.toLocaleLowerCase()

    BookCard.find({authorName: Author}, (err, book) => {
        
        
        
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
// nothing exept filters
router.route('/:filters').get((req,res) => {
    
    console.log('$$$ $$$ $$$ $$$ $$$ $$$ $$$ $$$ $$$ $$$ $$$ $$$ $$$ $$$ $$$ $$$');
    let f = req.params.filters
        f = f.toString()
    let filterArray = []
    let coma = ','
    filterArray = f.split(coma)

    let start = parseInt(req.query.start); 
    let limit = parseInt(req.query.limit);
    

    
    BookCard.find((err, book) => {
    
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
        
    }).limit(limit).skip(start, (err, docs) => {
        //res.json(docs);
    })
    .catch(err => res.status(400).json(`Error: ${err}`))
})
//------------------------------------------------------------------------------------
router.route('/:author/:filters/:genres').get((req,res) => {

    console.log('--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---');

    let f = req.params.filters
        f = f.toString()
    let filterArray = []
    let coma = ','
    filterArray = f.split(coma)
    
    let Ganres = req.params.genres

    let Author = req.params.author.toLocaleLowerCase()

    BookCard.find({ $and: [{genre: Ganres},{authorName: Author}]}, (err, book) => {
        
        //console.log(docs);
        //docs.numberOfMatches = result
        
        
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
//------------------------------------------------------------------------------------
router.route('/:author/:filters/:genres/:authorNat').get((req,res) => {

    console.log('--- +++ --- +++ --- +++ --- +++ --- +++ --- +++ --- +++ --- +++ ---');

    let f = req.params.filters
        f = f.toString()
    let filterArray = []
    let coma = ','
    filterArray = f.split(coma)
    
    let Ganres = req.params.genres.toLocaleLowerCase()

    let Author = req.params.author.toLocaleLowerCase()

    let AuthorNationality = req.params.authorNat

    BookCard.find({ $and: [{genre: Ganres},{authorName: Author},{authorNacionality: AuthorNationality}]}, (err, book) => {
        
        //console.log(docs);
        //docs.numberOfMatches = result
        
        
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
//------------------------------------------------------------------------------------
router.route('/:author/:filters/:genres/:authorNat/:charNat').get((req,res) => {

    console.log('*** +++ *** +++ *** +++ *** +++ *** +++ *** +++ *** +++ *** +++ ***');

    let f = req.params.filters
        f = f.toString()
    let filterArray = []
    let coma = ','
    filterArray = f.split(coma)
    
    let Ganres = req.params.genres.toLocaleLowerCase()

    let Author = req.params.author.toLocaleLowerCase()

    let AuthorNationality = req.params.authorNat.toLocaleLowerCase()

    let characterNation = req.params.charNat.toLocaleLowerCase()

    BookCard.find({ $and: [{genre: Ganres},{authorName: Author},{authorNacionality: AuthorNationality},{mainCarNationality: characterNation}]}, (err, book) => {
        
        //console.log(docs);
        //docs.numberOfMatches = result
        
        
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