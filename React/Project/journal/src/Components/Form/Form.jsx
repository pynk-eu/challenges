export default function Form() {
  return (
    <div>
      <form>
        <p>NEW ENTRY</p>
        <div>
          <label htmlFor="motto">Motto</label>
          <br />
          <input type="text" id="motto" name="motto"></input>
        </div>
        <div>
          <label htmlFor="notes">Notes</label>
          <br />
          <textarea id="notes"></textarea>
        </div>
      </form>
      <button type="submit" className="button">
        Create
      </button>
    </div>
  );
}
