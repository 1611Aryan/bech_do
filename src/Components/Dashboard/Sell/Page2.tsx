import { BsArrowLeftCircle } from "react-icons/bs"
import { MdDone } from "react-icons/md"
import { useDropzone } from "react-dropzone"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { createPostEndpoint } from "../../../Endpoints"
import useTypedSelector from "../../../Hooks/useTypedSelector"

const thumbsContainer = {
  display: "flex",
  "flex-wrap": "wrap",
  marginTop: 16,
}

const Page2: React.FC<{
  data: {
    itemName: string
    description: string
    tags: string
    photos: { file: File; preview: string }[] | null
  }
  formData: FormData
  setPage: React.Dispatch<React.SetStateAction<number>>
  setData: React.Dispatch<
    React.SetStateAction<{
      itemName: string
      description: string
      tags: string
      photos: { file: File; preview: string }[] | null
    }>
  >
}> = ({ data, setPage, setData, formData }) => {
  const prevPage = () => setPage(1)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  const user = useTypedSelector(state => state.user)

  const photo = useRef<File>()

  const [files, setFiles] = useState<any[]>(data.photos || [])

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setData(input => ({ ...input, [e.target.name]: e.target.value }))

  const file2Base64 = (file: File) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setFiles([{ preview: reader?.result?.toString() || "" }])
    }
    reader.onerror = error => error
  }

  const onDrop = (file: File[]) => {
    file2Base64(file[0])
    photo.current = file[0]
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
    maxFiles: 1,
    maxSize: 500_000,
  })

  const thumbs = files.map(file => (
    <div className="thumb" key={file.name}>
      <div>
        <img src={file.preview} alt="" />
      </div>
    </div>
  ))

  useEffect(() => {
    setData(data => ({ ...data, photos: files }))

    return () => {
      files.forEach(file => URL.revokeObjectURL(file.preview))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files])

  const submitHandler = async () => {
    if (photo.current) formData.append("photos", photo.current)

    formData.append("itemName", data.itemName)
    formData.append("description", data.description)
    formData.append("tags", data.tags)
    formData.append("phone", user.profile.phone)

    try {
      setError("")
      setMessage("")
      // console.log(formData.forEach((v, key) => console.log(key, v)))

      const res = await axios[createPostEndpoint.method](
        createPostEndpoint.url,
        formData,
        { withCredentials: true }
      )

      setMessage(res.data.message)
    } catch (error: any) {
      console.log(error)
      if (error.response.data.message) {
        return setError(error.response.data.message)
      } else console.log("Error", error.message)
      return setError("We encountered an Error please try again later")
    }
  }

  return (
    <>
      <form encType="multipart/formdata">
        <div className="message">{message}</div>
        <div className="error">{error}</div>
        <div className="inputContainer">
          <label htmlFor="description">
            <span> Item Tags</span>
            <br />
            <small>Seperate Multiple Tags with " , "</small>
          </label>
          <br /> <br />
          <textarea
            name="tags"
            className="tags"
            onChange={changeHandler}
            value={data.tags}
            required
          ></textarea>
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
        <MdDone className="done" onClick={submitHandler} />

        <BsArrowLeftCircle onClick={prevPage} className="next" />
      </div>
    </>
  )
}

export default Page2
