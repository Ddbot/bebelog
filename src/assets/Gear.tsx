import styled from "styled-components"
const SVG = styled.svg`
  scale: 1.2;
`;

const Gear = (): JSX.Element => (
  <SVG
    width={36}
        viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx={256} cy={256} r={256} strokeWidth={16} stroke="red" />
    <g clipPath="url(#a)">      
      <path
        d="M187.759 203.142a62.478 62.478 0 0 0 29.324-37.983 62.461 62.461 0 0 0-6.268-47.575 63.14 63.14 0 0 0-85.914-22.89 62.472 62.472 0 0 0-30.94 62.397 62.467 62.467 0 0 0 7.884 23.161 63.13 63.13 0 0 0 85.914 22.89Zm-72.94-30.419a47.466 47.466 0 0 1 17.553-65.021 48.107 48.107 0 0 1 65.47 17.411 47.454 47.454 0 0 1-3.518 52.821 47.48 47.48 0 0 1-14.036 12.201 48.112 48.112 0 0 1-65.47-17.412h.001Zm24.365 97.57a123.626 123.626 0 0 0 34.254.007 2.426 2.426 0 0 1 2.204.947l15.592 19.865a17.593 17.593 0 0 0 22.482 4.37l41.38-23.769a17.565 17.565 0 0 0 7.496-21.763l-9.443-23.233a2.42 2.42 0 0 1 .286-2.4 122.335 122.335 0 0 0 17.073-29.444 2.431 2.431 0 0 1 1.931-1.446l25.126-3.51a17.577 17.577 0 0 0 15.079-17.327l.013-47.415a17.576 17.576 0 0 0-4.316-11.478 17.578 17.578 0 0 0-10.772-5.86l-25.1-3.493a2.423 2.423 0 0 1-1.932-1.446 123.289 123.289 0 0 0-7.514-15.301 123.575 123.575 0 0 0-9.542-14.098 2.434 2.434 0 0 1-.294-2.41l9.462-23.255a17.56 17.56 0 0 0-7.498-21.772l-41.356-23.74a17.596 17.596 0 0 0-22.476 4.372L175.689 26.6a2.425 2.425 0 0 1-2.213.943 123.641 123.641 0 0 0-34.254-.007 2.413 2.413 0 0 1-2.203-.947L121.426 6.724a17.596 17.596 0 0 0-22.482-4.369l-41.38 23.768a17.564 17.564 0 0 0-7.496 21.764L59.51 71.12a2.416 2.416 0 0 1-.285 2.4 122.325 122.325 0 0 0-17.073 29.443 2.428 2.428 0 0 1-1.931 1.447l-25.126 3.51A17.576 17.576 0 0 0 .016 125.247l-.014 47.415a17.57 17.57 0 0 0 15.089 17.337l25.1 3.493a2.428 2.428 0 0 1 1.932 1.447 123.113 123.113 0 0 0 17.056 29.4 2.424 2.424 0 0 1 .294 2.409L50.011 250a17.56 17.56 0 0 0 7.498 21.773l41.356 23.739a17.355 17.355 0 0 0 8.657 2.298 17.562 17.562 0 0 0 13.82-6.668l15.628-19.906a2.412 2.412 0 0 1 2.214-.944v.001Zm-14.012-8.32-15.629 19.906a2.512 2.512 0 0 1-3.211.625l-41.356-23.738a2.51 2.51 0 0 1-1.071-3.111l9.462-23.255a17.463 17.463 0 0 0-2.377-17.31 108.072 108.072 0 0 1-14.976-25.812 17.474 17.474 0 0 0-13.756-10.642l-25.1-3.493a2.509 2.509 0 0 1-2.156-2.477l.014-47.415a2.514 2.514 0 0 1 2.154-2.476l25.127-3.51a17.472 17.472 0 0 0 13.75-10.654 107.33 107.33 0 0 1 14.98-25.834 17.447 17.447 0 0 0 2.38-17.305L63.964 42.24a2.51 2.51 0 0 1 1.071-3.11l41.38-23.767a2.48 2.48 0 0 1 1.237-.328 2.507 2.507 0 0 1 1.975.952l15.592 19.865a17.454 17.454 0 0 0 16.079 6.54 108.622 108.622 0 0 1 30.1.007 17.47 17.47 0 0 0 16.09-6.535l15.629-19.906a2.515 2.515 0 0 1 3.21-.625l41.357 23.74a2.511 2.511 0 0 1 1.071 3.11l-9.462 23.254a17.465 17.465 0 0 0 2.377 17.31 108.043 108.043 0 0 1 14.976 25.813 17.47 17.47 0 0 0 13.755 10.642l25.101 3.493a2.508 2.508 0 0 1 2.155 2.476l-.013 47.415a2.51 2.51 0 0 1-2.154 2.476l-25.127 3.51a17.465 17.465 0 0 0-13.751 10.654 107.328 107.328 0 0 1-14.98 25.835 17.454 17.454 0 0 0-2.38 17.304l9.443 23.233a2.507 2.507 0 0 1-1.07 3.11l-41.38 23.767a2.518 2.518 0 0 1-3.212-.624l-15.592-19.864a17.446 17.446 0 0 0-16.079-6.541 108.69 108.69 0 0 1-30.1-.007 17.478 17.478 0 0 0-16.09 6.536v-.002Zm121.22 130.673v-.001a32.097 32.097 0 0 0-28.944-6.886 32.095 32.095 0 0 0 7.842 63.203 32.094 32.094 0 0 0 21.103-56.316h-.001Zm-8.154 35.435a17.098 17.098 0 0 1-15.057 5.742 17.086 17.086 0 0 1-7.738-3.02 17.085 17.085 0 0 1-7.191-14.421 17.092 17.092 0 0 1 15.893-16.567 16.965 16.965 0 0 1 12.407 4.151 17.111 17.111 0 0 1 1.686 24.115Zm142.891-201.055a42.607 42.607 0 0 0-21.094 42.55 42.597 42.597 0 0 0 5.378 15.793 43.023 43.023 0 0 0 58.553 15.605 42.611 42.611 0 0 0 19.993-25.902 42.594 42.594 0 0 0-4.276-32.441 43.03 43.03 0 0 0-58.554-15.605Zm48.364 44.076a27.575 27.575 0 0 1-4.804 9.739 27.574 27.574 0 0 1-8.194 7.126 28.003 28.003 0 0 1-38.108-10.128 27.602 27.602 0 0 1 2.051-30.714 27.598 27.598 0 0 1 8.163-7.092 28.002 28.002 0 0 1 38.108 10.128 27.332 27.332 0 0 1 2.784 20.94v.001Zm67.416-37.961-12.708-1.768a2.518 2.518 0 0 1-1.96-1.523 86.859 86.859 0 0 0-10.133-17.469 2.512 2.512 0 0 1-.345-2.47l4.767-11.716a17.557 17.557 0 0 0-7.498-21.773l-23.58-13.535a17.594 17.594 0 0 0-22.476 4.37l-7.923 10.09a2.447 2.447 0 0 1-2.17.944 87.225 87.225 0 0 0-20.528-.02 2.504 2.504 0 0 1-2.278-.93l-7.898-10.062a17.592 17.592 0 0 0-22.482-4.37L336.1 176.465a17.565 17.565 0 0 0-7.496 21.764l4.756 11.703a2.502 2.502 0 0 1-.339 2.46 86.298 86.298 0 0 0-10.149 17.506 2.518 2.518 0 0 1-1.958 1.521l-12.73 1.778a17.577 17.577 0 0 0-15.077 17.327l-.008 26.999a17.573 17.573 0 0 0 15.088 17.337l12.708 1.768a2.517 2.517 0 0 1 1.96 1.522 86.767 86.767 0 0 0 10.133 17.47c.267.346.44.756.501 1.19.06.433.006.875-.156 1.281l-4.766 11.715a17.557 17.557 0 0 0 7.498 21.773l23.58 13.535a17.356 17.356 0 0 0 8.657 2.299 17.562 17.562 0 0 0 13.82-6.669l7.922-10.09a2.426 2.426 0 0 1 2.17-.943 87.118 87.118 0 0 0 20.528.019 2.504 2.504 0 0 1 2.278.929l7.898 10.063a17.592 17.592 0 0 0 22.481 4.37l23.6-13.555a17.565 17.565 0 0 0 7.495-21.764l-4.757-11.703a2.512 2.512 0 0 1 .339-2.46 86.256 86.256 0 0 0 10.15-17.506 2.518 2.518 0 0 1 1.957-1.521l12.73-1.778a17.574 17.574 0 0 0 15.078-17.327l.008-26.999a17.573 17.573 0 0 0-15.089-17.337l-.001-.001Zm.08 44.332a2.513 2.513 0 0 1-2.153 2.475l-12.728 1.778a17.63 17.63 0 0 0-13.654 10.428 71.226 71.226 0 0 1-8.383 14.46 17.615 17.615 0 0 0-2.231 17.102l4.757 11.704a2.513 2.513 0 0 1-1.071 3.109l-23.598 13.554a2.518 2.518 0 0 1-3.212-.624l-7.898-10.063a17.617 17.617 0 0 0-15.834-6.564 72.12 72.12 0 0 1-16.991-.017 17.51 17.51 0 0 0-15.748 6.575l-7.923 10.09a2.517 2.517 0 0 1-3.211.624l-23.58-13.535a2.509 2.509 0 0 1-1.072-3.11l4.767-11.715a17.635 17.635 0 0 0-2.229-17.112 71.705 71.705 0 0 1-8.379-14.445 17.64 17.64 0 0 0-13.657-10.416l-12.708-1.768a2.509 2.509 0 0 1-2.155-2.477l.008-27a2.513 2.513 0 0 1 2.154-2.474l12.727-1.778a17.64 17.64 0 0 0 13.654-10.428 71.261 71.261 0 0 1 8.382-14.459 17.615 17.615 0 0 0 2.232-17.103L342.5 192.58a2.507 2.507 0 0 1 1.07-3.11l23.599-13.554a2.51 2.51 0 0 1 3.211.624l7.899 10.063a17.618 17.618 0 0 0 15.834 6.564 72.11 72.11 0 0 1 16.99.017 17.519 17.519 0 0 0 15.75-6.575l7.921-10.09a2.512 2.512 0 0 1 3.211-.624l23.581 13.535a2.513 2.513 0 0 1 1.071 3.11l-4.767 11.716a17.634 17.634 0 0 0 2.23 17.111 71.698 71.698 0 0 1 8.379 14.444 17.638 17.638 0 0 0 13.656 10.417l12.708 1.768a2.509 2.509 0 0 1 2.156 2.477l-.01 27ZM309.457 372.77a12.854 12.854 0 0 0-14.549-8.397l-13.927 2.712a75.046 75.046 0 0 0-14.088-12.247l.747-14.17a12.858 12.858 0 0 0-10.34-13.237l-28.093-5.46a12.862 12.862 0 0 0-14.545 8.4l-4.616 13.419a74.52 74.52 0 0 0-17.66 6.07l-11.886-7.726a12.855 12.855 0 0 0-16.634 2.335l-18.776 21.6a12.858 12.858 0 0 0 .002 16.797l9.305 10.697a74.54 74.54 0 0 0-3.553 18.333l-12.646 6.437a12.853 12.853 0 0 0-6.295 15.573l9.318 27.06a12.858 12.858 0 0 0 14.548 8.397l13.927-2.713a75.02 75.02 0 0 0 14.089 12.247l-.748 14.17a12.858 12.858 0 0 0 10.34 13.238l28.093 5.46a12.66 12.66 0 0 0 2.418.233 12.874 12.874 0 0 0 12.128-8.634l4.615-13.419a74.52 74.52 0 0 0 17.66-6.07l11.887 7.726a12.857 12.857 0 0 0 16.634-2.335l18.775-21.6a12.858 12.858 0 0 0-.002-16.797l-9.305-10.696a74.54 74.54 0 0 0 3.553-18.333l12.646-6.438a12.851 12.851 0 0 0 6.042-6.616 12.85 12.85 0 0 0 .253-8.956l-9.317-27.06Zm-17.565 36.28a12.819 12.819 0 0 0-6.967 10.773 59.562 59.562 0 0 1-3.227 16.648 12.819 12.819 0 0 0 2.43 12.587l8.884 10.212-16.265 18.711-11.35-7.376a12.822 12.822 0 0 0-12.802-.654 59.537 59.537 0 0 1-16.035 5.512 12.815 12.815 0 0 0-9.7 8.4l-4.406 12.812-24.337-4.73.714-13.528a12.82 12.82 0 0 0-5.831-11.41 60.116 60.116 0 0 1-12.81-11.136 12.825 12.825 0 0 0-12.114-4.187l-13.295 2.59-8.072-23.442 12.075-6.147a12.814 12.814 0 0 0 6.968-10.773 59.526 59.526 0 0 1 3.227-16.648 12.818 12.818 0 0 0-2.43-12.586l-8.884-10.212 16.266-18.712 11.349 7.376a12.812 12.812 0 0 0 12.802.654 59.557 59.557 0 0 1 16.038-5.512 12.823 12.823 0 0 0 9.697-8.4l4.407-12.812 24.336 4.73-.714 13.528a12.818 12.818 0 0 0 5.832 11.411 60.16 60.16 0 0 1 12.81 11.136 12.823 12.823 0 0 0 12.113 4.186l13.295-2.589 8.072 23.441-12.076 6.147Z"
        fill="#272A33"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h512v512H0z" />
      </clipPath>
    </defs>
  </SVG>
)

export default Gear
