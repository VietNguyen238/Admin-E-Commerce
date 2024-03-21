import { useEffect, useState } from "react"
import cross_icon from '../../assets/cross_icon.png'

export default function ListProduct() {

    const [allProducts, setAllProducts] = useState([])

    const fetchInfo = async () => {
        await fetch('http://localhost:4000/v1/product/allproducts').then((res) => res.json()).then((data) => setAllProducts(data))
    }

    const fetchRemove = async (id) => {

        console.log(id)
        await fetch('http://localhost:4000/v1/product/removeproduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        },)
        await fetchInfo()
    }

    useEffect(() => {
        fetchInfo()
    }, [])


    return (
        <div className='w-full bg-white my-[20px] px-[50px] py-[50px] mx-[30px] rounded-[6px] flex flex-col items-center'>
            <h1 className="font-bold text-[35px]">All Products List</h1>
            <div className="grid gap-[10px] w-full text-[#454545] grid-cols-[2fr_10fr_2fr_2fr_2fr_1fr] text-[15px] font-semibold py-[20px] justify-center">
                <p className="">Products</p>
                <p className="">Title</p>
                <p className="">Old Price</p>
                <p className="">New Price</p>
                <p className="">Category</p>
                <p className="">Remove</p>
            </div>
            <div className="w-full">
                <hr className="border-[#d4d4d4]" />
                { allProducts.map((product, index) => {
                    return (
                        <div key={ index } className="flex flex-col">
                            <div className="grid gap-[10px] w-full text-[#454545] grid-cols-[2fr_10fr_2fr_2fr_2fr_1fr] text-[15px] py-[20px] items-center font-medium">
                                <img src={ product.image } alt="" className="w-[80px]" />
                                <p className="">{ product.name }</p>
                                <div className="ml-[15px] line-through flex"><p className="font-bold mr-1">$</p>{ product.old_price }</div>
                                <div className="ml-[15px] flex"><p className="font-bold mr-1">$</p>{ product.new_price }</div>
                                <p className="ml-[15px]">{ product.category }</p>
                                <img onClick={ () => fetchRemove(product.id) } className='ml-[15px] cursor-pointer h-[20px] p-1' src={ cross_icon } alt="" />
                            </div>
                            <hr className="mx-3 border-[#d4d4d4]" />
                        </div>
                    );
                }) }
            </div>
        </div >
    )
}
