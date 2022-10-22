import styled from "styled-components";
import { SVGIcon } from '../common-styles';

const MenuButton = styled(SVGIcon)`  
position: absolute;

  &:not(.hidden){
    grid-row: 2 / span 1;
    // margin: 1.5ch 0 2.25ch 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding: .5ch;
    border-radius: 50%;
    visibility: visible;
    pointer-events: all;
    transition: all .425s;
    scale: 1.6;
    opacity: 1;
    z-index: 10;
          transform: translateY(-100%);
  }


    &.hidden {
opacity: 0;
      pointer-events: none;
      transition: all .12s;
      scale: 1;
    }
  `;

const ListIcon = ({ toggleClass }: any) => {
  return <MenuButton to="/events_list" className="menuBtn hidden" onClick={toggleClass}>
    <svg viewBox="-5 -5 31 23" width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" pointerEvents={'all'}>
      <rect x="-5" y="-5" width={31} height={28} strokeWidth={2} stroke="black" />
      <path transform="translate(0 2.5)"
        d="M6 3h14c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1s.4 1 1 1Zm14 3H6c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1Zm0 5H6c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1ZM2.7 1.3c-.1-.1-.2-.2-.3-.2-.4-.2-.8-.1-1.1.2-.1.1-.2.2-.2.3-.1.3-.1.5 0 .8.1.1.1.2.2.3.1.1.2.2.3.2.1.1.3.1.4.1.3 0 .5-.1.7-.3.1-.1.2-.2.2-.3.1-.3.1-.5 0-.8 0-.1-.1-.2-.2-.3Zm0 5c-.3-.3-.7-.4-1.1-.2-.1.1-.2.1-.3.2-.1.1-.2.2-.2.3-.1.2-.1.5 0 .8.1.1.1.2.2.3.1.1.2.2.3.2.1.1.3.1.4.1.1 0 .3 0 .4-.1.1-.1.2-.1.3-.2.1-.1.2-.2.2-.3.1-.2.1-.5 0-.8 0-.1-.1-.2-.2-.3Zm0 5c-.1-.1-.2-.2-.3-.2-.2-.1-.5-.1-.8 0-.1 0-.2.1-.3.2-.1.1-.2.2-.2.3-.2.4-.1.8.2 1.1.1.1.2.2.3.2.1.1.3.1.4.1.1 0 .3 0 .4-.1.1-.1.2-.1.3-.2.3-.3.4-.7.2-1.1 0-.1-.1-.2-.2-.3Z"
        fill="#000"
      />
    </svg></MenuButton>
};

export default ListIcon
