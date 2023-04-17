import React from "react";
import Header from "./Header";

export default function About() {
  return (
    <>
    <Header />
      <div className="bg-gray-800 text-white w-5/6 m-auto rounded-lg">
        <h1 className= "text-center font-mono text-5xl py-7">About</h1>
        <div className="flex flex-col">
          <div className="w-full">
            <img
              className="w-full h-60 object-cover m-auto"
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt=""
            />
          </div>
          <div className="w-full text-center self-center p-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A nesciunt
            nobis deleniti quis illum nemo possimus dolorem nihil, sit quia
            magnam eaque eius alias tenetur iste voluptatum. Voluptas ratione
            dolorum quae, adipisci molestiae enim. Officia delectus laboriosam
            ipsam facere similique.
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-white w-5/6 m-auto rounded-lg mt-10 overflow-hidden">
        <div className="flex flex-col">
          <div className="w-full">
            <img
              className="w-full p-16 object-contain m-auto"
              src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
              alt=""
            />
          </div>
          <div className="w-full text-center self-center p-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A nesciunt
            nobis deleniti quis illum nemo possimus dolorem nihil, sit quia
            magnam eaque eius alias tenetur iste voluptatum. Voluptas ratione
            dolorum quae, adipisci molestiae enim. Officia delectus laboriosam
            ipsam facere similique.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellat odio quas culpa adipisci ex deleniti sapiente natus pariatur, deserunt modi ipsa dolor earum. Sint nesciunt odit in? Fugit id veniam optio, voluptates est accusamus nam doloremque totam culpa tenetur a quod provident deserunt labore veritatis placeat excepturi atque facere? Itaque ipsa harum a repudiandae sunt cumque odit quibusdam obcaecati deleniti velit nulla, minima molestiae sapiente quae voluptates cupiditate dolor porro, rerum modi. Qui modi totam atque quae aspernatur eos consectetur, iusto recusandae dolor aut dolores iste porro excepturi repellat voluptatibus ad accusamus adipisci quos incidunt facere asperiores nisi vitae voluptatum? Eveniet, repellendus nulla. Est mollitia maxime delectus! Exercitationem, nisi assumenda. Non quis debitis pariatur odit, quisquam impedit explicabo iusto dignissimos illum laudantium eos iure sint molestias. Nam repudiandae reiciendis, rem sunt deserunt ad consequatur cumque quos illo quidem consectetur ipsum velit ut tempora recusandae, consequuntur ipsam nisi. Qui, et dolorum repudiandae vero enim corrupti quo, laboriosam ratione eum sequi eveniet minus at maxime provident! Doloremque corrupti molestias quisquam vitae dolorem possimus harum vero! Non aperiam, recusandae consequatur sapiente modi harum sit reprehenderit doloremque cupiditate illo porro maiores tempore enim eaque, optio quod officia nesciunt. Deserunt modi velit aspernatur quod.
          </div>
        </div>
      </div>
    </>
  );
}
