import React from 'react';

function OutlinedShapes({ width, height, colorClass, svgClass }) {
  return (
    <svg
      width={width ?? '20'}
      height={height ?? '20'}
      className={svgClass ?? ''}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.666504 8.16699L4.83317 0.666992L8.99984 8.16699H0.666504ZM4.83317 16.5003C3.9165 16.5003 3.13178 16.1739 2.479 15.5212C1.82623 14.8684 1.49984 14.0837 1.49984 13.167C1.49984 12.2364 1.82623 11.4481 2.479 10.802C3.13178 10.1559 3.9165 9.8331 4.83317 9.83366C5.74984 9.83366 6.53456 10.16 7.18734 10.8128C7.84011 11.4656 8.1665 12.2503 8.1665 13.167C8.1665 14.0837 7.84011 14.8684 7.18734 15.5212C6.53456 16.1739 5.74984 16.5003 4.83317 16.5003ZM4.83317 14.8337C5.2915 14.8337 5.684 14.6703 6.01067 14.3437C6.33734 14.017 6.50039 13.6248 6.49984 13.167C6.49984 12.7087 6.3365 12.3162 6.00984 11.9895C5.68317 11.6628 5.29095 11.4998 4.83317 11.5003C4.37484 11.5003 3.98234 11.6637 3.65567 11.9903C3.329 12.317 3.16595 12.7092 3.1665 13.167C3.1665 13.6253 3.32984 14.0178 3.6565 14.3445C3.98317 14.6712 4.37539 14.8342 4.83317 14.8337ZM3.49984 6.50033H6.1665L4.83317 4.10449L3.49984 6.50033ZM9.83317 16.5003V9.83366H16.4998V16.5003H9.83317ZM11.4998 14.8337H14.8332V11.5003H11.4998V14.8337ZM13.1665 8.16699C12.3748 7.50033 11.7115 6.93783 11.1765 6.47949C10.6415 6.02116 10.2146 5.61838 9.89567 5.27116C9.57623 4.92394 9.34706 4.59755 9.20817 4.29199C9.06928 3.98644 8.99984 3.66005 8.99984 3.31283C8.99984 2.68783 9.21873 2.16005 9.6565 1.72949C10.0943 1.29894 10.6393 1.08366 11.2915 1.08366C11.6665 1.08366 12.0173 1.1706 12.344 1.34449C12.6707 1.51838 12.9448 1.75783 13.1665 2.06283C13.3887 1.75727 13.6632 1.51783 13.9898 1.34449C14.3165 1.17116 14.6671 1.08421 15.0415 1.08366C15.6943 1.08366 16.2396 1.29894 16.6773 1.72949C17.1151 2.16005 17.3337 2.68783 17.3332 3.31283C17.3332 3.66005 17.2637 3.98644 17.1248 4.29199C16.9859 4.59755 16.7568 4.92394 16.4373 5.27116C16.1179 5.61838 15.6907 6.02116 15.1557 6.47949C14.6207 6.93783 13.9576 7.50033 13.1665 8.16699ZM13.1665 5.97949C14.1665 5.14616 14.8332 4.55588 15.1665 4.20866C15.4998 3.86144 15.6665 3.57671 15.6665 3.35449C15.6665 3.17394 15.6143 3.0281 15.5098 2.91699C15.4054 2.80588 15.2632 2.75033 15.0832 2.75033C14.9443 2.75033 14.8087 2.78838 14.6765 2.86449C14.5443 2.9406 14.3812 3.07616 14.1873 3.27116L13.1665 4.25033L12.1457 3.27116C11.9512 3.07671 11.7879 2.94116 11.6557 2.86449C11.5234 2.78783 11.3882 2.74977 11.2498 2.75033C11.0693 2.75033 10.9271 2.80588 10.8232 2.91699C10.7193 3.0281 10.6671 3.17394 10.6665 3.35449C10.6665 3.57671 10.8332 3.86144 11.1665 4.20866C11.4998 4.55588 12.1665 5.14616 13.1665 5.97949Z"
        className={colorClass ?? 'fill-[#7F7E7F]'}
      />
    </svg>
  );
}

export default OutlinedShapes;
