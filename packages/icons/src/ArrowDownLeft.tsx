import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowDownLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.854 17.303H7.197a1 1 0 0 1-1-1v-4.657m.707 4.95 9.9-9.9"
    />
  </svg>
);
export default SvgArrowDownLeft;
