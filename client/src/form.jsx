import { PaperClipIcon } from '@heroicons/react/20/solid'
import Additem from './additem'
import ToDoItem from './todoitem'
import InputArea from './inputArea'
export default function Example() {
  return (
    <div className='background'>
      <div className="px-4 sm:px-0 ">
        <h3 className="text-base font-semibold leading-7 text-gray-900 flex justify-center items-center">Applicant Information</h3>
        <p className="mt-1  text-sm leading-6 text-gray-500 flex justify-center items-center">Personal details and application.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 mx-10">Full name</dt>
           <input type="text"name="name"id="name"placeholder='Enter your Name'></input>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 mx-10">Application for</dt>
            <input type="text"name="name"id="name"placeholder='Enter type of job application'></input>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 mx-10">Email address</dt>
            <input type="email"name="email"id="email"placeholder='Enter your email address'></input>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 mx-10">Education</dt>
            <ul>
            <li><input type="text"name="education"id="education"placeholder='Enter your college name'></input></li>
            <li className="mt-2"><input type="text"name="education"id="education"placeholder='Enter your Department'></input></li>
            
           
            </ul>
           
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 mx-10">Grade</dt>
           <input type="text"name="grade"id="grade"placeholder='Enter your Grade'></input>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 mx-10">Skills</dt>
            <Additem/>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 mx-10">Experience</dt>
          

<textarea id="experience" name="experience" placeholder="enter your work expereince" rows="4" cols="50">
</textarea>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 mx-10">Projects</dt>
           <Additem/></div>
           
           <div className="col-span-full">
          <label for="cover-photo" className="block text-sm font-medium leading-6 text-gray-900 mx-10">Cover photo</label>
          <div className="mt-2 flex justify-center rounded-lg  px-6 py-10">
            <div className="text-center">
              <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a Photo</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only"></input>
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
     

         
        </dl></div>
    </div>
  )}

