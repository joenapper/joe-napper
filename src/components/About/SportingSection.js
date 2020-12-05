import styled from "styled-components";

const SportingSection = () => {
  return (
    <Sport>
      <article>
        <h2>Sports Coaching</h2>
        {/* and Competitive Background */}
        <p>
          From a very early age I trained in a number of martial arts -
          taekwondo being my favourite. I spent a lot of time training and
          perfecting my skills which taught me the importance of practice and
          hard work. My dedication paid off as I was soon placed on the
          competitive team and after a successful career I decided to transition
          into coaching. I enjoyed sharing my knowledge with others and helping
          them improve their skills which in turn improved my teamwork and
          leadership skills.
        </p>
      </article>
      <div></div>
    </Sport>
  );
};

const Sport = styled.section`
  background-color: #fff;
  padding: 6rem 0;

  article {
    width: 40vw;
    margin: 0 30vw;
    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      text-align: center;
    }

    p {
      font-size: 1rem;
      line-height: 1.7;
      letter-spacing: 2px;
      text-align: justify;
    }
  }

  div {
    height: 2px;
    background-color: var(--main-color);
    width: 10%;
    margin: 1rem auto;
    border-radius: 50%;
  }
`;

export default SportingSection;
