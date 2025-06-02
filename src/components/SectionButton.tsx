interface SectionButtonProps {
    children: React.ReactNode;
}


const SectionButton: React.FC<SectionButtonProps> = ({ children }) => {
    return (
        <div className="">
            {children}
        </div>
    );
}

export default SectionButton;