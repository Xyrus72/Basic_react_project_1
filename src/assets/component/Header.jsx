import profile from '../../../src/pic/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4  border-b-2  max-w-7xl mx-auto'>
            <h1 className='text-6xl font-bold bg-red-400'>Content Web</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;