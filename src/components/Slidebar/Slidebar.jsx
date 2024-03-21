import { Link } from "react-router-dom"
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from '../../assets/Product_list_icon.svg'

export default function Slidebar() {
    return (
        <div className="flex flex-col pt-[30px] gap-5 w-[100%] max-w-[250px] h-[100vh] bg-white">
            <Link to='/addproduct' className='no-underline'>
                <div className="flex items-center justify-center mx-[20px] py-[10px] px-[5px] rounded-[6px] bg-[#f6f6f6] gap-5 cursor-pointer">
                    <img src={ add_product_icon } alt="" />
                    <p className="">Add Product</p>
                </div>
            </Link>
            <Link to='/listproduct' className='no-underline'>
                <div className="flex items-center justify-center mx-[20px] py-[10px] px-[5px] rounded-[6px] bg-[#f6f6f6] gap-5 cursor-pointer">
                    <img src={ list_product_icon } alt="" />
                    <p className="">Product List</p>
                </div>
            </Link>
        </div>
    )
}
