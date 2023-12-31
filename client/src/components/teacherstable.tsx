import React, { useState,useRef } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Input,Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,

} from "@material-tailwind/react";
 
import { useReactToPrint } from 'react-to-print';
import { Spinner } from "@material-tailwind/react";
export default function Teacherdetailtable() {
    const [data,setdata]=useState([]);
    const coverttopdf=useRef();
    const generatepdf=useReactToPrint({
      content:()=>coverttopdf.current,
      documentTitle:"Teachers Table",
    })
    const [finaldata,setfinaldata]=useState([]);
    const cookies = new Cookies();
    const [load,setload]=useState(false);
    const auth=cookies.get('_UID');
    const getteacherdata=async(token:any)=>{
      setload(true)
       try{
        const res=await axios.get(`http://localhost:8000/teacher.api/${token}`);
            console.log(res.data);
              setdata(res.data);
              setfinaldata(res.data);
              setload(false);
       } catch(err){
        setload(true);
        return err;
       }  
    }
    useEffect(()=>{
     getteacherdata(auth);
    },[])
    const [filterval,setfilterval]=useState("");
const searchbarchange=(e:React.ChangeEvent<HTMLInputElement>)=>{
       if(e.target.value===''){
            setdata(finaldata);
       }else{
         const filtered= data.filter(el=>el.teacher_name.toLowerCase().includes(e.target.value.toLowerCase()));
         setdata(filtered);
       }
       setfilterval(e.target.value);
}

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};
const [open, setOpen] = useState(0);
    const handleOpen = (value:any) => setOpen(open === value ? 0 : value);
  return (
    <div>
       <div style={{display:'flex',alignItems:'center',justifyContent:'right',gap:"5px"}}>
       {/* <Link to="/human_resoures/add_teachers">
    <Button style={{display:'flex',alignItems:'center',justifyContent:'right',margin:'auto',gap:"5px"}}>
        <svg className="h-6 w-6"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  
        strokeWidth="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="12" y1="5" x2="12" y2="19" /> 
         <line x1="5" y1="12" x2="19" y2="12" /></svg>Insert Teachers</Button>
         </Link>  */}
         <Button onClick={generatepdf} style={{display:'flex',alignItems:'center',justifyContent:'center',gap:"5px"}}>
         <svg className="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> 
          <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 3v4a1 1 0 0 0 1 1h4" />  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  
         <line x1="12" y1="11" x2="12" y2="17" />  <polyline points="9 14 12 17 15 14" /></svg>Download as Pdf</Button>
       </div>
  
        <div style={{marginTop:'10px'}} className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
   <div style={{width:'50%',marginBottom:'5px'}}>
   <label className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input  value={filterval} onInput={(e) => searchbarchange(e)} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required=""/>
                        </div>
   </div>
      <div  className="max-w-full overflow-x-auto">
        <table ref={coverttopdf} className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Photo
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Name
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
            Department
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
            Role
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Email
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Sex
              </th>
               <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
               Phone
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
              Date of Leaving
            </th>
             
            </tr>
          </thead>
          <tbody>
   {load?<Spinner style={{margin:'auto',display:'flex',alignItems:'center',position:'fixed',left:'57%'}} className="h-10 w-10"/>:data?.map((el)=>(
       
      <tr key={el.id}>

      <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
      <Accordion style={{marginBottom:'10px'}} className="" open={open === el.id} animate={CUSTOM_ANIMATION}>


        <img style={{cursor:'pointer'}} onClick={() => handleOpen(el.id)} className="w-20 h-20" src={`http://localhost:8000/${el.teacher_img}`} alt="" />
       <AccordionBody>
        <div className="flex items-center space-x-3.5">
        <Link to={`/human_resoures/teaching-staff/${el.id}`}>
        <button className="hover:text-primary">
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                fill=""
              />
              <path
                d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                fill=""
              />
            </svg>
          </button></Link>
         
          <button className="hover:text-primary">
          <svg className="h-6 w-6"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>

          </button>
          <button className="hover:text-primary">
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8754 11.6719C16.5379 11.6719 16.2285 11.9531 16.2285 12.3187V14.8219C16.2285 15.075 16.0316 15.2719 15.7785 15.2719H2.22227C1.96914 15.2719 1.77227 15.075 1.77227 14.8219V12.3187C1.77227 11.9812 1.49102 11.6719 1.12539 11.6719C0.759766 11.6719 0.478516 11.9531 0.478516 12.3187V14.8219C0.478516 15.7781 1.23789 16.5375 2.19414 16.5375H15.7785C16.7348 16.5375 17.4941 15.7781 17.4941 14.8219V12.3187C17.5223 11.9531 17.2129 11.6719 16.8754 11.6719Z"
                fill=""
              />
              <path
                d="M8.55074 12.3469C8.66324 12.4594 8.83199 12.5156 9.00074 12.5156C9.16949 12.5156 9.31012 12.4594 9.45074 12.3469L13.4726 8.43752C13.7257 8.1844 13.7257 7.79065 13.5007 7.53752C13.2476 7.2844 12.8539 7.2844 12.6007 7.5094L9.64762 10.4063V2.1094C9.64762 1.7719 9.36637 1.46252 9.00074 1.46252C8.66324 1.46252 8.35387 1.74377 8.35387 2.1094V10.4063L5.40074 7.53752C5.14762 7.2844 4.75387 7.31252 4.50074 7.53752C4.24762 7.79065 4.27574 8.1844 4.50074 8.43752L8.55074 12.3469Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        </AccordionBody>
        </Accordion>

      </td>
      <td className='border-b border-[#eee] py-5 px-4 dark:border-strokedark'>
      <h5 className="font-medium text-black dark:text-white">
           {el.teacher_name}
        </h5>
      </td>
      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
        <p className="text-black dark:text-white">{el.department}</p>
      </td>
      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
        <p className="text-black dark:text-white">
          {el.role}
        </p>
        
      </td>
      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
        <p className="text-black dark:text-white">{el.email}</p>
      </td>
      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
        <p className="text-black dark:text-white">{el.gender}</p>
      </td>
      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
        <p className="text-black dark:text-white">{el.phone}</p>
      </td>
      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
        <p className="text-black dark:text-white">{el.dateofleaving}</p>
      </td>
     
      
    
    </tr>
   
   ))}
         
           </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}
