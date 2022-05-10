import './Footer.css'


const Footer = () => {
    const fbImg = 'https://www.ibanez.com/common/images/facebook.svg';
    const twitter = 'https://www.ibanez.com/common/images/twitter.svg';
    const ig = 'https://www.ibanez.com/common/images/instagram.svg';

 return (
     <footer className='FooterContainer'>
         <ul className='FooterList'>
             <li className='FooterLinks FirstLink'>Contacto</li>
             <li className='FooterLinks'>Términos y Condiciones</li>
             <li className='FooterLinks'>Nosotros</li>
             <li className='FooterLinks'>Ubicación</li>
         </ul>
         <div className='IconsContainer'>
             <h3>Síguenos:</h3>
             <div className='IconsDirection'>
             <img className='Icons' src={fbImg} alt='facebook'/>
                <img className='Icons Twitter' src={twitter} alt='facebook'/>
                <img className='Icons' src={ig} alt='facebook'/>
             </div>   
         </div>
     </footer>
 )
}

export default Footer;