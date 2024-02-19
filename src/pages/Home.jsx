import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [userName, setUserName] = useState(''); 
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlerLogin = (e) => {
    e.preventDefault(); 

    const expectedUserName = "admin"; 
    const expectedPassword = "admin"; 

    if (userName === expectedUserName && password === expectedPassword) {
      console.log("🚀 ~ handlerLogin ~ password:", password)
      console.log("🚀 ~ handlerLogin ~ userName:", userName)
      navigate("/NULL");
    } else {
      console.log("Credenciales incorrectas");
    }
  };
   return (
    <>
    <section className="flex w-full items-center justify-center h-screen bg-gray-50 dark:bg-gray-900 p-0 m-0">
  <div className="flex w-1/2 flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
      
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <div className="space-y-4 md:space-y-6">
                  <div>
                      <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your UserName</label>
                      <input type="text" name="UserName" id="UserName" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""
                      onChange={(e) => setUserName(e.target.value)}
                      />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                      onChange={(e) => setPassword(e.target.value)}
                      
                      />
                  </div>
                  
                  <button onClick={handlerLogin} type="submit" className="w-full text-white bg-blue-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-xl text-sm px-5 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        Sign in
      </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </div>
          </div>
      </div>
  </div>
</section>
    </>
  );
}

export default Home;
