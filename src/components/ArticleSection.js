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
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde
              architecto nam ea nihil quibusdam omnis velit, vel eum iste.
            </p>
          </div>
          <div className="card">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde
              architecto nam ea nihil quibusdam omnis velit, vel eum iste.
            </p>
          </div>
          <div className="card">
            <h4>Lorem ipsum dolor sit amet.</h4>
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
  background: #fdda3e;
  height: 50vh;
  .container {
    /* background-color: green; */
    width: 50%;
    margin: auto;
    text-align: center;
    h2 {
      font-size: 2rem;
      padding-top: 15rem;
      padding-bottom: 1rem;
    }
    p {
      font-size: 1.2rem;
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
        h4 {
          font-size: 1.2rem;
          padding-bottom: 1rem;
        }
        p {
          font-size: 1rem;
        }
      }
    }
  }
`;

export default ArticleSection;
