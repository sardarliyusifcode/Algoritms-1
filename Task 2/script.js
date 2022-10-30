const num = +prompt('Enter new number or click the button' , 123)

const firstnum = Math.floor(num/100)
const secondnum = Math.floor(num/10%10)
const lastnum = Math.floor(num%10)

if (firstnum == secondnum || secondnum == lastnum || firstnum == lastnum){
    alert("All numbers are not different (false)")
}else{
    alert("All numbers are different (true)")
}

