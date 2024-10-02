export const ClockIcon = ({ color = "#3C4257" }: { color?: string }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 1.875C5.51269 1.875 1.875 5.51269 1.875 10C1.875 14.4873 5.51269 18.125 10 18.125C14.4873 18.125 18.125 14.4873 18.125 10C18.125 5.51269 14.4873 1.875 10 1.875ZM10.625 5C10.625 4.65482 10.3452 4.375 10 4.375C9.65482 4.375 9.375 4.65482 9.375 5V10C9.375 10.3452 9.65482 10.625 10 10.625H13.75C14.0952 10.625 14.375 10.3452 14.375 10C14.375 9.65482 14.0952 9.375 13.75 9.375H10.625V5Z"
        fill={color}
      />
    </svg>
  );
};
