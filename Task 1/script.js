const num = +prompt('Enter new number or click the button' , 1234)

const firstnum = Math.floor(num/1000)
const secondnum = Math.floor(num/100%10)
const thirdnum = Math.floor(num/10%10)
const lastnum = Math.floor(num%10)

const sum = firstnum+secondnum+thirdnum+lastnum
console.log(sum);