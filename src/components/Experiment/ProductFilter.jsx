import React,{useEffect} from 'react'

export default function ProductFilter() {
    const products = [
        { id: 2, name: 'T-Shirt', category: 'Clothing', price: 25 },
        { id: 1, name: 'iPhone 12', category: 'Electronics', price: 799 },
        { id: 3, name: 'MacBook Pro', category: 'Electronics', price: 1299 },
        { id: 4, name: 'Jeans', category: 'Clothing', price: 55 },
        { id: 5, name: 'Samsung TV', category: 'Electronics', price: 499 },
        { id: 7, name: 'Blender', category: 'Home Appliances', price: 99 },
        { id: 6, name: 'Sneakers', category: 'Footwear', price: 75 },
        { id: 8, name: 'Sofa', category: 'Furniture', price: 1200 }
      ];
    
    const [productlist, setProductlist] = React.useState(products);
    const [category, setCategory] = React.useState('All');
    const [range, setRange] = React.useState('All');

    const handleRange = (e) =>{
        let value = e.target.value;
        console.log(value)
        setRange(value);
    }
    useEffect(()=>{
        // setProductlist();
        console.log(category)
        if(category !== 'All'){

            var filterData = products.filter((item)=>item.category === category) 
            console.log(filterData);
            setProductlist(filterData);
        }else{
            console.log(range)
            console.log(range)
            switch(range){
                case 'All' :
                    break;
                case '50-':
                    var filterData = products.filter((item)=> item.price < 50 );
                    break;
                case '50-100':
                    var filterData = products.filter((item)=> 50 <= item.price <100 );
                    break;
                case '100+':
                    var filterData = products.filter((item)=> item.price <= 100 );
                    break;

            }   
            console.log(filterData)
            // setProductlist(filterData);
        }
    },[category,range]);

  return (
    <div className='text-center'>
        <h1>Product Filter</h1>
        <div className='d-flex'>
            category: <select value={category} onChange={(e)=> setCategory(e.target.value)}>
                <option value="All">All</option>
                <option value="Clothing">Clothing</option>
                <option value="Electronics">Electronics</option>
                <option value="Home Appliances">Home Appliances</option>
                <option value="Footwear">Footwear</option>
                <option value="Furniture">Furniture</option>
            </select>

            Range:    
            <div>
                All: <input type="radio" name="range" onClick={(e)=>handleRange(e)}  value='All'  checked/>
                Below $50: <input type="radio" name="range" onClick={(e)=>handleRange(e)} value='50-' />
                $50 - $100: <input type="radio" name="range" onClick={(e)=>handleRange(e)} value='50-100' />
                Above $100 : <input type="radio" name="range" onClick={(e)=>handleRange(e)} value='100+' />
            </div>
        </div>
        <div className='item d-flex'>
            {productlist.map((item)=>{
                return <div className='border  m-2 p-3' key={item.id}>
                    <h5>{item.name}</h5>
                    <p>Price: {item.price}</p>
                </div>
            })}
        </div>
    </div>
  )
}
