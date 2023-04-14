import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAddUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle
      r={4}
      stroke="currentColor"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 10 7)"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M3 16.935c0-.86.54-1.628 1.351-1.917a16.794 16.794 0 0 1 11.298 0A2.036 2.036 0 0 1 17 16.934v1.315c0 1.188-1.052 2.1-2.227 1.932l-.955-.136a27.002 27.002 0 0 0-7.636 0l-.955.136A1.951 1.951 0 0 1 3 18.25v-1.315Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 11h4m-2-2v4"
    />
  </svg>
);
export default SvgAddUser;
