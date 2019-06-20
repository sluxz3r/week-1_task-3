var array = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ];

console.table(array);

function transpose( array ) {	
	var result = new Array( array[ 0 ].length );
	for ( var i = 0; i < result.length; i++ ) {
		result[ i ] = new Array( array.length );
		for ( var j = 0; j < result[ i ].length; j++ ) {
			result[ i ][ j ] = array[ j ][ i ];
		}
	}
	return result;
}

console.table(transpose(array));