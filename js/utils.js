const periodsList=[];

const loadJson=async(url,list)=>{
    try{
        list.length=0;
        const response=await fetch(url);

        if(!response.ok){
            throw new Error(`Error loading, status: ${response.status}`);
        }
        const list=await response.json();
        list.push(...products);
    }catch(error){
        console.error(`Error loading products, ${error.message}`);
    }
}

const saveJson= async(newProduct)=>{
    try{
        const response=await fetch('http://localhost:3000/products',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newProduct),
        });
        
        if(!response.ok){
            throw new Error(`Error saving product, status: ${response.status}`);
        }
        const productCreated= await response.json();
        console.log(`Created product: ${productCreated}`);

    }catch(error){
        console.log(`Error saving product ${error.message}`);
    }
}