let callback = (err,data) => {

    if(err) {
        console.log('>>> Calling callback width err', err)
    }
    if(data) {
        console.log('>>> Calling callback width data',data)
    }

}


function getTodos(id, callback) {

        return new Promise((resolve, reject) => {
                    var request = new XMLHttpRequest();
                    request .onreadystatechange = function() {
                        if (this.readyState === 4 && request.status === 200) {
                        const data = JSON.parse( request.responseText);
                        const dataString =  JSON.stringify(data)
                        // callback(undefined, data);
                            resolve(data)
                        }
            
                        if(this.readyState === 4 && request.status !== 200)   {
                            // callback('Something wrongs', undefined)
                            reject('something wrongs width id' + id)
                        }
                    };
                    request.open("GET", `https://jsonplaceholder.typicode.com/todos/1${id}`, true);
                    request.send();
        })
            
       
}

 
// const getNewTodo = async (id) => {

//     let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//     console.log(' >>> check response: ', response)
//     if(response && response.status !== 200) {
//         throw new Error('Something wrongs width status code: ' + response.status )
//         // reject
//     }
//     let data = await response.json()
//     return data
//         // resolve

// }   


const getNewTodo = async (id) => {
    try {   
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        if(response && response.status !== 200) {
            throw new Error('Something wrongs width status code: ' + response.status )
                    // reject
        }

        let data = await response.json();
        return data
    }catch(e) {
        console.log('check catch err', e.message)
    }
}


// getNewTodo('asdd')
// .then(data => {
//     console.log("check data", data)
// })
// .catch(err => {
//     console.log(" >>> check err", err.message)
// })






// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(Response => {
//       return Response.json()
//     })
//     .then(data => {
//         console.log(' >>> check fetch data',data)
//     })

    
    

// getTodos(1)
// .then(data1 => {
//     console.log('>> check data:1 ', data1)
//     return getTodos(2);
// })
// .then(data2 => {
//     console.log('>>> check data:2', data2)
//     return getTodos(3)
// })
// .then(data3 => {
//     console.log('>>>> check data:3 ', data3)
//     return getTodos(4)
// })
// .then(data4 => {
//     console.log('>>> chec data:4', data4)
//     return getTodos(5)
// })

// .catch(err => {
//     console.log('>> co loi', err)
// })


    // getTodos(1).then(data => {
    //     console.log('>>> get data: ', data)
    // getTodos(2).then(data => {
    //     console.log('>>> get data 2: ', data)
    // })
    // }).catch(err => {
    //     console.log('>>> ', err)
    // })

    // getTodos(1, (err,data)=> {
    //             if(err) {
    //                 console.log('>>> Calling callback width err', err)
    //             }
    //             if(data) {
    //                 console.log('>>> Calling callback width data',data)

    //                 getTodos(2, (err,data)=> {
    //                     if(err) {
    //                         console.log('>>> Calling callback width err', err)
    //                     }
    //                     if(data) {
    //                         console.log('>>> Calling callback width data',data)

    //                         getTodos(3, (err,data) => {
    //                             if(err) {
    //                                 console.log('>>> Calling callback width err', err)
    //                             }
    //                             if(data) {
    //                                 console.log('>>> Calling callback width data',data)
    //                             }

    //                         })
    //                     }
    //             })
    //         }
    // });

        const promiseEXP = () => {
                
            return new Promise((resolve, reject) => {
                // resolve({name: 'Huu Hung Nguyen', chanel: 'Tu hoc'}) 
                reject( 'I do not no')
            });   
        }

        // promiseEXP().then(data => {
        //     console.log(data)
        // })

        // .catch(error => {
        //     console.log(error)
        // })
    

let arr1 = [1,2,3,4,6,7]
console.log( arr1)

let state = {
    fullName: 'Huu Hung',
    address: 'Ha Noi',
    age: 21
}



// let arr2 = {...state, chanel: 'khong co', skil: 'HTML, CSS, JS, GIT, NODEJS, REACTJS'}
// console.log(arr2)

// let name = state.name;
// let address = state.address;
// let age = state.age


// let { fullName, address, age} = states

// console.log('check key',fullName, address,age)


let arr = ['Eric', 'Hoi dan IT']
let [name, addressChanel] = arr
    console.log('Check key: ', name, addressChanel)
