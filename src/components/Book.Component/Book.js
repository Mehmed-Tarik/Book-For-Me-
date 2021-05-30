import React, { Component } from 'react'
import axios from 'axios'

import './Book.style.css'

import LandingPage from '../Book.Component/LandingPage'
import Filters from './Filters'
import BookList from './BookList'

export class Book extends Component {
    constructor(props) {
        super(props)

    
        this.state = {
            bookCards: [],
            author: '',
            authorNationa: '',
            mainCharacterNation: '',
            filtersArray: [],
            filterButtonColor: [],
            colorChanger1: 0,
            colorChanger2: 0,
            colorChanger3: 0,
            colorChanger4: 0,
            colorChanger5: 0,
            colorChanger6: 0,
            colorChanger7: 0,
            colorChanger8: 0,
            colorChanger9: 0,
            colorChanger10: 0,
            colorChanger11: 0,
            colorChanger12: 0,
            colorChanger13: 0,
            colorChanger14: 0,
            start: 0,
            limit: 9,
            genreArray: [],
            genre: '',
            iconHistory: 'https://img.icons8.com/cute-clipart/50/000000/anubis.png',
            genreCounter1: 0,
            iconFantasy: 'https://img.icons8.com/cute-clipart/50/000000/fantasy.png',
            genreCounter2: 0,
            iconBiography: 'https://img.icons8.com/cute-clipart/50/000000/book.png',
            genreCounter3: 0,
            iconRomance: 'https://img.icons8.com/cute-clipart/50/000000/like.png',
            genreCounter4: 0,
            iconReligion: 'https://img.icons8.com/cute-clipart/50/000000/solar-cross.png',
            genreCounter5: 0,
            iconAdventure: 'https://img.icons8.com/cute-clipart/50/000000/quest.png',
            genreCounter6: 0

        }
        this.getBooks()

    }
    getBooks = () => {
        
        let colors =          []
        let trueOrFalse =     []
        let genreInitialArr = []

        for(let i=0;i<14;i++){
            colors[i] = 'https://img.icons8.com/flat_round/64/000000/delete-sign.png'
        }
        for(let i=0;i<14;i++){
            trueOrFalse[i] = false
        }
        //---------------------------------------------------------------------------------------------------------------------------------
        for(let i=0;i<10;i++){
            genreInitialArr[i] = undefined
        }

        
        axios.get('http://localhost:8080/bookcard/')
        .then(response => {

            if(response.data.length > 0) {
                this.setState({
                    bookCards: response.data.map(book => book)
                },() => {
                  
                    
                })
            }
        })
        .then(() => {
            this.setState({
                filterButtonColor: colors,
                filtersArray: trueOrFalse,
                genreArray: genreInitialArr
            },() => {
                console.log(this.state.filterButtonColor + " *******");
                console.log(this.state.filtersArray + " ---------------");
                
            })
        })
    }

    // ovde svi methodi se pisu .... 
    handleAuthor = (e) => {
        this.setState({
            author: e.target.value
        },() => {
            console.log(this.state.author);
            
        })
    }
    handleAuthorNationality = (e) => {
        this.setState({
            authorNationa: e.target.value
        },() => {
            console.log(this.state.authorNationa);
            
        })
    }
    handleMainCharacterNation = (e) => {
        this.setState({
            mainCharacterNation: e.target.value
        },() => {
            console.log(this.state.mainCharacterNation);
            
        })
    }

    //------------------- S U B M I T - F I L T E R - T O - D A T A B A S E -------------------

    filterData = (e) => {
        e.preventDefault()


        let filteredGenre = this.state.genreArray.filter(el => {
            return el != null
        })
        
        
        console.log(this.state.authorNationa + ' ** ** ** ** ** ');
        console.log(this.state.mainCharacterNation + ' ** ** ** ** ** ');

        if(this.state.author === '' && this.state.authorNationa === '' && this.state.mainCharacterNation === '' && filteredGenre.length != 0){

        axios.get(`http://localhost:8080/filteredBooksTwo/${this.state.filtersArray}/${filteredGenre}`)
        .then(response => {

            
            if(response.data.length > 0) {
                console.log('heey222');
                this.setState({
                    bookCards: response.data.map(book => book)
                },() => {
                    console.log(this.state.bookCards + " ***");
                    for(let i=0;i<this.state.bookCards.length;i++){
                        console.log(this.state.bookCards[i]);
                        
                    }
                    console.log(this.state.bookCards[0].filters);
                    
                })
            }
        })
        //-------------------------------------------------------------------------------------------------------------------------------------------
    } else {
        axios.get(`http://localhost:8080/filteredBooks/${this.state.filtersArray}?limit=${this.state.limit}&start=${this.state.start}`)
        .then(response => {

            
            if(response.data.length > 0) {
                console.log('heey222');
                this.setState({
                    bookCards: response.data.map(book => book)
                },() => {
                    console.log(this.state.bookCards + " ***");
                    for(let i=0;i<this.state.bookCards.length;i++){
                        console.log(this.state.bookCards[i]);
                        
                    }
                    console.log(this.state.bookCards[0].filters);
                    
                })
            }
        })

  //  } else {
        //-----------------------------------------------------------------------------------------------------
        axios.get(`http://localhost:8080/filteredBooks/${this.state.author}/${this.state.filtersArray}`)
        .then(response => {


            if(response.data.length > 0) {
                this.setState({
                    bookCards: response.data.map(book => book)
                },() => {
                    console.log(this.state.bookCards);
                    console.log(this.state.bookCards[0].filters);
                    
                })
            }
        })
        //-------------------------------------------------------------------------------------------------
        axios.get(`http://localhost:8080/filteredBooks/${this.state.author}/${this.state.filtersArray}/${filteredGenre}`)
        .then(response => {


            if(response.data.length > 0) {
                this.setState({
                    bookCards: response.data.map(book => book)
                },() => {
                    console.log(this.state.bookCards);
                    console.log(this.state.bookCards[0].filters);
                    
                })
            }
        })
   // }
        //------------------------------------------------------------------------------------------------------------------
        axios.get(`http://localhost:8080/filteredBooks/${this.state.author}/${this.state.filtersArray}/${filteredGenre}/${this.state.authorNationa}`)
        .then(response => {


            if(response.data.length > 0) {
                this.setState({
                    bookCards: response.data.map(book => book)
                },() => {
                    console.log(this.state.bookCards);
                    console.log(this.state.bookCards[0].filters);
                    
                })
            }
        })
        //------------------------------------------------------------------------------------------------------------------
        axios.get(`http://localhost:8080/filteredBooks/${this.state.author}/${this.state.filtersArray}/${filteredGenre}/${this.state.authorNationa}/${this.state.mainCharacterNation}`)
        .then(response => {
    
        
                if(response.data.length > 0) {
                this.setState({
                    bookCards: response.data.map(book => book)
                },() => {
                    console.log(this.state.bookCards);
                    console.log(this.state.bookCards[0].filters);
                    
                })
            }
        })
    }


    }
    //------------------------ Filters Slick Cards ----------------------------

    handleHistory = (e) => {
        e.preventDefault()

        let genreTempArray = this.state.genreArray

            if(this.state.genreCounter1 === 0 || this.state.genreCounter1 % 2 === 0){
                this.setState({
                    genre: 'history',
                    iconHistory: 'https://img.icons8.com/office/50/000000/checked.png'
                },() => {
                    console.log(this.state.genre + "   ## ## ** ** ## ##");
                    genreTempArray[0] = this.state.genre
                })
            } else {
                this.setState({
                    genre: '',
                    iconHistory: 'https://img.icons8.com/cute-clipart/50/000000/anubis.png'
                },() => {
                    console.log(this.state.genre + "   ## ## ** ** ## ##");
                    genreTempArray[0] = undefined // poslije kad budem uploudo onda obrisati sve UNDEFINED !
                }) 
            }
            this.setState({
                genreArray: genreTempArray
            },() => {
                console.log(this.state.genreArray);
                
            })

            this.setState({genreCounter1: this.state.genreCounter1 + 1})
    }

    handleFantasy = (e) => {
        e.preventDefault()

        let genreTempArray = this.state.genreArray

        if(this.state.genreCounter2 === 0 || this.state.genreCounter2 % 2 === 0){
            this.setState({
                genre: 'fantasy',
                iconFantasy: 'https://img.icons8.com/office/50/000000/checked.png'
            },() => {
                console.log(this.state.genre + "   ## ## ** ** ## ##");
                genreTempArray[1] = this.state.genre
            })
        } else {
            this.setState({
                genre: '',
                iconFantasy: 'https://img.icons8.com/cute-clipart/50/000000/fantasy.png'
            },() => {
                console.log(this.state.genre + "   ## ## ** ** ## ##");
                genreTempArray[1] = undefined
            })
        }
        this.setState({
            genreArray: genreTempArray
        },() => {
            console.log(this.state.genreArray);
            
        })

        this.setState({genreCounter2: this.state.genreCounter2 + 1})

    }

    handleBiography = (e) => {
        e.preventDefault()

        let genreTempArray = this.state.genreArray

        if(this.state.genreCounter3 === 0 || this.state.genreCounter3 % 2 === 0){
            this.setState({
                genre: 'biography',
                iconBiography: 'https://img.icons8.com/office/50/000000/checked.png'
            },() => {
                console.log(this.state.genre + "   ## ## ** ** ## ##");
                genreTempArray[2] = this.state.genre
            })
        } else {
            this.setState({
                genre: '',
                iconBiography: 'https://img.icons8.com/cute-clipart/50/000000/book.png'
            },() => {
                console.log(this.state.genre + "   ## ## ** ** ## ##");
                genreTempArray[2] = undefined // poslije kad budem uploudo onda obrisati sve UNDEFINED !
            }) 
        }
        this.setState({
            genreArray: genreTempArray
        },() => {
            console.log(this.state.genreArray);
            
        })

        this.setState({genreCounter3: this.state.genreCounter3 + 1})
    }

    handleRomance = (e) => {
        e.preventDefault()

        let genreTempArray = this.state.genreArray

        if(this.state.genreCounter4 === 0 || this.state.genreCounter4 % 2 === 0){
            this.setState({
                genre: 'romance',
                iconRomance: 'https://img.icons8.com/office/50/000000/checked.png'
            },() => {
                console.log(this.state.genre + "   ## ## ** ** ## ##");
                genreTempArray[3] = this.state.genre
            })
        } else {
            this.setState({
                genre: '',
                iconRomance: 'https://img.icons8.com/cute-clipart/50/000000/like.png'
            },() => {
                console.log(this.state.genre + "   ## ## ** ** ## ##");
                genreTempArray[3] = undefined // poslije kad budem uploudo onda obrisati sve UNDEFINED !
            }) 
        }
        this.setState({
            genreArray: genreTempArray
        },() => {
            console.log(this.state.genreArray);
            
        })

        this.setState({genreCounter4: this.state.genreCounter4 + 1})

    }

    handleReligion = (e) => {
        e.preventDefault()

        let genreTempArray = this.state.genreArray

        if(this.state.genreCounter5 === 0 || this.state.genreCounter5 % 2 === 0){
            this.setState({
                genre: 'religion',
                iconReligion: 'https://img.icons8.com/office/50/000000/checked.png'
            },() => {
                console.log(this.state.genre + "   ## ## ** ** ## ##");
                genreTempArray[4] = this.state.genre
            })
        } else {
            this.setState({
                genre: '',
                iconReligion: 'https://img.icons8.com/cute-clipart/50/000000/solar-cross.png'
            },() => {
                console.log(this.state.genre + "   ## ## ** ** ## ##");
                genreTempArray[4] = undefined // poslije kad budem uploudo onda obrisati sve UNDEFINED !
            }) 
        }
        this.setState({
            genreArray: genreTempArray
        },() => {
            console.log(this.state.genreArray);
            
        })

        this.setState({genreCounter5: this.state.genreCounter5 + 1})
    }

    handleAdventure = (e) => {
        e.preventDefault()

        let genreTempArray = this.state.genreArray

        if(this.state.genreCounter6 === 0 || this.state.genreCounter6 % 2 === 0){
            this.setState({
                genre: 'adventure',
                iconAdventure: 'https://img.icons8.com/office/50/000000/checked.png'
            },() => {
                console.log(this.state.genre + "   ## ## ** ** ## ##");
                genreTempArray[5] = this.state.genre
            })
        } else {
            this.setState({
                genre: '',
                iconAdventure: 'https://img.icons8.com/cute-clipart/50/000000/quest.png'
            },() => {
                console.log(this.state.genre + "   ## ## ** ** ## ##");
                genreTempArray[5] = undefined // poslije kad budem uploudo onda obrisati sve UNDEFINED !
            }) 
        }
        this.setState({
            genreArray: genreTempArray
        },() => {
            console.log(this.state.genreArray);
            
        })

        this.setState({genreCounter6: this.state.genreCounter6 + 1})
    }

    //------------------------ Filters Button Methods -------------------------
    handleHappy = (e) => {
        e.preventDefault()
        
        let color = this.state.filterButtonColor
        let arrayOfButtons = this.state.filtersArray
        
        if(this.state.colorChanger1 === 0 || this.state.colorChanger1 % 2 == 0){
            color[0] = 'https://img.icons8.com/office/64/000000/checked.png'
            arrayOfButtons[0] = true
        } else {
            color[0] = 'https://img.icons8.com/flat_round/64/000000/delete-sign.png'
            arrayOfButtons[0] = false
        }
        this.setState({
            filterButtonColor: color 
        },() => {
            this.setState({
                colorChanger1: this.state.colorChanger1 + 1
            },() => {
                console.log(this.state.colorChanger1);
                
            })
            
        })
        this.setState({
            filtersArray: arrayOfButtons
        },() => {
            console.log(this.state.filtersArray);
            
        })


    }
    handleSad = (e) => {
        e.preventDefault()

        let color = this.state.filterButtonColor
        let arrayOfButtons = this.state.filtersArray

        if(this.state.colorChanger2 === 0 || this.state.colorChanger2 % 2 == 0){
            color[1] = 'https://img.icons8.com/office/64/000000/checked.png'
            arrayOfButtons[1] = true
        } else {
            color[1] = 'https://img.icons8.com/flat_round/64/000000/delete-sign.png'
            arrayOfButtons[1] = false
        }
        this.setState({
            filterButtonColor: color 
        },() => {
            this.setState({
                colorChanger2: this.state.colorChanger2 + 1
            },() => {
                console.log(this.state.colorChanger2);
                
            })
            
        })
        this.setState({
            filtersArray: arrayOfButtons
        },() => {
            console.log(this.state.filtersArray);
            
        })
    }
    handleHS = (e) => {
        e.preventDefault()

        let color = this.state.filterButtonColor
        let arrayOfButtons = this.state.filtersArray

        if(this.state.colorChanger3 === 0 || this.state.colorChanger3 % 2 == 0){
            color[2] = 'https://img.icons8.com/office/64/000000/checked.png'
            arrayOfButtons[2] = true
        } else {
            color[2] = 'https://img.icons8.com/flat_round/64/000000/delete-sign.png'
            arrayOfButtons[2] = false
        }
        this.setState({
            filterButtonColor: color 
        },() => {
            this.setState({
                colorChanger3: this.state.colorChanger3 + 1
            },() => {
                console.log(this.state.colorChanger3);
                
            })
            
        })
        this.setState({
            filtersArray: arrayOfButtons
        },() => {
            console.log(this.state.filtersArray);
            
        })
    }
    handleSerious = (e) => {
        e.preventDefault()

        let color = this.state.filterButtonColor
        let arrayOfButtons = this.state.filtersArray

        if(this.state.colorChanger4 === 0 || this.state.colorChanger4 % 2 == 0){
            color[3] = 'https://img.icons8.com/office/64/000000/checked.png'
            arrayOfButtons[3] = true
        } else {
            color[3] = 'https://img.icons8.com/flat_round/64/000000/delete-sign.png'
            arrayOfButtons[3] = false
        }
        this.setState({
            filterButtonColor: color 
        },() => {
            this.setState({
                colorChanger4: this.state.colorChanger4 + 1
            },() => {
                console.log(this.state.colorChanger4);
                
            })
            
        })
        this.setState({
            filtersArray: arrayOfButtons
        },() => {
            console.log(this.state.filtersArray);
            
        })
    }
    handleFunny = (e) => {
        e.preventDefault()

        let color = this.state.filterButtonColor
        let arrayOfButtons = this.state.filtersArray

        if(this.state.colorChanger5 === 0 || this.state.colorChanger5 % 2 == 0){
            color[4] = 'https://img.icons8.com/office/64/000000/checked.png'
            arrayOfButtons[4] = true
        } else {
            color[4] = 'https://img.icons8.com/flat_round/64/000000/delete-sign.png'
            arrayOfButtons[4] = false
        }
        this.setState({
            filterButtonColor: color 
        },() => {
            this.setState({
                colorChanger5: this.state.colorChanger5 + 1
            },() => {
                console.log(this.state.colorChanger5);
                
            })
            
        })
        this.setState({
            filtersArray: arrayOfButtons
        },() => {
            console.log(this.state.filtersArray);
            
        })
    }
    handleSF = (e) => {
        e.preventDefault()

        let color = this.state.filterButtonColor
        let arrayOfButtons = this.state.filtersArray

        if(this.state.colorChanger6 === 0 || this.state.colorChanger6 % 2 == 0){
            color[5] = 'https://img.icons8.com/office/64/000000/checked.png'
            arrayOfButtons[5] = true
        } else {
            color[5] = 'https://img.icons8.com/flat_round/64/000000/delete-sign.png'
            arrayOfButtons[5] = false
        }
        this.setState({
            filterButtonColor: color 
        },() => {
            this.setState({
                colorChanger6: this.state.colorChanger6 + 1
            },() => {
                console.log(this.state.colorChanger6);
                
            })
            
        })
        this.setState({
            filtersArray: arrayOfButtons
        },() => {
            console.log(this.state.filtersArray);
            
        })
    }
    handleExpected = (e) => {
        e.preventDefault()

        let color = this.state.filterButtonColor
        let arrayOfButtons = this.state.filtersArray

        if(this.state.colorChanger7 === 0 || this.state.colorChanger7 % 2 == 0){
            color[6] = 'https://img.icons8.com/office/64/000000/checked.png'
            arrayOfButtons[6] = true
        } else {
            color[6] = 'https://img.icons8.com/flat_round/64/000000/delete-sign.png'
            arrayOfButtons[6] = false
        }
        this.setState({
            filterButtonColor: color 
        },() => {
            this.setState({
                colorChanger7: this.state.colorChanger7 + 1
            },() => {
                console.log(this.state.colorChanger7);
                
            })
            
        })
        this.setState({
            filtersArray: arrayOfButtons
        },() => {
            console.log(this.state.filtersArray);
            
        })
    }
    handleUnExpected = (e) => {
        e.preventDefault()

        let color = this.state.filterButtonColor
        let arrayOfButtons = this.state.filtersArray

        if(this.state.colorChanger8 === 0 || this.state.colorChanger8 % 2 == 0){
            color[7] = 'https://img.icons8.com/office/64/000000/checked.png'
            arrayOfButtons[7] = true
        } else {
            color[7] = 'https://img.icons8.com/flat_round/64/000000/delete-sign.png'
            arrayOfButtons[7] = false
        }
        this.setState({
            filterButtonColor: color 
        },() => {
            this.setState({
                colorChanger8: this.state.colorChanger8 + 1
            },() => {
                console.log(this.state.colorChanger8);
                
            })
            
        })
        this.setState({
            filtersArray: arrayOfButtons
        },() => {
            console.log(this.state.filtersArray);
            
        })
    }
    handleGentle = (e) => {
        e.preventDefault()

        let color = this.state.filterButtonColor
        let arrayOfButtons = this.state.filtersArray

        if(this.state.colorChanger9 === 0 || this.state.colorChanger9 % 2 == 0){
            color[8] = 'https://img.icons8.com/office/64/000000/checked.png'
            arrayOfButtons[8] = true
        } else {
            color[8] = 'https://img.icons8.com/flat_round/64/000000/delete-sign.png'
            arrayOfButtons[8] = false
        }
        this.setState({
            filterButtonColor: color 
        },() => {
            this.setState({
                colorChanger9: this.state.colorChanger9 + 1
            },() => {
                console.log(this.state.colorChanger9);
                
            })
            
        })
        this.setState({
            filtersArray: arrayOfButtons
        },() => {
            console.log(this.state.filtersArray);
            
        })
    }
    handleViolent = (e) => {
        e.preventDefault()

        let color = this.state.filterButtonColor
        let arrayOfButtons = this.state.filtersArray

        if(this.state.colorChanger10 === 0 || this.state.colorChanger10 % 2 == 0){
            color[9] = 'https://img.icons8.com/office/64/000000/checked.png'
            arrayOfButtons[9] = true
        } else {
            color[9] = 'https://img.icons8.com/flat_round/64/000000/delete-sign.png'
            arrayOfButtons[9] = false
        }
        this.setState({
            filterButtonColor: color 
        },() => {
            this.setState({
                colorChanger10: this.state.colorChanger10 + 1
            },() => {
                console.log(this.state.colorChanger10);
                
            })
            
        })
        this.setState({
            filtersArray: arrayOfButtons
        },() => {
            console.log(this.state.filtersArray);
            
        })
    }
    handleGV = (e) => {
        e.preventDefault()

        let color = this.state.filterButtonColor
        let arrayOfButtons = this.state.filtersArray

        if(this.state.colorChanger11 === 0 || this.state.colorChanger11 % 2 == 0){
            color[10] = 'https://img.icons8.com/office/64/000000/checked.png'
            arrayOfButtons[10] = true
        } else {
            color[10] = 'https://img.icons8.com/flat_round/64/000000/delete-sign.png'
            arrayOfButtons[10] = false
        }
        this.setState({
            filterButtonColor: color 
        },() => {
            this.setState({
                colorChanger11: this.state.colorChanger11 + 1
            },() => {
                console.log(this.state.colorChanger11);
                
            })
            
        })
        this.setState({
            filtersArray: arrayOfButtons
        },() => {
            console.log(this.state.filtersArray);
            
        })
    }
    handleOrdinary = (e) => {
        e.preventDefault()

        let color = this.state.filterButtonColor
        let arrayOfButtons = this.state.filtersArray

        if(this.state.colorChanger12 === 0 || this.state.colorChanger12 % 2 == 0){
            color[11] = 'https://img.icons8.com/office/64/000000/checked.png'
            arrayOfButtons[11] = true
        } else {
            color[11] = 'https://img.icons8.com/flat_round/64/000000/delete-sign.png'
            arrayOfButtons[11] = false
        }
        this.setState({
            filterButtonColor: color 
        },() => {
            this.setState({
                colorChanger12: this.state.colorChanger12 + 1
            },() => {
                console.log(this.state.colorChanger12);
                
            })
            
        })
        this.setState({
            filtersArray: arrayOfButtons
        },() => {
            console.log(this.state.filtersArray);
            
        })
    }
    handleUnusual = (e) => {
        e.preventDefault()

        let color = this.state.filterButtonColor
        let arrayOfButtons = this.state.filtersArray

        if(this.state.colorChanger13 === 0 || this.state.colorChanger13 % 2 == 0){
            color[12] = 'https://img.icons8.com/office/64/000000/checked.png'
            arrayOfButtons[12] = true
        } else {
            color[12] = 'https://img.icons8.com/flat_round/64/000000/delete-sign.png'
            arrayOfButtons[12] = false
        }
        this.setState({
            filterButtonColor: color 
        },() => {
            this.setState({
                colorChanger13: this.state.colorChanger13 + 1
            },() => {
                console.log(this.state.colorChanger13);
                
            })
            
        })
        this.setState({
            filtersArray: arrayOfButtons
        },() => {
            console.log(this.state.filtersArray);
            
        })
    }
    handleAyes = (e) => {
        e.preventDefault()

        let color = this.state.filterButtonColor
        let arrayOfButtons = this.state.filtersArray

        if(this.state.colorChanger14 === 0 || this.state.colorChanger14 % 2 == 0){
            color[13] = 'https://img.icons8.com/office/64/000000/checked.png'
            arrayOfButtons[13] = true
        } else {
            color[13] = 'https://img.icons8.com/flat_round/64/000000/delete-sign.png'
            arrayOfButtons[13] = false
        }
        this.setState({
            filterButtonColor: color 
        },() => {
            this.setState({
                colorChanger14: this.state.colorChanger14 + 1
            },() => {
                console.log(this.state.colorChanger14);
                
            })
            
        })
        this.setState({
            filtersArray: arrayOfButtons
        },() => {
            console.log(this.state.filtersArray);
            
        })
    }
    
    render() {
        
        return (
            <div>
                <LandingPage history = {this.handleHistory}
                             historyIcon = {this.state.iconHistory}
                             fantasy = {this.handleFantasy}
                             fantasyIcon = {this.state.iconFantasy}
                             biography = {this.handleBiography}
                             biographyIcon = {this.state.iconBiography}
                             romance = {this.handleRomance}
                             romanceIcon = {this.state.iconRomance}
                             religion = {this.handleReligion}
                             religionIcon = {this.state.iconReligion}
                             adventure = {this.handleAdventure}
                             adventureIcon = {this.state.iconAdventure}
                             />
                <div className='row'>
                    <div className='col-md-4  order-1'>
                        <Filters author = {this.handleAuthor}
                                 authorNationa = {this.handleAuthorNationality} 
                                 mainCharacterNation = {this.handleMainCharacterNation}
                                 happy = {this.handleHappy}
                                 sad = {this.handleSad}
                                 hs = {this.handleHS}
                                 serious = {this.handleSerious}
                                 funny = {this.handleFunny}
                                 sf = {this.handleSF}
                                 expected = {this.handleExpected}
                                 unexpected = {this.handleUnExpected}
                                 gentle = {this.handleGentle}
                                 violent = {this.handleViolent}
                                 gv = {this.handleGV}
                                 ordinary = {this.handleOrdinary}
                                 unusual = {this.handleUnusual}
                                 ayes = {this.handleAyes}
                                 filterColor = {this.state.filterButtonColor}
                                 filter = {this.filterData}
                                 />
                    </div>
                    <div className='col-md-8  order-2'>
                     <BookList books = {this.state.bookCards}/> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Book
