const ArrowR = ({ className, ...props }) => {
  return (
    <svg
      height="19"
      width="19"
      fill="none"
      viewBox="0 0 19 19"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="9.5" cy="9.5" fill="#335B6B" r="9.5" />
      <path
        d="M9.47592 6.12891L12.8705 9.19342L9.47592 12.2579M12.399 9.19342H5.51562"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowR;
