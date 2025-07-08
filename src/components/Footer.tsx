
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiFillTwitterCircle } from "react-icons/ai";

interface FooterProps {
  onSubscribe?: (email: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onSubscribe }) => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setEmail(value);
    
    
    if (emailError) {
      setEmailError('');
    }
    if (successMessage) {
      setSuccessMessage('');
    }
  };

  const handleSubscribe = async (): Promise<void> => {
    
    if (!email.trim()) {
      setEmailError('Email é obrigatório');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Por favor, insira um email válido');
      return;
    }

    setIsSubmitting(true);
    setEmailError('');

    try {
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onSubscribe) {
        onSubscribe(email);
      }
      
      setSuccessMessage('Obrigado por se inscrever em nossa newsletter!');
      setEmail('');
    } catch (error) {
      setEmailError('Erro ao processar inscrição. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };



  return (
    <footer className="font-poppins w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {}        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
            {/* Coluna 1 - Logo e endereço */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Furniro.
            </h2>            <address className="text-gray-400 not-italic leading-relaxed">
              <span className="whitespace-nowrap">400 University Drive Suite 200 Coral</span><br />
              Gables,<br />
              FL 33134 USA
            </address>
          </div>          {/*coluna 2 - Links */}
          <div className="lg:ml-8">
            <h3 className="text-base font-medium text-gray-400 mb-6">
              Links
            </h3>
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/" 
                    className="text-black font-medium hover:text-primary transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/shop" 
                    className="text-black font-medium hover:text-primary transition-colors duration-200"
                  >
                    Shop
                  </Link>
                </li>                <li>
                  <Link 
                    to="#about" 
                    className="text-black font-medium hover:text-primary transition-colors duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="#contact" 
                    className="text-black font-medium hover:text-primary transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>            </nav>
          </div>          {/* coluna 3 - Help */}
          <div>
            <h3 className="text-base font-medium text-gray-400 mb-6">
              Help
            </h3>
            <nav>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="#payment-options" 
                    className="text-black font-medium hover:text-primary transition-colors duration-200"
                  >
                    Payment Options
                  </a>
                </li>
                <li>
                  <a 
                    href="#returns" 
                    className="text-black font-medium hover:text-primary transition-colors duration-200"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a 
                    href="#privacy-policies" 
                    className="text-black font-medium hover:text-primary transition-colors duration-200"
                  >
                    Privacy Policies
                  </a>
                </li>
              </ul>            </nav>
          </div>

          {/* Coluna 4 - Newsletter */}
          <div>
            <h3 className="text-base font-medium text-gray-400 mb-6">
              Newsletter
            </h3>            <div className="flex flex-col gap-4">
              <div className="w-full">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter Your Email Address"
                    disabled={isSubmitting}
                    className={`w-full text-sm text-gray-400 bg-transparent border-0 border-b ${
                      emailError 
                        ? 'border-red-500' 
                        : successMessage 
                        ? 'border-green-500' 
                        : 'border-black'
                    } pb-1 focus:outline-none focus:border-primary placeholder-gray-400 disabled:opacity-50`}
                    aria-label="Email para newsletter"
                    aria-describedby={emailError ? "email-error" : successMessage ? "email-success" : undefined}
                  />
                </div>
                
                {emailError && (
                  <p 
                    id="email-error" 
                    className="text-red-500 text-xs mt-1"
                    role="alert"
                  >
                    {emailError}
                  </p>
                )}
                
                {successMessage && (
                  <p 
                    id="email-success" 
                    className="text-green-600 text-xs mt-1"
                    role="status"
                  >
                    {successMessage}
                  </p>
                )}
              </div>
              <div className="w-fit">
                <button
                  onClick={handleSubscribe}
                  disabled={isSubmitting}
                  className="text-sm font-medium cursor-pointer text-black border-0 border-b border-black pb-1 hover:text-primary hover:border-primary transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Inscrever-se na newsletter"
                >
                  {isSubmitting ? 'ENVIANDO...' : 'SUBSCRIBE'}
                </button>
              </div>
            </div>
          </div>
        </div>        {/*seção de redes sociais */}
        <div className="mt-6 mb-8">
          <div className="flex items-center gap-3">
            <a
              href={'https://www.facebook.com/compassuol'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-70 transition-all duration-200 hover:scale-110"
              aria-label="Visitar Facebook da Compass UOL"
            >
              <FaFacebook />
            </a>
            <a
              href={'https://www.instagram.com/compass.uol?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-70 transition-all duration-200 hover:scale-110"
              aria-label="Visitar Instagram da Compass UOL"
            >
              <FaInstagram />
            </a>
            <a
              href={"https://x.com/compassuol?t=6MuSOtN28Z7SdtJURMyzTA&s=09"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-70 transition-all duration-200 hover:scale-110"
              aria-label="Visitar Twitter da Compass UOL"
            >
             <AiFillTwitterCircle  />
            </a>
            <a
              href={'https://www.linkedin.com/company/compass-uol'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-70 transition-all duration-200 hover:scale-110"
              aria-label="Visitar LinkedIn da Compass UOL"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>        {}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-black text-base">
            2023 furniro. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;