import React from 'react';

const Formcontact = () => {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden mt-5 mb-5">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-org lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
          Formulaire de Contact
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Nom</span>
              <input
                type="text"
                name="name"
                className="w-full block px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm"
                placeholder="John cooks"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">E-mail</span>
              <input name="email" type="email" className="block w-full mt-2 px-16 py-2 border-gray-300 rounded-md shadow-sm" placeholder="john.cooks@example.com" required />
                        </label>
                      </div>
                      <div className="mb-2">
                        <label>
                          <span class="text-gray-700">Message</span>
                          <textarea
                            name="message"
                            className="block w-full mt-2 px-16 py-8 border-gray-300 rounded-md shadow-sm"
                            rows="5"
                          ></textarea>
                        </label>
                      </div>
            
                      <div class="mb-6">
                        <button
                          type="submit"
                          className="h-10 px-5 border rounded-lg">
                          Envoyer
                        </button>
                      </div>
                      <div></div>
                    </form>
                  </div>
                </div>
              );
            };
            
            export default Formcontact;