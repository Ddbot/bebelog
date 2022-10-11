import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.button`
    aspect-ratio: 1 / 1;
    max-width: 3rem;
    position: absolute;
    background: white;
    z-index: 10;

    border: none;
    & > svg {
        scale: 1.618;
    }

`;

const scales = [0.7, 0.56, 1.2, 1.7, 0.4];
const backgrounds = ['#03a29e','#FFA6D5','#FF5C58','#FFBD9B','#2C2891'];

const EyeIcon = () => {
    const [open, setOpen] = useState(true);
    const params = useParams();

    function handleClick(event: React.PointerEvent<HTMLButtonElement>) {    
        setOpen(prev => !prev);

        let boutons_de_categories: any = document.querySelector('.categoriesBtns');
        let eye_menu_buttons = Array.from(document.querySelectorAll('a[href^="/events"'));
        let viz = document.querySelector('.viz');
                let listView = document.querySelector('.listView');
        viz?.classList.toggle('blur');

        listView?.classList.toggle('blur');

        console.log('eye_menu_buttons ', eye_menu_buttons);
        
        
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
            console.log('HIDDEN: ', eye_menu_buttons);
    };

    

    useEffect(() => { 
        
    }, [open]);
    
    return <Container onClick={ handleClick }>
    <svg viewBox='0 0 24 24' width={24} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1ZM12.22 17c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.9 7.61-5 4.29-.11 7.11 3.59 8 5-1.03 1.61-3.61 4.9-7.61 5Z"
            fill="#000"
        />
        <path
            d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#000"
        />
    </svg></Container>
};

export default EyeIcon
