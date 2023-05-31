import React from 'react';

const Villa110m2 = ({ isOpen110, onClose110 }) => {
  if (!isOpen110) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white p-4 rounded shadow-md z-10">
        <h2 className="text-xl font-bold mb-4">Departamentos en villas 
</h2>
        <p>110</p>
        <div className='mx-auto justify-center'>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded center"
          onClick={onClose110}
        >
          Volver
        </button>
        </div>
  
      </div>
    </div>
  );
};

export default Villa110m2;
