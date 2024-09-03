function flipplingACoin(){
    return new Promise((resolve,reject)=>{
        const val = Math.round(Math.random() *1);
        val ? resolve('!!Heads!!'):reject('Tails!!');
    });
}

async function result(){
    try{
        const result = await flipplingACoin();
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

result();
result();
result();
result();
result();