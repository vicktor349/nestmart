import React from 'react';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, item }) =>
{
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-gray-800 bg-opacity-75">
            <div className="bg-white rounded-lg p-4 ssm:w-80 sm:w-[30rem]">
                <h2 className="font-semibold mb-4 text-primary">Please confirm your action</h2>
                <p>Are you sure you want to remove <strong className='text-sm'>{item?.text}</strong> from your cart?</p>
                <div className="mt-6 flex justify-end space-x-4">
                    <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded" onClick={onClose}>Cancel</button>
                    <button className="bg-primary text-white py-2 px-4 rounded" onClick={() => onConfirm(item.id)}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
