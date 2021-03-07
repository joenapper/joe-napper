// Styled
import styled from "styled-components";

const ContactSection = ({ primary }) => {
  return (
    <Contact primary={primary}>
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
  width: 30vw;
  margin: 0rem 35vw 6rem 35vw;
  padding-top: 4rem;
  text-align: center;

  h2 {
    font-size: 3rem;
    padding-bottom: 2.5rem;
    text-transform: uppercase;
  }

  form {
    display: flex;
    flex-direction: column;
    color: #f4f4f4;

    input,
    textarea {
      padding: 1rem 0rem;
      background: none;
      border: none;
      outline: none;
      border-bottom: 1px solid black;
      font-family: "Montserrat", sans-serif;
      font-size: 1rem;
      color: var(--body-text-color);

      ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: var(--body-text-color);
        opacity: 1; /* Firefox */
      }

      :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: var(--body-text-color);
      }

      ::-ms-input-placeholder {
        /* Microsoft Edge */
        color: var(--body-text-color);
      }
    }

    /* Removes chrome defaults from autocomplete */
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      box-shadow: 0 0 0 30px var(--body-color) inset !important;
      -webkit-box-shadow: 0 0 0 30px var(--body-color) inset !important;
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
      box-shadow: var(--custom-shadow);
      cursor: pointer;

      &:hover {
        box-shadow: 1px 1px 5px 1px #000;
      }
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

  @media (max-width: 1250px) {
    width: 60vw;
    margin: 0rem 20vw;
    padding: 4rem 0rem;
  }

  @media (max-width: 1025px) {
    form {
      input,
      textarea {
        font-size: 1.4rem;
      }
      button {
        font-size: 1.5rem;
        padding: 1.2rem 0rem;
      }
    }
  }

  @media (max-width: 550px) {
    width: 70vw;
    margin: 0rem 15vw;

    h2 {
      font-size: 2rem;
      padding-bottom: 2rem;
    }

    form {
      input,
      textarea {
        font-size: 1rem;
      }

      .row {
        flex-direction: column;

        #name {
          width: 100%;
        }

        #email {
          margin: 0rem;
        }
      }
    }
  }

  @media (max-width: 320px) {
    width: 80vw;
    margin: 0rem 10vw;
  }
`;

export default ContactSection;
