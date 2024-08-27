export default function Contact() {
    return (
        <section
            className='bg-gradient-to-b from-blueberry-700 to-blueberry-900 h-screen
        place-items-center justify-center gap-4 flex flex-col p-8 lg:justify-start'
        >
            <h1 className="font-semibold text-yellow-500 text-5xl mt-16 lg:mt-0 md:text-6xl">
                Contact
            </h1>
            <h2 className='font-semibold text-cyan-500 text-xl md:text-3xl'>
                Get in touch
            </h2>
            <form className="grid grid-rows-10 grid-cols-2 gap-2 bg-blueberry-900 p-4 rounded-lg w-auto
            md:grid-rows-4">
                <input
                    type='text'
                    placeholder='Name'
                    className='bg-blueberry-800 text-gray-50 text-xl rounded-md p-2 col-span-2 row-span-1 focus:outline-none focus:bg-blueberry-700'
                />
                <input
                    type='email'
                    placeholder='Email'
                    className='bg-blueberry-800 text-gray-50 text-xl rounded-md p-2 col-span-2 row-span-1 md:col-span-1 focus:outline-none focus:bg-blueberry-700'
                />
                <input
                    type="tele"
                    placeholder="Phone"
                    className="bg-blueberry-800 text-gray-50 text-xl rounded-md p-2 col-span-2 row-span-1 md:col-span-1 focus:outline-none focus:bg-blueberry-700"
                />
                <textarea
                    placeholder='Message'
                    className='bg-blueberry-800 text-gray-50 text-xl rounded-md p-2 col-span-2 row-span-4 focus:outline-none focus:bg-blueberry-700'
                />
                <div className="col-span-2 flex justify-center">
                    <button
                        type='submit'
                        className='bg-cyan-500 text-gray-50 text-xl rounded-md p-2 w-1/2 hover:bg-cyan-600'>
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}