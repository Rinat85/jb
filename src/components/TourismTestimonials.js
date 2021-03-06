import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next';

import Container from './Container';
import SectionHeader from './SectionHeader';

const StyledTestimonialsSection = styled.section`
    padding: 97px 0 97px 0;

    .slick-slide div {
        vertical-align: top;
    }

    .slick-prev {
        border-radius: 50%;
        background-color: #a11a39;
    }

    .slick-next {
        border-radius: 50%;
        background-color: #a11a39;
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
    background-color: #f7f7f7;
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
        margin-bottom: 25px;
        font-family: 'GothamPro-Bold';
        color: #a11a39;
        font-size: 18px;
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

const TourismTestimonials = () => {

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
        <StyledTestimonialsSection id="testimonials">
            <Container>
                <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                    <SectionHeader text={t("Довольные клиенты")} color="#2d2d2d" subcolor="#a11a39" />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration={2} delay={500} animateOnce={true}>
                    <Slider {...settings}>
                        <div>
                            <StyledSliderItem avatar={"ava3"} postDate={"12.04.2019"}>
                                <h4>{t("Шахло Бернаева")}</h4>
                                <p>{t("Благодаря  компании JB travel провели с сыном замечательный отдых на нашей исторической Родине в Израиле. Цены нас порадовали да и отношение менеджера  турфирмы к нам было просто изумительное. Были учтены все наши пожелания. Это был замечательный отдых. Теперь путешевствовать только с JB!")}</p>
                            </StyledSliderItem>
                        </div>
                        <div>
                            <StyledSliderItem avatar={"ava4"} postDate={"02.05.2019"}>
                                <h4>{t("Камил Саидходжаев")}</h4>
                                <p>{t("Давно мечтали побывать в Грузии. Друг посоветовал обратиться в эту туристическую компанию. Сразу позвонили. Ничего лишнего все по делу. Можно самостоятельно подобрать себе тур с учётом своих запросов. Затем связались с оператором ,Мадина оказалась очень приятной в общении. Было приятным то что с тебя не пытаются вытянуть деньги,а даже и помогут подобрать более выгодный вариант по интреным ценам. Так и произошло в нашем случае. Большое спасибо компании за прекрасный отдых все было на пять с плюсом.")}</p>
                            </StyledSliderItem>
                        </div>
                        <div>
                            <StyledSliderItem avatar={"ava1"} postDate={"15.05.2019"}>
                                <h4>{t("Мадина Юнусова")}</h4>
                                <p>{t("Мы семьей ездили в Грецию  по туру компании JB. От поездки осталось уйма положительных эмоций! Порадовал чистый и комфортный отель! Плюс для детей много увлекательных программ! Отлично отдохнули все месте! Через пару месяцев снова в путешествие! На этот раз хотелось бы отправиться на какой то остров! Обязательно только с этой компанией! JB травел выполняет все обещания.")}</p>
                            </StyledSliderItem>
                        </div>
                        <div>
                            <StyledSliderItem avatar={"ava2"} postDate={"22.05.2019"}>
                                <h4>{t("Артур Онучак")}</h4>
                                <p>{t("Не однократно путешествовали с JB. Недавно вернулись из Шри Ланки. Спасибо, ребята, за чёткость и оперативность и качество. Всегда приятно иметь дело с профессионалами в своём деле. Успехов в бизнесе и новых туристических маршрутов!Надеюсь на скидку!")}</p>
                            </StyledSliderItem>
                        </div>
                        <div>
                            <StyledSliderItem avatar={"ava7"} postDate={"02.06.2019"}>
                                <h4>{t("Тимур Киямов")}</h4>
                                <p>{t("Отпуск уже был на носу.Ехать оттыхать на родину в Навои не хотелось. Обратился в JB. Ребята быстро подобрали тур в Эмираты по очень выгодным условиям. А потом сразу после эмитаров сделали визу на уикенд в Париж! Очень рад сотрудничеству!")}</p>
                            </StyledSliderItem>
                        </div>
                        <div>
                            <StyledSliderItem avatar={"ava5"} postDate={"19.07.2019"}>
                                <h4>{t("Мария Бросницкая")}</h4>
                                <p>{t("Хочу написать свой отзыв о туристической компании в Ташенте!Я обратилась в JB,так как очень хотела поехать в Египет с семьёй,а отзывы об этой компании весьма положительные.Очень хорошее отношение к клиентам,а так же дешёвые цены на туры.Мой менеджер был на связи в любое время,мне это очень понравилось.В моём отеле были отличные условия! В продаже есть абсолютно любые города мира,так что ваши мечты смогут стать реальными!")}</p>
                            </StyledSliderItem>
                        </div>
                    </Slider>
                </ScrollAnimation>
            </Container>
        </StyledTestimonialsSection>
    );
};

export default TourismTestimonials;