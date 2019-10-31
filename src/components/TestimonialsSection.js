import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next';

import Container from './Container';
import SectionHeader from './SectionHeader';
import Bg from '../img/testimonials-bg.png';

const StyledTestimonialsSection = styled.section`
    padding: 97px 0 97px 0;
    background: url(${Bg}) no-repeat center center;
    background-size: cover;

    .slick-slide div {
        vertical-align: top;
    }

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
    min-height: 320px;
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

const TestimonialsSection = () => {

    const { t } = useTranslation();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        initialSlide: 0,
        easing: 'ease-in-out',
        adaptiveHeight: true,
        rows: 2,
        slidesPerRow: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
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
                    <SectionHeader text={t("Довольные клиенты")} color="#ffffff" subcolor="#ffffff" />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" duration={2} delay={300} animateOnce={true}>
                    <Slider {...settings}>
                        <div>
                            <StyledSliderItem avatar={"ava11"} postDate={"11.04.2019"}>
                                <h4>{t("Севара Гафарова")}</h4>
                                <h5>{t("Швея (Италия)")}</h5>
                                <p>{t("Окончила техникум по швейному делу работала за копейки в Узбекистане. Нашла в интернете данную компанию. Пришла в офис менеджеры все рассказали выбрали работу по специальности! Оперативно оформили документы. Отправили в Италию там меня встретили обеспечили жильем - уже 9 месяцев получаю достойную зарплату!")}</p>
                            </StyledSliderItem>
                        </div>
                        <div>
                            <StyledSliderItem avatar={"ava6"} postDate={"03.05.2019"}>
                                <h4>{t("Сардор Бахтиев")}</h4>
                                <h5>{t("Каменьщик (Сан - франциско)")}</h5>
                                <p>{t("Оформлялся через компанию JB еще в 2018 году. Хотел отделочником. Взяли каменщиком. Работа на стройке в Сан-франциско. Сейчас зарплата минимум 3000 дол/мес. Визу ребята оформили быстро. Спасибо Вам JB что круто изменили мою жизнь. Сейчас еще отца подтяну!")}</p>
                            </StyledSliderItem>
                        </div>
                        <div>
                            <StyledSliderItem avatar={"ava8"} postDate={"17.05.2019"}>
                                <h4>{t("Ильдар Сафаров")}</h4>
                                <h5>{t("Водитель (Варшава)")}</h5>
                                <p>{t("Работал как то в Москве. Ездит нужно было по 20 часов в сутки без сна из рейса в рейс. Тут обратился в компанию JB. Сотрудники пригласили в офис. Собрали документы. Через 2 недели позвонили попросили приехать. Нашли работу в Варшаве на Больше груз. Сделали визу отправили все рассказали. Только приехал через два дня уже в рейсе был. Всем доволен! Спасибо!")}</p>
                            </StyledSliderItem>
                        </div>
                        <div>
                            <StyledSliderItem avatar={"ava12"} postDate={"24.05.2019"}>
                                <h4>{t("Гульнара Ахмедова")}</h4>
                                <h5>{t("Сборщица фруктов (Испания)")}</h5>
                                <p>{t("Хочу выразить благодарность компании JB. Мы изменили жизнь девушки из Ташкентской области. Я счастлива и всем довольна. Не думала, что без знания языка и образования я могла бы найти работу в Европе. Но вы очень быстро помогли мне. Сейчас я получаю хорошую зарплату и помогаю своей семье. Высылаю им деньги. Спасибо JB!")}</p>
                            </StyledSliderItem>
                        </div>
                        <div>
                            <StyledSliderItem avatar={"ava9"} postDate={"08.06.2019"}>
                                <h4>{t("Шакир Маговедов")}</h4>
                                <h5>{t("Плотник (Руайан)")}</h5>
                                <p>{t("Здравствуйте! Спасибо большое этой компании за помощь в трудный период в жизни, через них поехал во Францию работать в порту плотником. Мне помогли со всеми документами жильем. Примерно через месяц и пару недель я уже была на месте и работал, оформили полностью легально. За что хочу сказать большое спасибо!")}</p>
                            </StyledSliderItem>
                        </div>
                        <div>
                            <StyledSliderItem avatar={"ava10"} postDate={"21.07.2019"}>
                                <h4>{t("Ислам Дильмиров")}</h4>
                                <h5>{t("Сварщик (Прага)")}</h5>
                                <p>{t("Ездил через компанию JB сварщиком в Чехию. Работали на небольшом предприятии в маленьком цеху. Заработок был хороший очень. График плавающий – один день работали дольше на второй день можно было брать меньше часов и нормально высыпаться. Жилье хорошее, бесплатное к тому же .Спасибо вам.")}</p>
                            </StyledSliderItem>
                        </div>
                    </Slider>
                </ScrollAnimation>
            </Container>
        </StyledTestimonialsSection>
    );
};

export default TestimonialsSection;