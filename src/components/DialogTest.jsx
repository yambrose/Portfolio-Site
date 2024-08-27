import { useRef, useState } from "react";

export default function DialogTest() {

    const [dialogOpen, setDialogOpen] = useState(false);
    const dialogRef = useRef();


    function handleDialogToggle() {
        if (dialogRef.current) {
            if (dialogRef.current.open) {
                dialogRef.current.close();
            } else {
                dialogRef.current.showModal(); // This adds a backdrop
            }
        }
    }

    return (
        <section
            className='bg-gradient-to-b from-blueberry-700 to-blueberry-900 h-screen
        place-items-center justify-center gap-4 flex flex-col p-8 lg:justify-start'
        >
            <h1 className="font-semibold text-yellow-500 text-5xl mt-16 lg:mt-0 md:text-6xl"
                onClick={handleDialogToggle}>
                Dialog Test
            </h1>
            <h2 className='font-semibold text-cyan-500 text-xl md:text-3xl'>
                Test Dialog
            </h2>
            <dialog ref={dialogRef} className="bg-white rounded-lg shadow-lg p-4">
                <p className="text-gray-800">This is a test dialog.</p>
                <button onClick={handleDialogToggle}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    Close
                </button>
            </dialog>
        </section>
    );
}