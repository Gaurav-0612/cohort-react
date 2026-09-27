import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      
      {/* Header */}
      <div className="bg-linear-to-r from-indigo-600 to-purple-600 p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-white text-indigo-600 flex items-center justify-center text-2xl font-bold">
            {user.name.firstname.charAt(0).toUpperCase()}
          </div>

          <div>
            <h2 className="text-2xl font-bold capitalize">
              {user.name.firstname} {user.name.lastname}
            </h2>
            <p className="text-indigo-100">@{user.username}</p>
          </div>
        </div>
      </div>

      {/* User Information */}
      <div className="p-6 space-y-4">

        {/* Email */}
        <div className="flex items-center gap-4">
          <div className="text-xl">📧</div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium text-gray-800">{user.email}</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <div className="text-xl">📱</div>
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium text-gray-800">{user.phone}</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="text-xl">📍</div>
          <div>
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-medium text-gray-800 capitalize">
              {user.address.number}, {user.address.street}
            </p>
            <p className="text-gray-600 capitalize">
              {user.address.city} - {user.address.zipcode}
            </p>
          </div>
        </div>

        {/* Username */}
        <div className="flex items-center gap-4">
          <div className="text-xl">👤</div>
          <div>
            <p className="text-sm text-gray-500">Username</p>
            <p className="font-medium text-gray-800">{user.username}</p>
          </div>
        </div>

        {/* ID */}
        <div className="flex items-center gap-4">
          <div className="text-xl">🆔</div>
          <div>
            <p className="text-sm text-gray-500">User ID</p>
            <p className="font-medium text-gray-800">{user.id}</p>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="border-t bg-gray-50 px-6 py-4">
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition">
          View Profile
        </button>
      </div>

    </div>
  );
};

export default UserCard;