import { Movie } from "@/components/Model/Model"
import { FC, useState } from "react"
import FileBase from "react-file-base64"
import styles from '@/styles/Home.module.css'
import { NextRouter, useRouter } from "next/router"


const POST: string = "POST"
const API_FORM: string = "http://localhost:3001/api/movies/add"


const Form:FC= () => {
const [formData, setFormData]=useState<Movie>({ name: "" , creator: "", body: "", image: ""})
const [error, setError] =useState<any>([])
const [isPending, setIsPending] =useState<boolean>(false) 
const navigate: NextRouter = useRouter()


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const movie = { ...formData };
    setIsPending(true)
    const res: Response = await fetch(API_FORM, {
      method: POST,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    });
    const data = await res.json();
    console.log(data);
    navigate.push("/movies")
    setIsPending(false);
    setError(null);
  } catch (error: any) {
    setError(error.message);
    setIsPending(false);
  }
};


return (
    <div className={""}  >
    <div className="w-full max-w-xs">
    <div>{error ? error : null}</div>
    <form  onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" >
          Title
        </label>
        <input value={formData.name} onChange={(e) => setFormData({...formData , name: e.target.value})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Pikachu..." />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" >
          Content
        </label>
        <textarea  value={formData.body} onChange={(e) => setFormData({...formData , body: e.target.value})}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"   placeholder="..." />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" >
          Creator
        </label>
        <select value={formData.creator} onChange={(e) => setFormData({...formData , creator: e.target.value})}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  >
          <option value="mario">mario</option>
          <option value="alex">Alex</option>
        </select>
      </div>
      <div className="mb-6">
        <FileBase  multiple={false}  type="file"  value={formData.image} onDone={({base64}) => setFormData({...formData , image: base64}) } />
    </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {isPending ? "Submit.." :"Submit"}
        </button>
      </div>
    </form>
  </div>
  </div>
);
}

export default Form