let mA = [ 
    [3, 4],
    [1, 2]
];

var mB = [
    [7, 5],
    [6, 4]
];

function calMat( mA, mB ) {
    var result = new Array( mA.length );
    
	for ( var i = 0; i < result.length; i++ ) {	
		result[ i ] = new Array( mB[ i ].length );

        for ( var j = 0; j < mA.length; j++ ) {
			
			result[ i ][ j ] = 0; // result[ i ][ j ] is NaN, force to be zero
			for ( var k = 0; k < mB.length; k++ ) {
				
				result[ i ][ j ] += mA[ i ][ k ] * mB[ k ][ j ];
			}
		}
	}
	
	return result;
};

console.table(calMat(mA, mB));
