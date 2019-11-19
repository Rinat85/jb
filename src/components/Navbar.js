import React from 'react';
import styled from 'styled-components';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

const StyledNavbar = styled.ul`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 600px) {
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }

    @media screen and (min-width: 901px) and (max-width: 1200px) {
        justify-content: center;
    }
`;

const StyledNavbarItem = styled.li`
    padding: 28px 12px 27px 12px;

    @media screen and (max-width: 600px) {
        padding: 10px 17px;
        background-color: white;
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        padding: 10px 17px;
        background-color: white;
    }

    @media screen and (min-width: 901px) and (max-width: 1200px) {
        padding: 28px 15px 27px 0;
    }
    
`;

const StyledNavbarLink = styled.span`
    font-family: 'GothamPro-Medium';
    font-size: 12px;
    text-transform: uppercase;
    color: white;
    transition: text-shadow 0.3s ease-in-out;

    &:hover {
        text-shadow: -1px -1px 9px rgba(246,242,242,0.84);
    }

    @media screen and (max-width: 600px) {
        color: #2d2d2d;
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        color: #2d2d2d;
    }

    @media screen and (min-width: 901px) and (max-width: 1200px) {
        font-size: 12px;
    }

    @media screen and (min-width: 901px) and (max-width: 1023px) {
        font-size: 10px;
    }
`;

const Navbar = (props) => {

    const { t } = useTranslation();

    const migrationList = [
        {
            id : 1,
            title : `${t('наши услуги')}`,
            link : '#services' 
        },
        {
            id : 2,
            title : `${t('как мы работаем')}`,
            link : '#works' 
        },
        {
            id : 3,
            title : `${t('наши преимущества')}`,
            link : '#features' 
        },
        {
            id : 4,
            title : `${t('партнеры')}`,
            link : '#partners' 
        },
        {
            id : 5,
            title : `${t('контакты')}`,
            link : '#contacts' 
        }
    ];

    const mainList = [
        {
            id : 1,
            title : `${t("туризм")}`,
            link : '/tourism' 
        },
        {
            id : 2,
            title : `${t('миграция')}`,
            link : '/migration' 
        },
        {
            id : 3,
            title : `${t('о компании')}`,
            link : '#!' 
        }
    ];
    

    const tourismList = [
        {
            id : 1,
            title : `${t('наши услуги')}`,
            link : '#services' 
        },
        {
            id : 2,
            title : `${t('как мы работаем')}`,
            link : '#works' 
        },
        {
            id : 3,
            title : `${t('туры на сегодня')}`,
            link : '#tours' 
        },
        {
            id : 4,
            title : `${t('отзывы')}`,
            link : '#testimonials' 
        },
        {
            id : 5,
            title : `${t('партнеры')}`,
            link : '#partners' 
        },
        {
            id : 6,
            title : `${t('контакты')}`,
            link : '#contacts' 
        }
    ];

    let navbarList = [];

    switch (props.dataType) {
        case 'migration':
            navbarList = migrationList;
            break;
        case 'tourism':
            navbarList = tourismList;
            break;
        default:
            navbarList = mainList;
            break;
    }

    const navbarItems = navbarList.map(({id, title, link}) => {
        return (
            <StyledNavbarItem key={id}>
                <NavLink to={link}><StyledNavbarLink>{title}</StyledNavbarLink></NavLink>
            </StyledNavbarItem>
        )
    });

    return (
        <StyledNavbar>
            {navbarItems}
        </StyledNavbar>
    )
};

export default Navbar;