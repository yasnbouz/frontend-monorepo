import * as React from 'react';
import { SVGProps } from 'react';
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      d="M5.05 8.734C4.207 7.608 5.01 6 6.419 6h11.164c1.409 0 2.212 1.608 1.367 2.734a4.747 4.747 0 0 0-.95 2.848V18a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-6.418a4.747 4.747 0 0 0-.95-2.848Z"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="M14 17v-6m-4 6v-6"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m16 6-.544-1.632A2 2 0 0 0 13.559 3h-3.117a2 2 0 0 0-1.898 1.368L8 6"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgTrash;
