import { useState } from 'react'
import upload_erea from '../../assets/upload_area.svg'

export default function AddProduct() {
    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: ""
    })
    const imageHandler = (e) => {
        setImage(e.target.files[0])
    }
    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
    }
    const Add_Product = async () => {
        console.log(productDetails)
        let responseData;
        let product = productDetails

        let formData = new FormData()
        formData.append('product', image)

        await fetch("http://localhost:4000/upload", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData
        }).then((resp) => resp.json()).then((data) => {
            responseData = data
        })

        if (responseData.success) {
            product.image = responseData.image_url
            await fetch("http://localhost:4000/v1/product/addproduct", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            }).then((resp) => resp.json()).then((data) => {
                data.success ? alert('Product Added') : alert('Failed')
            })
        }
    }
    return (
        <div className="box-border w-[100%] max-w-[750px] px-[50px] py-[30px] my-[20px] mx-[30px] rounded-[6px] bg-white">
            <div className="w-[100%] text-[#7b7b7b] text-[16px]">
                <p className="">Product title</p>
                <input value={ productDetails.name } onChange={ changeHandler } type="text" name="name" placeholder='Type here' className="box-border w-[100%] h-[40px] mt-2 rounded-[4px] pl-[15px] outline-none text-[#7b7b7b] text-[14px] border border-solid border-[#c3c3c3]" />
            </div>
            <div className="flex gap-10">
                <div className="w-[100%] text-[#7b7b7b] text-[16px] mt-4">
                    <p>Price</p>
                    <input value={ productDetails.old_price } onChange={ changeHandler } type="text" name="old_price" placeholder="Type here" className="box-border w-[100%] h-[40px] mt-2 rounded-[4px] pl-[15px] outline-none text-[#7b7b7b] text-[14px] border border-solid border-[#c3c3c3]" />
                </div>
                <div className="w-[100%] text-[#7b7b7b] text-[16px] mt-4">
                    <p>Offer Price</p>
                    <input value={ productDetails.new_price } onChange={ changeHandler } type="text" name="new_price" placeholder="Type here" className="box-border w-[100%] h-[40px] mt-2 rounded-[4px] pl-[15px] outline-none text-[#7b7b7b] text-[14px] border border-solid border-[#c3c3c3]" />
                </div>
            </div>
            <div className="w-[100%] text-[#7b7b7b] text-[16px] mt-4">
                <p className="">Product Category</p>
                <select value={ productDetails.category } onChange={ changeHandler } name="category" className="p-[10px] w-[100px] h-[40px] mt-2 text-[14px] text-[#7b7b7b] border border-solid border-[#7b7b7b8d] rounded-[4px]">
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="w-[100%] text-[#7b7b7b] text-[16px] mt-4">
                <label htmlFor="file-input">
                    <img src={ image ? URL.createObjectURL(image) : upload_erea } alt="" className='h-[120px] w-[120px] rounded-[10px] object-contain my-[10px]' />
                </label>
                <input onChange={ imageHandler } type="file" name='image' id='file-input' hidden />
            </div>
            <button onClick={ () => Add_Product() } className='mt-[20px] w-[160px] h-[40px] bg-[#6079ff] border-none cursor-pointer text-white text-[16px] font-medium rounded-[6px]'>
                ADD
            </button>
        </div>
    )
}
