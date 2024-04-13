const DialogBox = ({ text }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-purple-600 text-white p-4 rounded-lg shadow-xl">
                <p className="text-sm">{text}</p>
            </div>
        </div>
    );
};

export default DialogBox;
