import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const Container = styled.button`
    position: relative;
    aspect-ratio: 1 / 1;
    max-width: 3rem;
    // position: absolute;
    background: white;
    z-index: 10;

    transform: translateY(-12.5%);

    border: none;
    & > svg {
        scale: 1.618;
    }
`;

const scales = [0.7, 0.56, 1.2, 1.7, 0.4];
const backgrounds = ['#03a29e','#FFA6D5','#FF5C58','#FFBD9B','#2C2891'];

const EyeIcon = () => {
    const [open, setOpen] = useState(true);

    function handleClick(event: React.PointerEvent<HTMLButtonElement>) {    
        setOpen(prev => !prev);

        let boutons_de_categories: any = document.querySelector('.categoriesBtns');
        let eye_menu_buttons = Array.from(document.querySelectorAll('a[href^="/events"'));
        let viz = document.querySelector('.viz');
                let listView = document.querySelector('.listView');
        viz?.classList.toggle('blur');

        listView?.classList.toggle('blur');

        if (!!boutons_de_categories && open) {
            boutons_de_categories!.style.filter = 'blur(10px)';
            boutons_de_categories!.style.opacity = '0.15';
            boutons_de_categories!.style.scale = '1.8';
            boutons_de_categories!.style.transform = 'rotateZ(14deg)';

            boutons_de_categories.querySelectorAll('button').forEach((b: any, i: number) => { 
                b.style.background = backgrounds[i];
                b.style.scale = String(scales[i]);
            });
        };
        if (!!boutons_de_categories && !open) {
            boutons_de_categories!.style.filter = 'none';
            boutons_de_categories!.style.opacity = '1';
            boutons_de_categories!.style.scale = '1';
            boutons_de_categories!.style.transform = 'rotateZ(0deg)';
            boutons_de_categories.querySelectorAll('button').forEach((b: any, i: number) => { 
                b.style.background = 'transparent';
                b.style.scale = '1';
            });    
        };

        eye_menu_buttons.forEach(link => { 
            link.classList.toggle('hidden');
        });
    };

    return <Container onClick={ handleClick }>
        <svg viewBox="0 0 50 50" width={ 24} fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48.3918 25.3109C48.1884 25.568 45.5305 28.8775 41.3138 32.1188C37.0889 35.3664 31.3583 38.5 25 38.5C18.6418 38.5 12.9111 35.3664 8.68622 32.1188C4.46877 28.877 1.81073 25.5668 1.60812 25.3108L1.36241 25L1.60812 24.6892C1.81073 24.4332 4.46877 21.123 8.68622 17.8812C12.9111 14.6336 18.6418 11.5 25 11.5C31.3583 11.5 37.0889 14.6336 41.3138 17.8812C45.5305 21.1225 48.1884 24.432 48.3918 24.6891C48.3918 24.6892 48.3919 24.6892 48.3919 24.6892L48.6376 25L48.3919 25.3108C48.3919 25.3108 48.3918 25.3108 48.3918 25.3109Z" strokeWidth={2} stroke="black"/>
<circle cx="25" cy="25" r="8.5" stroke="black" strokeWidth={2}/>
</svg>
</Container>
};

export default EyeIcon
