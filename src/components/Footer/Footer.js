import React from 'react';
import { Button } from '../../globalStyles';
import {
	FaFacebook,
	FaLinkedin,
	FaInstagram,
	FaYoutube,
	FaTwitter,
} from 'react-icons/fa';
import {
	FooterContainer,
	FooterSubscription,
	FooterSubHeading,
	FooterSubText,
	Form,
	FormInput,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinksItems,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialmediaWrap,
	SocialLogo,
	SocialIcon,
	WebsiteRight,
	SocialIcons,
	SocialIconLinks,
} from './Footer.elements';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterSubscription>
				<FooterSubHeading>
					Join our exclusive membership to receive the latest News and trends.
				</FooterSubHeading>
				<FooterSubText>You can unsubscribe at any time.</FooterSubText>
				<Form>
					<FormInput name="email" type="email" placeholder="Your Email" />
					<Button fontBig>Subscribe</Button>
				</Form>
			</FooterSubscription>
			<FooterLinksContainer>
				<FooterLinksWrapper>
					<FooterLinksItems>
						<FooterLinkTitle>About Us</FooterLinkTitle>
						<FooterLink to="/sign-up">How it Works</FooterLink>
						<FooterLink to="/">Testimonials</FooterLink>
						<FooterLink to="/">Careers</FooterLink>
						<FooterLink to="/">Investors</FooterLink>
						<FooterLink to="/">Term of Service</FooterLink>
					</FooterLinksItems>
					<FooterLinksItems>
						<FooterLinkTitle>Contact Us</FooterLinkTitle>
						<FooterLink to="/sign-up">How it Works</FooterLink>
						<FooterLink to="/">Testimonials</FooterLink>
						<FooterLink to="/">Careers</FooterLink>
						<FooterLink to="/">Investors</FooterLink>
						<FooterLink to="/">Term of Service</FooterLink>
					</FooterLinksItems>
				</FooterLinksWrapper>
				<FooterLinksWrapper>
					<FooterLinksItems>
						<FooterLinkTitle>Videos</FooterLinkTitle>
						<FooterLink to="/sign-up">How it Works</FooterLink>
						<FooterLink to="/">Testimonials</FooterLink>
						<FooterLink to="/">Careers</FooterLink>
						<FooterLink to="/">Investors</FooterLink>
						<FooterLink to="/">Term of Service</FooterLink>
					</FooterLinksItems>
					<FooterLinksItems>
						<FooterLinkTitle>Social media</FooterLinkTitle>
						<FooterLink to="/sign-up">How it Works</FooterLink>
						<FooterLink to="/">Testimonials</FooterLink>
						<FooterLink to="/">Careers</FooterLink>
						<FooterLink to="/">Investors</FooterLink>
						<FooterLink to="/">Term of Service</FooterLink>
					</FooterLinksItems>
				</FooterLinksWrapper>
			</FooterLinksContainer>
			<SocialMedia>
				<SocialmediaWrap>
					<SocialLogo to="/">
						<SocialIcon />
						ULTRA
					</SocialLogo>
					<WebsiteRight>ULTRA 2020.</WebsiteRight>
					<SocialIcons>
						<SocialIconLinks href="/" target="_blank" aria-label="Facebook">
							<FaFacebook />
						</SocialIconLinks>
						<SocialIconLinks href="/" target="_blank" aria-label="instagram">
							<FaInstagram />
						</SocialIconLinks>
						<SocialIconLinks
							href="/"
							target="_blank"
							aria-label="Youtube"
							rel="noopener noreferrer"
						>
							<FaYoutube />
						</SocialIconLinks>
						<SocialIconLinks href="/" target="_blank" aria-label="Twitter">
							<FaTwitter />
						</SocialIconLinks>
						<SocialIconLinks href="/" target="_blank" aria-label="linkendIn">
							<FaLinkedin />
						</SocialIconLinks>
					</SocialIcons>
				</SocialmediaWrap>
			</SocialMedia>
		</FooterContainer>
	);
};

export default Footer;
