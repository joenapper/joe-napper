// Styled
import styled from "styled-components";

const ArticleSection = () => {
  return (
    <Article>
      <div className="container">
        <h2>Articles</h2>
        <p>
          I like to write short articles on tips and tricks ive learned over the
          years.....
        </p>
        <div className="cards">
          <div className="card">
            <h4>6 Simple Typography Tips</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde
              architecto nam ea nihil quibusdam omnis velit, vel eum iste.
            </p>
          </div>
          <div className="card">
            <h4>How To Start Coding?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde
              architecto nam ea nihil quibusdam omnis velit, vel eum iste.
            </p>
          </div>
          <div className="card">
            <h4>querySelector vs. getElementById</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde
              architecto nam ea nihil quibusdam omnis velit, vel eum iste.
            </p>
          </div>
        </div>
      </div>
    </Article>
  );
};

const Article = styled.div`
  background: var(--main-color);
  height: 60vh;

  .container {
    width: 50vw;
    margin: 0 25vw;
    text-align: center;

    h2 {
      font-size: 2rem;
      padding-top: 20rem;
      padding-bottom: 1rem;
    }

    p {
      font-size: 1.2rem;
      padding-bottom: 2rem;
    }

    .cards {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 2rem;
      transform: translateY(10%);

      .card {
        background-color: #fff;
        height: 200px;
        box-shadow: 1px 1px 5px 1px #ccc;
        position: relative;
        padding: 1rem;

        h4 {
          font-size: 1.2rem;
          padding-bottom: 1rem;
          height: 40%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        p {
          font-size: 1rem;
        }

        img {
          transition: 0.3s ease-in-out;
          position: absolute;
          bottom: 0;
          right: 0;
          transform: translate(-100%, 50%);
          &:hover {
            transform: translate(-50%, 50%) scale(1.5);
          }
        }
      }
    }
  }
`;

export default ArticleSection;
