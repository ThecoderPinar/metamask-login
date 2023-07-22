import React from 'react';

const LogoutButton: React.FC = () => {
  return (
    <button
      onClick={() => {
        window.location.reload();
      }}
      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
