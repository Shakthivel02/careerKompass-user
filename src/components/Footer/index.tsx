import { ReactElement } from "react";
import {
  FooterImageWrapper,
  Footer,
  FooterImage,
  FooterTerms,
  FooterTermsWrapper,
  ListGroup,
  ListItems,
  ListItemsHead,
} from "./subcomponents";

const FooterComponent = (): ReactElement => {
  return (
    <>
      <Footer>
        <FooterImageWrapper>
          <FooterImage alt="Logo" src="/assets/footer.png" />
        </FooterImageWrapper>
        <ListGroup>
          <ListItemsHead>Links</ListItemsHead>
          <ListItems>Home</ListItems>
          <ListItems>Courses</ListItems>
          <ListItems>Contact</ListItems>
        </ListGroup>
        <ListGroup>
          <ListItemsHead>Support</ListItemsHead>
          <ListItems>FAQ</ListItems>
          <ListItems>Features</ListItems>
        </ListGroup>
        <ListGroup>
          <ListItemsHead>Contact Us</ListItemsHead>
          <ListItems>+91 78240 20024</ListItems>
          <ListItems>support@careerKompass.com</ListItems>
          <ListItems>Chennai - 600 004</ListItems>
        </ListGroup>
      </Footer>
      <FooterTermsWrapper>
        <FooterTerms>Copyrights & Design By Cloudkampass</FooterTerms>
        <FooterTerms>Terms of use | Privacy Policy</FooterTerms>
      </FooterTermsWrapper>
    </>
  );
};

export default FooterComponent;
