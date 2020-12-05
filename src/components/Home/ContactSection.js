// Styled
import styled from "styled-components";

const ContactSection = () => {
  return (
    <Contact>
      <h2>Get In Touch</h2>
      <form>
        <div className="row">
          <input type="text" id="name" placeholder="Your Name" />
          <input type="email" id="email" placeholder="Your Email" />
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="What would you like to talk about?"
        ></textarea>
        <button>Submit</button>
      </form>
    </Contact>
  );
};

const Contact = styled.div`
  padding-top: 15rem;
  padding-bottom: 15rem;
  width: 30vw;
  margin: 0 35vw;
  text-align: center;

  h2 {
    font-size: 3rem;
    padding-bottom: 2.5rem;
    text-transform: uppercase;
  }

  form {
    display: flex;
    flex-direction: column;

    input,
    textarea {
      padding: 1rem 0rem;
      background: none;
      border: none;
      outline: none;
      border-bottom: 1px solid black;
      font-family: "Montserrat", sans-serif;
      font-size: 1rem;
    }

    /* Removes chrome defaults from autocomplete */
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      box-shadow: 0 0 0 30px #f4f4f4 inset !important;
      -webkit-box-shadow: 0 0 0 30px #f4f4f4 inset !important;
    }

    textarea {
      resize: vertical;
      min-height: 100px;
      max-height: 600px;
    }

    button {
      padding: 1rem;
      margin-top: 1rem;
      border: none;
      background: var(--main-color);
      box-shadow: 1px 1px 5px 1px #919191; //needs work
      cursor: pointer;
      /* box-shadow: 1px 1px 5px 1px #ccc; */ //needs work
    }

    .row {
      display: flex;

      #name {
        width: 40%;
      }

      #email {
        margin-left: 1rem;
        flex-grow: 1;
      }
    }
  }
`;

export default ContactSection;
