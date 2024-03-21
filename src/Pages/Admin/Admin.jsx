import AddProduct from "../../components/AddProduct/AddProduct";
import ListProduct from "../../components/ListProduct/ListProduct";
import Slidebar from "../../components/Slidebar/Slidebar";
import { Routes, Route } from 'react-router-dom'

export default function Admin() {
    return (
        <div className="flex">
            <Slidebar />
            <Routes>
                <Route path="/addproduct" element={ <AddProduct /> } />
                <Route path="/listproduct" element={ <ListProduct /> } />
            </Routes>
        </div>
    )
}
