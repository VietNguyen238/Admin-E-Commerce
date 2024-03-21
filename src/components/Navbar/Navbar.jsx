import navLogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'

export default function Navbar() {
    return (
        <div className="flex justify-between items-center py-[15px] px-[60px] bg-white mb-[1px] shadow-[0_1px_3px_-2px_#000]">
            <img src={ navLogo } alt="" className='w-[200px]' />
            <img src={ navProfile } alt="" className='w-[75px]' />
        </div>
    )
}
