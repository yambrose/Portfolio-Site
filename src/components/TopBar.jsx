import MonogramIcon from '../assets/MonogramIcon.svg';

export default function TopBar() {
    return (
        <header className='sticky shadow-md top-0 z-10 flex items-center justify-between p-4 w-screen bg-white'>
            <div className='flex items-center'>
                <img src={MonogramIcon} className='w-20' />
                <h2 className='text-4xl font-semibold pl-2'>ambrosey.dev</h2>
            </div>
            <div className='flex gap-8'>
                <button className='text-4xl font-semibold'>Home</button>
                <button className='text-4xl font-semibold'>Projects</button>
                <button className='text-4xl font-semibold'>Contact</button>
                <button className='text-4xl font-semibold bg-slate-600 p-4 rounded-lg'>Resume</button>
            </div>
        </header>
    );
}