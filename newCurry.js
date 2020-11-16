

function mAkeCurry(A)
{
    
   try{ 
    let output;
    output="";
    if(A.length===3 && A[0]!==A[1] && A[1]!=A[2] && A[2]!==A[0])
    {
        return "noLuck";
    }
    else if (A.length<3)
    {
        return "noLuck";
    }
    else
    {
        let item1=Math.max(...A);
        let i;
        i=0;
        let sum=A.reduce((a,b)=>a+b,0)
        if(sum%item1===0)
        {
           
          for(i=0;i<A.length;i++)
          { 
              if(A[i]===item1)
              {
                  output=output+"P";
                  
              } else
              {
                  
                  if(i!==0 && A[A.length-i]+A[i]===item1)
                  {
                  output=output+"Q";}
                  else 
                  {
                      output=output+"R";}
              }
              
          }
          return output;
            
        } else 
        return "noLuck";
        
    }
    
}
    catch(e)
    {
        throw e;
    }
}



mAkeCurry(sAmpleArrAy);