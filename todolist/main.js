let listArray = [];
let response = prompt("Hello there Press any main key ");
while( response !== "Quit" ){
    if( response === "Add" ){
        let addToList = prompt("Write whatever you want to add to the list ");
        console.log(`${addToList} is added to the list`);
        listArray.push( addToList );
    }
    if( response === "Delete" ){
        let index = parseInt(prompt("Enter the index to be deleted")) - 1 ;
        listArray.splice( index , 1 );
    }
    if( response === "Show" ){
        console.log("*******");
        for( let i=0 ; i<listArray.length ; i++ ){
            console.log(` ${i+1} : ${ listArray[ i ] } `);
        }  
        console.log("*******");
    }
    response = prompt("Enter next command ");
}
console.log(" Thanks for using our list , See you soon ");