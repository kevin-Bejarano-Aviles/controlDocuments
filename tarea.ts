type fruits = {
    red: string[],
    yellow: string[],
    purple: string[],
    
  }
function getFruitsByColor( color: keyof fruits ): string[] {

    const fruits: fruits = {
        red: ['manzana','fresa'],
        yellow: ['piña','banana'],
        purple: ['moras','uvas'],
    }
    if(fruits[color]) return fruits[color]        
    // if ( color === 'red' )  return ['manzana','fresa'];
    // if ( color === 'yellow')  return ['piña','banana'];
    // if ( color === 'purple')    return ['moras','uvas']
throw Error('the color must be: red, yellow, purple');
}