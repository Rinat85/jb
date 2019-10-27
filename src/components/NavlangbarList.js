import React from 'react';
import styled from 'styled-components';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import { useTranslation } from 'react-i18next';

const StyledLangbar = styled.div`
    display: flex;
    align-items: middle;
    color: white;
    font-size: 14px;
    padding: 0 16px;

    .country-label {
        color: white;
    }

    .flag-select .flag-options {
        background: rgba(0, 0, 0, 0.3);
    }

    .flag-select .flag-option:hover {
        background: rgba(255, 255, 255, 0.2);
    }

    .flag-select .arrow-down {
        color: white;
    }

    @media screen and (max-width: 600px) {
        .country-label {
            color: #333333;
        }

        .flag-select .flag-options {
            background: rgba(0, 0, 0, 0.3);
        }

        .flag-select .flag-option:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        .flag-select .arrow-down {
            color: #333333;
        }

        .flag-select .flag-option .country-label {
            color: white;
        }
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        .country-label {
            color: #333333;
        }

        .flag-select .flag-options {
            background: rgba(0, 0, 0, 0.3);
        }

        .flag-select .flag-option:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        .flag-select .arrow-down {
            color: #333333;
        }

        .flag-select .flag-option .country-label {
            color: white;
        }
    }

    @media screen and (min-width: 901px) and (max-width: 1023px) {
        font-size: 12px;
    }

`;

const NavlangbarList = () => {

    const { i18n } = useTranslation();

    const onSelectFlag = (countryCode) => {
        i18n.changeLanguage(countryCode)
    };

    return (
        <StyledLangbar>
            <ReactFlagsSelect
            defaultCountry="RU"
            countries={["RU", "UZ"]}
            customLabels={{"RU": "RU","UZ": "UZ"}}
            onSelect={onSelectFlag} />
        </StyledLangbar>
    );
};

export default NavlangbarList;