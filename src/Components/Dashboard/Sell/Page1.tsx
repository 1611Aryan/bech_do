import { FaRegTimesCircle } from "react-icons/fa"
import { BsArrowRightCircle } from "react-icons/bs"
import { Link } from "react-router-dom"

const Page1: React.FC<{
  data: {
    itemName: string
    description: string
    tags: string
    photos: { file: File; preview: string }[] | null
  }
  setPage: React.Dispatch<React.SetStateAction<number>>
  setData: React.Dispatch<
    React.SetStateAction<{
      itemName: string
      description: string
      tags: string
      photos: { file: File; preview: string }[] | null
    }>
  >
}> = ({ setPage, setData, data }) => {
  const nextPage = () => setPage(2)

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setData(input => ({ ...input, [e.target.name]: e.target.value }))

  return (
    <>
      <form>
        <div className="inputContainer">
          <label htmlFor="itemName">Item Name</label>
          <br /> <br />
          <input
            type="text"
            name="itemName"
            onChange={changeHandler}
            value={data.itemName}
            autoFocus
            required
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="description">Item Description</label>
          <br /> <br />
          <textarea
            name="description"
            className="description"
            value={data.description}
            required
            onChange={changeHandler}
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
