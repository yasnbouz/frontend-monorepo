import * as React from 'react';
import { SVGProps } from 'react';
const SvgSettings = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle
      r={3}
      transform="matrix(-1 0 0 1 12 12)"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="m16.5 4.938.375-.65-.375.65Zm0 14.124-.375-.65.375.65Zm-9 0-.375.65.375-.65Zm0-14.125.375.65-.375-.65Zm1.423-1.922-.73-.169.73.17ZM5.312 18.74l-.172-.73.172.73Zm-.91-.237.57-.488-.57.488Zm5.137 3.192.184-.727-.184.727Zm-.616-.71.73-.17-.73.17Zm6.154 0-.73-.17.73.17Zm-.616.71.184.727-.184-.727Zm5.136-3.192-.57-.488.57.488Zm1.847-9.8.708-.247-.708.247Zm-.35.98-.477-.578.476.579ZM18.688 5.26l-.172-.73.172.73Zm2.405 9.056-.476.58.476-.58Zm.35.981-.707-.247.708.247ZM15.078 3.015l-.73.17.73-.17Zm-.73.17a3.742 3.742 0 0 0 1.778 2.402l.75-1.299a2.242 2.242 0 0 1-1.067-1.442l-1.462.338Zm1.778 2.402a3.74 3.74 0 0 0 2.735.402l-.344-1.46a2.24 2.24 0 0 1-1.64-.241l-.75 1.299Zm6.027 2.869a10.737 10.737 0 0 0-1.986-3.447l-1.139.976a9.238 9.238 0 0 1 1.709 2.965l1.416-.494ZM20.75 12c0-.7.318-1.324.82-1.738l-.953-1.157A3.744 3.744 0 0 0 19.25 12h1.5Zm.82 1.738A2.244 2.244 0 0 1 20.75 12h-1.5c0 1.166.533 2.209 1.367 2.895l.953-1.157Zm-1.404 5.253a10.742 10.742 0 0 0 1.986-3.447l-1.416-.494a9.239 9.239 0 0 1-1.709 2.965l1.14.976Zm-3.291.72a2.24 2.24 0 0 1 1.64-.24l.345-1.46a3.74 3.74 0 0 0-2.735.402l.75 1.299Zm-1.067 1.443a2.242 2.242 0 0 1 1.067-1.442l-.75-1.3a3.742 3.742 0 0 0-1.779 2.404l1.462.338ZM12 22.75c.912 0 1.798-.114 2.645-.328l-.368-1.454A9.27 9.27 0 0 1 12 21.25v1.5Zm-2.645-.328c.847.214 1.733.328 2.645.328v-1.5a9.27 9.27 0 0 1-2.277-.282l-.368 1.454Zm-2.23-2.71a2.24 2.24 0 0 1 1.067 1.442l1.462-.338a3.742 3.742 0 0 0-1.779-2.403l-.75 1.299Zm-1.641-.242a2.24 2.24 0 0 1 1.641.242l.75-1.3a3.74 3.74 0 0 0-2.735-.402l.344 1.46Zm-3.636-3.926a10.739 10.739 0 0 0 1.985 3.447l1.14-.976a9.238 9.238 0 0 1-1.709-2.965l-1.416.494ZM3.25 12c0 .7-.318 1.324-.82 1.738l.953 1.157A3.744 3.744 0 0 0 4.75 12h-1.5Zm-.82-1.738c.502.414.82 1.039.82 1.738h1.5a3.744 3.744 0 0 0-1.367-2.895l-.954 1.157ZM3.833 5.01a10.739 10.739 0 0 0-1.986 3.447l1.416.494a9.239 9.239 0 0 1 1.709-2.965l-1.14-.976Zm3.291-.721a2.24 2.24 0 0 1-1.64.241L5.14 5.99a3.74 3.74 0 0 0 2.735-.402l-.75-1.299Zm1.067-1.442a2.242 2.242 0 0 1-1.067 1.442l.75 1.299a3.742 3.742 0 0 0 1.779-2.403l-1.462-.338ZM12 1.25c-.912 0-1.798.114-2.645.328l.368 1.454A9.27 9.27 0 0 1 12 2.75v-1.5Zm2.645.328A10.77 10.77 0 0 0 12 1.25v1.5c.787 0 1.55.098 2.277.282l.368-1.454ZM9.654 3.184a.352.352 0 0 1 .062-.14c.018-.021.021-.015.007-.012l-.368-1.454c-.691.175-1.048.772-1.163 1.268l1.462.338Zm-6.27 5.92a.374.374 0 0 1-.111-.14c-.012-.03-.003-.03-.009-.014l-1.416-.494c-.266.762.146 1.448.581 1.806l.954-1.157ZM5.14 18.01a.351.351 0 0 1-.153.006c-.027-.006-.024-.012-.015-.001l-1.139.976c.463.54 1.155.596 1.651.48l-.344-1.46Zm4.583 2.958c.014.003.01.01-.007-.012a.352.352 0 0 1-.062-.14l-1.462.338c.115.496.472 1.093 1.163 1.268l.368-1.454Zm4.623-.152a.353.353 0 0 1-.062.14c-.018.021-.021.015-.007.012l.368 1.454c.691-.175 1.048-.772 1.163-1.268l-1.462-.338Zm4.681-2.801c.01-.01.013-.005-.014.001a.35.35 0 0 1-.153-.006l-.344 1.46c.496.117 1.188.061 1.65-.479l-1.139-.976Zm1.709-9.065c-.006-.015.003-.017-.009.014a.374.374 0 0 1-.11.14l.953 1.158c.436-.358.848-1.044.582-1.806l-1.416.494Zm-17.472 6.1c.006.015-.003.017.009-.014a.374.374 0 0 1 .11-.14l-.954-1.158c-.435.358-.847 1.044-.58 1.806l1.415-.494ZM18.86 5.99a.351.351 0 0 1 .153-.006c.027.006.023.011.014 0l1.14-.975c-.464-.54-1.156-.596-1.651-.48l.344 1.46ZM4.973 5.984c-.01.01-.013.005.014-.001a.351.351 0 0 1 .153.005l.344-1.46c-.495-.116-1.187-.06-1.65.48l1.139.976Zm15.644 8.91a.38.38 0 0 1 .11.141c.012.03.003.03.009.014l1.416.494c.266-.762-.146-1.448-.582-1.806l-.953 1.157Zm-4.81-12.049c-.114-.496-.47-1.093-1.162-1.268l-.368 1.454c-.014-.003-.01-.01.007.012a.35.35 0 0 1 .062.14l1.462-.338Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSettings;
