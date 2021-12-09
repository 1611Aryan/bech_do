import { BsArrowLeftCircle } from "react-icons/bs"
import { Link } from "react-router-dom"
import { MdDone } from "react-icons/md"
import { useDropzone } from "react-dropzone"
import { useEffect, useState } from "react"

const thumbsContainer = {
  display: "flex",
  "flex-wrap": "wrap",
  marginTop: 16,
}

const thumb = {
  display: "inline-flex",
  "border-radius": 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
}

const thumbInner = {
  display: "flex",
  "min-width": 0,
  overflow: "hidden",
}

const img = {
  display: "block",
  width: "auto",
  height: "100%",
}

const Page2: React.FC<{
  setPage: React.Dispatch<React.SetStateAction<number>>
}> = ({ setPage }) => {
  const prevPage = () => setPage(1)

  const [files, setFiles] = useState<any[]>([])
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      setFiles(files => [
        ...files,
        ...acceptedFiles.map(file => ({
          ...file,
          preview: URL.createObjectURL(file),
        })),
      ])
    },
  })

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt="" />
      </div>
    </div>
  ))

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  return (
    <>
      <form>
        <div className="inputContainer">
          <label htmlFor="description">
            <span> Item Tags</span>
            <br />
            <small>Seperate Multiple Tags with " , "</small>
          </label>
          <br /> <br />
          <textarea name="tags" className="tags" required></textarea>
        </div>
        <div className="inputContainer">
          <label htmlFor="photos">Item Photos</label>
          <br /> <br />
          <div className="photos">
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside style={thumbsContainer}>{thumbs}</aside>
          </div>
        </div>
      </form>
      <div className="btnContainer">
        <Link to="/dashboard">
          <MdDone className="done" />
        </Link>

        <BsArrowLeftCircle onClick={prevPage} className="next" />
      </div>
    </>
  )
}

export default Page2
