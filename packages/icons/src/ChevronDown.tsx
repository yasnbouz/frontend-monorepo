import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m5 9 6.22 5.33a1.2 1.2 0 0 0 1.56 0L19 9"
    />
  </svg>
);
export default SvgChevronDown;
