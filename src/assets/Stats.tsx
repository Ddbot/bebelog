const Stats = (): JSX.Element => (
  <svg
    viewBox="0 0 21 21"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5,
    }}
  >
    <path
      d="m0 10.032 5.59-.012 3.106-3.097 3.228 5.613 2.61-2.523L20 10"
      style={{
        fill: "none",
        stroke: "#000",
        strokeWidth: 1,
      }}
      transform="translate(.5 .5)"
    />
    <path
      style={{
        fill: "none",
        stroke: "#000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeMiterlimit: 2,
      }}
      d="M0 0h20v20H0z"
      transform="translate(.5 .5)"
    />
  </svg>
)

export default Stats
