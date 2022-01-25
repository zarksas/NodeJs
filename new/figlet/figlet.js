console.log('Hello World')

let figlet  =  require ( 'figlet' ) ;

figlet ( ' Hello John !!' ,  function ( err ,  data )  { 
    if  ( err )  { 
        console.log ( ' Что - то пошло не так ... ' ) ; console.dir ( err ) ; return ; } console.log ( data ) } ) ;
        
        