import logo from './imgae/e_logo.png'
import Daco from './imgae/Daco.png'
import media from './imgae/media-markt-.png'
import Shoppee from './imgae/Shopee-Logo.png'
import Pephora from './imgae/Pephora.png'
import melvita from './imgae/Melvita.png'
import pullman from './imgae/pullman.webp'
import h_logo from './imgae/h_logo.png'
import b_logo from './imgae/b_logo.png'
import r_logo from './imgae/r_logo.png'

function App() {
  return (
    <div>
      <div className=" grid-rows-2">
        <div className="bg-indigo-950">
          <div className=" h-28 grid grid-cols-6">
            <div></div>
            <div className="col-span-4">
              <nav class=" border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-5">
                  <div class="flex items-center">
                    <img className='h-20' src={logo} alt="logo" />
                    <div className="flex flex-col">
                      <div class=" text-3xl font-semibold text-white">ematic</div>
                      <div class=" text-l font-semibold  text-white">labs</div>
                    </div>
                  </div>
                  <button data-collapse-toggle="navbar-multi-level" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                  </button>
                  <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border gap-5 text-xl border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                      <li>
                        <div href="#" class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0" aria-current="page">Home</div>
                      </li>
                      <li>
                        <button class="text-white flex items-center justify-between w-full py-2 pl-3 pr-4  md:border-0  md:p-0 md:w-auto ">Products <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg></button>
                      </li>
                      <li>
                        <div href="#" class="block py-2 pl-3 pr-4 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                          Pricing</div>
                      </li>
                      <li>
                        <div href="#" class="block py-2 pl-3 pr-4 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                          Parthners</div>
                      </li>
                      <li>
                        <div href="#" class="block py-2 pl-3 pr-4 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                          Contact us</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div></div>
          </div>
          <div className="h-22 grid grid-cols-6">
            <div></div>
            <div className="col-span-4">
              <div className='flex justify-center gap-14'>
              <img className='h-10 self-center' src={Daco} alt="Logo" />
              <img className='h-24 self-center' src={media} alt="Logo" />
              <img className='h-36 self-center' src={melvita} alt="Logo" />
              <img className='h-14 self-center' src={pullman} alt="Logo" />
              <img className='h-4 self-center' src={Pephora} alt="Logo" />
              <img className='h-16 self-center' src={Shoppee} alt="Logo" />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className=" h-screen grid grid-cols-6 ">
        <div className=" bg-white"></div>
        <div className=" col-span-4 bg-white">
          <span class="flex mt-1  h-8 bg-red-600"></span>
          <div className='relative py-5 '>
            <h1 className=' text-4xl text-center '>Our Products</h1>
            <div className='grid grid-cols-3 mb-4'>
              <div className=' flex'>
                <svg class="w-6 h-6 text-emerald-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                </svg><svg class="w-6 h-6 text-emerald-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                </svg><svg class="w-6 h-6 text-emerald-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                </svg><svg class="w-6 h-6 text-emerald-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                </svg>
              </div>
              <div className=' bg-emerald-400 w-16 h-1 m-3 justify-self-center'></div>
            </div>
            <div className='absolute top-0 right-0'>
              <div className='static '>
                <span className='flex w-10 h-10 bg-emerald-400 rounded-full absolute top-0 right-0 z-10'></span>
                <span className='flex w-10 h-10 bg-indigo-950 rounded-full absolute top-6 right-0'></span>
              </div>
            </div>
          </div>
          <div className=' grid grid-cols-3 gap-2'>
            <div className='flex justify-center flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow'>
            <img className='h-40 self-center' src={h_logo} alt="Logo" />
              <div className='mt-5 text-center text-2xl'>Hi-iQ</div>
            </div>
            <div className='flex justify-center flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow'>
            <img className='h-40 self-center' src={b_logo} alt="Logo" />
              <div className='mt-5 text-center text-2xl'>Bye-iQ</div>
            </div>
            <div className='flex justify-center flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow'>
            <img className='h-40 self-center' src={r_logo} alt="Logo" />
              <div className='mt-5 text-center text-2xl'>Retry-iQ</div>
            </div>
          </div>
        </div>
        <div className=" bg-white">
          <span className='flex flex-col w-10 h-10 bg-emerald-400 rounded-full fixed top-3/4 right-2'>
            <svg class="w-6 h-6 text-white self-center mt-2 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 12">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5m8 6L5 7l-4 4" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
