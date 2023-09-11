export default function Article() {
  return (
    <>
      <article className="article">
        <h1 className="article__title">Hello </h1>
        <p>How are today</p>
        <label htmlFor="input">article</label>
        <input type="text" id="input" name="input"></input>
        <a
          href="https://en.wikipedia.org/wiki/Baker_Street_robbery"
          className="article__link"
        >
          Link
        </a>
      </article>
    </>
  );
}
