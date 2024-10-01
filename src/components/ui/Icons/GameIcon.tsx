export const GameIcon = ({ color = "#3C4257" }: { color?: string }) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.8208 14.2258C18.4625 14.6783 17.585 15.0008 17.585 15.0008L11.0583 17.3483V15.6166L15.8617 13.9025C16.4067 13.7075 16.49 13.4308 16.0475 13.2858C15.605 13.1408 14.8042 13.1816 14.2583 13.3783L11.0583 14.5066V12.7108L11.2425 12.6475C11.2425 12.6475 12.1675 12.32 13.4675 12.1758C14.7683 12.0325 16.3608 12.1958 17.6108 12.67C19.0192 13.1158 19.1775 13.7733 18.8208 14.2258ZM11.6792 11.2775V6.85163C11.6792 6.33163 11.5833 5.8533 11.0958 5.7183C10.7233 5.5983 10.4917 5.94497 10.4917 6.46413V17.55L7.50584 16.6008V3.3833C8.775 3.61913 10.625 4.17747 11.6192 4.51247C14.1483 5.38163 15.0058 6.46413 15.0058 8.90163C15.0058 11.2775 13.5408 12.1783 11.6792 11.2783M2.02667 15.4366C0.580005 15.0283 0.339171 14.1783 0.998338 13.6891C1.6075 13.2375 2.64417 12.8975 2.64417 12.8975L6.92584 11.3725V13.1108L3.84417 14.215C3.3 14.41 3.21667 14.6866 3.65834 14.8316C4.10167 14.9775 4.9025 14.9358 5.4475 14.74L6.92584 14.2033V15.7575L6.63084 15.8075C5.1525 16.0491 3.57834 15.9483 2.02667 15.4366Z"
        fill={color}
      />
    </svg>
  );
};
