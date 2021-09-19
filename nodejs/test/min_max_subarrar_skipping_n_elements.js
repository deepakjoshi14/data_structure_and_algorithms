var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var test = require('../code/min_max_subarrar_skipping_n_elements.js');

describe('Simple sequence with one skip', function() {

    let list = [1, 4, 0, 3, 5, 2];
    let response = test.getMinMaxSubArrayObject( list, 1 );
    
    it('check min value', function() {
      expect( response.min.total ).to.equal( 15);
    })
    it('check min list', function() {
        expect( response.min.nums).to.have.lengthOf( list.length );
        expect( response.min.nums ).to.deep.equal( list );
    })

    it('check max value', function() {
        expect( response.max.total ).to.equal( 15);
    })
    it('check max list', function() {
        expect( response.max.nums).to.have.lengthOf( list.length);
        expect( response.max.nums ).to.deep.equal( list );
    })
    
});

describe('Simple sequence with two skip', function() {

    let list = [1, 4, 0, 3, 5, 2];
    let response = test.getMinMaxSubArrayObject( list, 2 );
    
    it('check min value', function() {
      expect( response.min.total ).to.equal( 6);
    })
    it('check min list', function() {
        expect( response.min.nums).to.have.lengthOf( 4 );
        expect( response.min.nums ).to.deep.equal( [ 1, 0, 3, 2 ] );
    })

    it('check max value', function() {
        expect( response.max.total ).to.equal( 15);
    })
    it('check max list', function() {
        expect( response.max.nums).to.have.lengthOf( 5);
        expect( response.max.nums ).to.deep.equal( [1, 4, 3, 5, 2] );
    })
    
});

describe('Simple sequence with three skip', function() {

    let response = test.getMinMaxSubArrayObject( [1, 4, 0, 3, 5, 2], 3 );
    
    it('check min value', function() {
      expect( response.min.total ).to.equal( 3);
    })
    it('check min list', function() {
        expect( response.min.nums).to.have.lengthOf( 3 );
        expect( response.min.nums ).to.deep.equal( [ 1, 0, 2 ] );
    })

    it('check max value', function() {
        expect( response.max.total ).to.equal( 15);
    })
    it('check max list', function() {
        expect( response.max.nums).to.have.lengthOf( 5);
        expect( response.max.nums ).to.deep.equal( [1, 4, 3, 5, 2] );
    })
    
});

describe('Negative numbers with two skips', function() {

    let response = test.getMinMaxSubArrayObject( [1, -4, 7, 3, 6, -5, 2], 2 );
    
    it('check min value', function() {
      expect( response.min.total ).to.equal( -5);
    })
    it('check min list', function() {
        expect( response.min.nums).to.have.lengthOf( 4);
        expect( response.min.nums ).to.deep.equal( [ 1, -4, 3, -5 ]);
    })

    it('check max value', function() {
        expect( response.max.total ).to.equal( 19);
    })
    it('check max list', function() {
        expect( response.max.nums).to.have.lengthOf( 5);
        expect( response.max.nums ).to.deep.equal( [ 1, 7, 3, 6, 2 ] );
    })
    
});

describe('Complex numbers with two skips', function() {

    let list = [1, 2, 1, 7, 9, 100, 2];
    let response = test.getMinMaxSubArrayObject( list, 2 );
    
    it('check min value', function() {
      expect( response.min.total ).to.equal( 13);
    })
    it('check min list', function() {
        expect( response.min.nums).to.have.lengthOf( 4);
        expect( response.min.nums ).to.deep.equal( [ 1, 1, 9, 2 ]);
    })

    it('check max value', function() {
        expect( response.max.total ).to.equal( 122);
    })
    it('check max list', function() {
        expect( response.max.nums).to.have.lengthOf( list.length);
        expect( response.max.nums ).to.deep.equal( list );
    })
    
});

