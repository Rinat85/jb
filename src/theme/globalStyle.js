import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

function fontFace(name, src, fontWeight = 'normal', fontStyle = 'normal'){

    return `
      @font-face{
          font-family: "${name}";
          src: url(${require('../fonts/' + src + '.eot')});
          src: url(${require('../fonts/' + src + '.eot')}?#iefix) format("embedded-opentype"),
               url(${require('../fonts/' + src + '.woff')}) format("woff"),
               url(${require('../fonts/' + src + '.ttf')}) format("truetype");
  
          font-style: ${fontStyle};
          font-weight: ${fontWeight};
      }
    `;
  
  }
  
  export const GlobalStyle = createGlobalStyle`
  
    ${fontFace('GothamPro-Medium', 'gothampro/GothamPro-Medium', 'medium', 'normal')}
    ${fontFace('GothamPro-Bold', 'gothampro/GothamPro-Bold', 'medium', 'normal')}
    ${fontFace('GothamPro-Light', 'gothampro/GothamPro-Light', 'medium', 'normal')}
    
    ${fontFace('Geometria-Medium', 'geometria/Geometria-Medium', 'medium', 'normal')}
    ${fontFace('Geometria-Bold', 'geometria/Geometria-Bold', 'medium', 'normal')}
    ${fontFace('Geometria-BoldItalic', 'geometria/Geometria-BoldItalic', 'medium', 'normal')}
    ${fontFace('Geometria-Light', 'geometria/Geometria-Medium', 'medium', 'normal')}

    ${fontFace('ProximaNova-Bold', 'proximanova/ProximaNova-Bold', 'medium', 'normal')}

    ${fontFace('BankSansEFCY-Med', 'banksansefcy/BankSansEFCY-Med', 'medium', 'normal')}

    ${fontFace('Montserrat-Medium', 'montserrat/Montserrat-Medium', 'medium', 'normal')}
    
    ${reset}

    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }
  
    a {
      text-decoration: none;
    }
  
    body {
      font-family: 'GothamPro-Medium', Arial, Helvetica, sans-serif;
      background-color: ${props => (props.whiteColor ? 'white' : 'black')};
    }
  `;