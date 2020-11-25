// Styled
import styled from "styled-components";

const ContactSection = () => {
  return (
    <Contact>
      <h2 className="contact-header">Need to talk with me?</h2>
      <h2>Get In Touch</h2>
      <form>
        <div className="row">
          <input type="text" id="name" />
          <input type="email" id="email" />
        </div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <input type="submit" />
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Contact>
  );
};

const Contact = styled.div`
  padding-top: 15rem;
  /* height: 50vh; */
  width: 50%;
  margin: 0 auto;
  text-align: center;
  .contact-header {
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
    padding-bottom: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
    input,
    textarea {
      padding: 1rem;
    }
    .row {
      display: flex;
      /* input {
        padding: 1rem;
      } */
      #name {
        width: 40%;
      }
      #email {
        flex-grow: 1;
      }
    }
  }
`;

export default ContactSection;
