{
    function divisibleByFive(arr){
      for(let element of arr)
      if(element%5==0)
      console.log(element);  
      
    }divisibleByFive([1,2,3,4,5,10,15,23,1,5]);
    
    
}

{
  function lifeSupply(numPerMonth,age){
    let years=100;
    let total= (numPerMonth*12)*(years-age);
    return total;

  }
  lifeSupply(10,26);
  console.log(lifeSupply(10,26));
}