import React from 'react';

function GalleryC({ images }) {
    return (
        <div className="p-10 max-w-auto px-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {images.map((image, index) => (
              <div className="w-full" key={index}>
                <div className="p-6 bg-white rounded border-2 shadow-md dark:bg- group">
                  <a className="block mb-2" href="#">
                    <div className="relative overflow-hidden">
                      <div className="mb-5 overflow-hidden">
                        <img className="object-cover w-full mx-auto transition-all rounded h-72 group-hover:scale-110" src={image.image} alt=""/>
                      </div>
                      <div className="absolute flex flex-col top-4 right-4">
                        <div className="flex items-center">
                          {/* Wishlist button */}
                          <div className="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-white rounded group-hover:translate-x-0 wishlist hover:bg-blue-200 group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {/* Cart button */}
                          <div className="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-white rounded group-hover:translate-x-0 wishlist hover:bg-blue-200 group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-bold dark:text-black">{image.title}</h3>
                    <p className="text-lg font-bold text-blue-500 dark:text-blue-300 ">
                      <span>{image.price}</span>
                      {/* Optional: Add discounted price */}
                      <span className="text-lg font-semibold text-black ">{image.Price}</span>
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
  }
  

export default GalleryC;
