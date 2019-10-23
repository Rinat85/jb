import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Container from './Container';
import SectionHeader from './SectionHeader';
import Bg from '../img/testimonials-bg.png';

const StyledTestimonialsSection = styled.section`
    padding: 97px 0 97px 0;
    background: url(${Bg}) no-repeat center center;
    background-size: cover;

    .slick-dots li button:before {
        content: '◇';
        font-size: 22px !important;
        color: #b55c70 !important;
    }

    .slick-dots li.slick-active button:before {
        content: '◆';
        opacity: 1;
        color: #b55c70 !important;
    }

    @media screen and (max-width: 600px) {
        padding: 37px 0 57px 0;   
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        padding: 37px 0 57px 0;   
    }

    @media screen and (min-width: 901px) and (max-width: 1200px) {
        .slick-prev {
            left: 25px;
        }

        .slick-next {
            right: 25px;
        }
    }

`;

const StyledSliderItem = styled.div`
    max-width: 540px;
    min-height: 300px;
    background-color: white;
    position: relative;
    z-index: 100;
    overflow: visible;
    margin: 40px auto 37px;

    ::before {
        content: '';
        display: block;
        width: 90px;
        height: 90px;
        position: absolute;
        top: -40px;
        left: 20px;
        z-index: 200;
        border-radius: 50%;
        background: url('../img/${props => props.avatar}.png') no-repeat center center;
        background-size: cover;
    }

    ::after {
        content: '${props => props.postDate}';
        display: inline-block;
        position: absolute;
        top: 32px;
        right: 0;
        padding-right: 27px;
        font-family: 'GothamPro-Light';
        font-weight: 500;
        font-size: 14px;
        color: #323232;
    }

    h4 {
        padding-top: 30px;
        margin-bottom: 15px;
        font-family: 'GothamPro-Bold';
        color: #a11a39;
        font-size: 18px;
        text-align: center;
    }

    h5 {
        margin-bottom: 50px;
        font-family: 'GothamPro-Light';
        font-size: 14px;
        color: #323232;
        text-align: center;
    }

    p {
        padding: 0 32px 48px 32px;
        font-family: 'GothamPro-Light';
        font-size: 14px;
        color: #898888;
        line-height: 1.5em;
    }

    @media screen and (max-width: 600px) {
        max-width: 80%;

        ::before {
            width: 65px;
            height: 65px;
            top: -20px;
        }

        ::after {
            top: 22px;
        }

        h4 {
            padding-top: 45px;
        }

        p {
            color: #333333;
            font-weight: 600;
        }
        
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        max-width: 90%;

        ::before {
            width: 65px;
            height: 65px;
            top: -20px;
        }

        ::after {
            top: 22px;
        }

        h4 {
            padding-top: 45px;
        }
        
    }

    @media screen and (min-width: 901px) and (max-width: 1200px) {
        max-width: 430px;
        margin: 40px auto 37px auto;

        ::before {
            content: '';
            display: block;
            width: 100px;
            height: 100px;
            position: absolute;
            top: -25px;
            left: 20px;
            z-index: 200;
            background: url('../img/${props => props.avatar}.png') no-repeat center center;
            background-size: cover;
        }
    }
`;

const testimonials = {
    user1: {
        name: 'Севара Гафарова',
        position: 'Швея(Италия)',
        post: 'Окончила техникум по швейному делу работала за копейки в Узбекистане. Нашла в интернете данную компанию. Пришла в офис менеджеры все рассказали выбрали работу по специальности! Оперативно оформили документы. Отправили в Италию там меня встретили обеспечили жильем - уже 9 месяцев получаю достойную зарплату!',
        date: '11.04.2019',
        ava: 'ava11'
    },
    user2: {
        name: 'Сардор Бахтиев',
        position: 'Каменьщик(Сан - франциско)',
        post: 'Оформлялся через компанию JB еще в 2018 году. Хотел отделочником. Взяли каменщиком. Работа на стройке в Сан-франциско. Сейчас зарплата минимум 3000 дол/мес. Визу ребята оформили быстро. Спасибо Вам JB что круто изменили мою жизнь. Сейчас еще отца подтяну!',
        date: '03.05.2019',
        ava: 'ava6'
    },
    user3: {
        name: 'Ильдар Сафаров',
        position: 'Водитель ( Варшава)',
        post: 'Работал как то в Москве. Ездит нужно было по 20 часов в сутки без сна из рейса в рейс. Тут обратился в компанию JB. Сотрудники пригласили в офис. Собрали документы. Через 2 недели позвонили попросили приехать. Нашли работу в Варшаве на Больше груз. Сделали визу отправили все рассказали. Только приехал через два дня уже в рейсе был. Всем доволен! Спасибо!',
        date: '17.05.2019',
        ava: 'ava8'
    },
    user4: {
        name: 'Гульнара Ахмедова',
        position: 'Сборщица фруктов( Испания)',
        post: 'Хочу выразить благодарность компании JB. Мы изменили жизнь девушки из Ташкентской области. Я счастлива и всем довольна. Не думала, что без знания языка и образования я могла бы найти работу в Европе. Но вы очень быстро помогли мне. Сейчас я получаю хорошую зарплату и помогаю своей семье. Высылаю им деньги. Спасибо JB!',
        date: '24.05.2019',
        ava: 'ava12'
    },
    user5: {
        name: 'Шакир Маговедов',
        position: 'Плотник( Руайан )',
        post: 'Здравствуйте! Спасибо большое этой компании за помощь в трудный период в жизни, через них поехал во Францию работать в порту плотником. Мне помогли со всеми документами жильем. Примерно через месяц и пару недель я уже была на месте и работал, оформили полностью легально. За что хочу сказать большое спасибо!',
        date: '08.06.2019',
        ava: 'ava9'
    },
    user6: {
        name: 'Ислам Дильмиров',
        position: 'Сварщик ( Прага)',
        post: 'Ездил через компанию JB сварщиком в Чехию. Работали на небольшом предприятии в маленьком цеху. Заработок был хороший очень. График плавающий – один день работали дольше на второй день можно было брать меньше часов и нормально высыпаться. Жилье хорошее, бесплатное к тому же .Спасибо вам.',
        date: '21.07.2019',
        ava: 'ava10'
    }
};

const sliderItem = (Object.values(testimonials)).map( user => {
    return (
        <div key={user}>
            <StyledSliderItem avatar={user.ava} postDate={user.date}>
                <h4>{user.name}</h4>
                <h5>{user.position}</h5>
                <p>{user.post}</p>
            </StyledSliderItem>
        </div>
    )
});

export default class TestimonialsSection extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <StyledTestimonialsSection>
                <Container>
                    <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                        <SectionHeader text="Довольные клиенты" color="#ffffff" subcolor="#ffffff" />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" duration={2} delay={300} animateOnce={true}>
                        <Slider {...settings}>
                            {sliderItem}
                        </Slider>
                    </ScrollAnimation>
                </Container>
            </StyledTestimonialsSection>
        );
    }
};