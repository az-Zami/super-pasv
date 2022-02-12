import {expect} from 'chai'

const a = 4
const b = 5
const c = 9
const d = -1

describe('Math functions', function (){
    it.skip('A + B = C', function () {
        expect(a + b).to.eq(c)
    });
    it.only('A - B = D', function () {
        expect(a - b).to.eq(d)
    })
})