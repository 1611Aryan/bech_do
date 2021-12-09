import { FaRegTimesCircle } from "react-icons/fa"
import { BsArrowRightCircle } from "react-icons/bs"
import { Link } from "react-router-dom"

const Page1: React.FC<{
  setPage: React.Dispatch<React.SetStateAction<number>>
}> = ({ setPage }) => {
  const nextPage = () => setPage(2)

  return (
    <>
      <form>
        <div className="inputContainer">
          <label htmlFor="itemName">Item Name</label>
          <br /> <br />
          <input type="text" name="itemName" autoFocus required />
        </div>
        <div className="inputContainer">
          <label htmlFor="description">Item Description</label>
          <br /> <br />
          <textarea
            name="description"
            className="description"
            required
          ></textarea>
        </div>
      </form>
      <div className="btnContainer">
        <Link to="/dashboard">
          <FaRegTimesCircle className="cancel" />
        </Link>

        <BsArrowRightCircle onClick={nextPage} className="next" />
      </div>
    </>
  )
}

export default Page1
