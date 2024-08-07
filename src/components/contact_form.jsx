import React from 'react';

function Contact() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Contact Form</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md"></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
      </form>
    </div>
  );
}

export default Contact;