import React from 'react';

function OutlinedCamera({ colorClass, svgClass }) {
  return (
    <svg
      className={svgClass ?? 'w-4 h-4'}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.668 2.33317H13.0263L11.5013 0.666504H6.5013L4.9763 2.33317H2.33464C1.89261 2.33317 1.46868 2.50877 1.15612 2.82133C0.843563 3.13389 0.667969 3.55781 0.667969 3.99984V13.9998C0.667969 14.4419 0.843563 14.8658 1.15612 15.1783C1.46868 15.4909 1.89261 15.6665 2.33464 15.6665H15.668C16.11 15.6665 16.5339 15.4909 16.8465 15.1783C17.159 14.8658 17.3346 14.4419 17.3346 13.9998V3.99984C17.3346 3.55781 17.159 3.13389 16.8465 2.82133C16.5339 2.50877 16.11 2.33317 15.668 2.33317ZM15.668 13.9998H2.33464V3.99984H5.70964L7.23464 2.33317H10.768L12.293 3.99984H15.668V13.9998ZM9.0013 4.83317C7.89623 4.83317 6.83643 5.27216 6.05502 6.05356C5.27362 6.83496 4.83464 7.89477 4.83464 8.99984C4.83464 10.1049 5.27362 11.1647 6.05502 11.9461C6.83643 12.7275 7.89623 13.1665 9.0013 13.1665C10.1064 13.1665 11.1662 12.7275 11.9476 11.9461C12.729 11.1647 13.168 10.1049 13.168 8.99984C13.168 7.89477 12.729 6.83496 11.9476 6.05356C11.1662 5.27216 10.1064 4.83317 9.0013 4.83317ZM9.0013 11.4998C8.33826 11.4998 7.70238 11.2364 7.23354 10.7676C6.76469 10.2988 6.5013 9.66288 6.5013 8.99984C6.5013 8.3368 6.76469 7.70091 7.23354 7.23207C7.70238 6.76323 8.33826 6.49984 9.0013 6.49984C9.66434 6.49984 10.3002 6.76323 10.7691 7.23207C11.2379 7.70091 11.5013 8.3368 11.5013 8.99984C11.5013 9.66288 11.2379 10.2988 10.7691 10.7676C10.3002 11.2364 9.66434 11.4998 9.0013 11.4998Z"
        className={colorClass ?? 'fill-grayscale-400'}
      />
    </svg>
  );
}

export default OutlinedCamera;
