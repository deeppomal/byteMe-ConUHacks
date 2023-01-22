import React,{useState,} from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from "react-router-dom"
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export const UploadForm = () => {

    const [date,setDate] = useState(new Date().toDateString());
    const [category,setCategory] = useState('')
    const [amount,setAmount] = useState('')
    const [note,setNote] = useState('')
    const [location,setLocation] = useState('')
    const {state} = useLocation();  
    const { imageURL } = state;
    console.log(imageURL);

    const SearchPlaces = (text) => {
        setLocation(text.target.value)
        console.log('fg',text.target.value)
        var config = {
            method: 'get',
            url: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${text.target.value}&inputtype=text
            query&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=${process.env.REACT_APP_MAP_KEY}`,
            headers: {"Access-Control-Allow-Origin":"*" }
        };
        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
    }
  return (
    <div>
        <Link to="/">
            <div className='w-full p-4 '>
                <KeyboardBackspaceIcon style={{fontSize:35}} />
            </div>
        </Link>
        <div className='flex flex-col p-5'>
            <div className='flex justify-around'>
                <div className='w-1/12 flex justify-start'>
                    <p>Date</p>
                </div>
                <div className='w-3/4'>
                    <input type="text" className='ml-4 w-full' value={date} />
                    <div className='bg-gray-600 h-0.5 ml-4 w-10/12' />
                </div>
            </div>
            <div className='flex justify-around mt-10'>
                <div className='w-1/12 flex justify-start'>
                    <p>Category</p>
                </div>
                <div className='w-3/4'>
                    <input type="text" className='ml-4 w-full' value={category} />
                    <div className='bg-gray-600 h-0.5 ml-4 w-10/12' />
                </div>
            </div>
            <div className='flex justify-around mt-10'>
                <div className='w-1/12 flex justify-start'>
                    <p>Amount</p>
                </div>
                <div className='w-3/4'>
                    <input type="text" className='ml-4 w-full' value={amount} />
                    <div className='bg-gray-600 h-0.5 ml-4 w-10/12' />
                </div>
            </div>
            <div className='flex justify-around mt-10'>
                <div className='w-1/12 flex justify-start'>
                    <p>Note</p>
                </div>
                <div className='w-3/4'>
                    <input type="text" className='ml-4 w-full' value={note} />
                    <div className='bg-gray-600 h-0.5 ml-4 w-10/12' />
                </div>
            </div>
            <div className='flex justify-around mt-10'>
                <div className='w-1/12 flex justify-start'>
                    <p>Location</p>
                </div>
                <div className='w-3/4'>
                    <input type="text" className='ml-4 w-full' value={location} onChange={(text)=>SearchPlaces(text)} />
                    <div className='bg-gray-600 h-0.5 ml-4 w-10/12' />
                    
                </div>
            </div>
        </div>
        <div className='pl-10'>
            <Link to="/">
                <div className='bg-slate-500 w-1/2 rounded p-2 flex items-center justify-center mt-10'>
                    <p className='font-semibold text-xl text-white'>Save</p>
                </div>
            </Link>
           
        </div>
        
    </div>
  )
}
