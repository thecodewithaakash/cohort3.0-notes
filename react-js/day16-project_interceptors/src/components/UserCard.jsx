import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition duration-300">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold uppercase">
          {user.name.firstname[0]}
          {user.name.lastname[0]}
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800 capitalize">
            {user.name.firstname} {user.name.lastname}
          </h2>
          <p className="text-gray-500">@{user.username}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t my-5"></div>

      {/* User Details */}
      <div className="space-y-3 text-sm text-gray-700">
        <div className="flex justify-between">
          <span className="font-semibold">User ID</span>
          <span>{user.id}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Email</span>
          <span className="text-blue-600">{user.email}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Phone</span>
          <span>{user.phone}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Password</span>
          <span>{user.password}</span>
        </div>
      </div>

      {/* Address */}
      <div className="mt-6 bg-gray-100 rounded-xl p-4">
        <h3 className="font-semibold text-gray-800 mb-2">Address</h3>

        <p className="text-sm text-gray-600">
          {user.address.number}, {user.address.street}
        </p>

        <p className="text-sm text-gray-600">
          {user.address.city}, {user.address.zipcode}
        </p>

        <p className="text-sm text-gray-500 mt-2">
          <strong>Latitude:</strong> {user.address.geolocation.lat}
        </p>

        <p className="text-sm text-gray-500">
          <strong>Longitude:</strong> {user.address.geolocation.long}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
