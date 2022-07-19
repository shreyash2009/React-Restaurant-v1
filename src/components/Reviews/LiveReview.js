import React, { useState } from 'react'
import data from '../../utility/LiveData'
const LiveReview = () => {
    const [review,setReview] = useState({               //this will store the review on enter 
        rName: "",
        nReview: ""
    });
    const [people,setPeople] = useState(data);              //to maintain array of object which stores newly added reviews
    let len =  people.length;

    const handleChange = (event)=>{                     //handle changes made in input 
        const {name,value} = event.target;              //event.target returns an object of attributes of input tag
        setReview((preValue)=>{
            if(name === 'reviewName'){
                return{
                    rName : value,
                    nReview : preValue.nReview
                }
            }
            else if (name === 'reviewComment'){
                return{
                    rName : preValue.rname,
                    nReview : value
                }
            }
        })

    }

    const HandleSubmit = (event)=>{                         //need to prevent  default submit
        event.preventDefault();
        // console.log(review.rname);                          //we can access all the input fields value by the value 
        const {rName,nReview} = review;
        const name = rName;
        const nreview = nReview; 
        const newEntry = {
            id : len+1,
            name : name,
            review : nreview
        }
        console.log(newEntry)
        setPeople([...people,newEntry]);                        
    }
  return (
    <section id='LiveReview'>
        <h3 className='LiveReviewHeading'>Live Review</h3>
        <div className='container'>
            <div className='showfield'>
            <ol className='LiveList'>
                {
                    
                    people.map((person)=>{
                        const {id, name, review} = person;
                        return(
                            <li className='LiveListElem'>
                                <article className='Live_review' key={id}>
                                        <h5 className='personName'>{id}.{name}</h5>
                                        <p className='personReview'>{review}</p>
                                </article>
                            </li>
                        )
                    })
                }
                </ol>
            </div>
            <div className='inputfield'>
            <h4>Share Your experience</h4>
                <form onSubmit={HandleSubmit}>
                    <label> Name:-
                <input width="80px" type="text" id='reviewName' placeholder='enter your name' name="reviewName" onChange={handleChange} value={review.rName}/>
                </label>
                <lable style={{fontWeight:"bold"}} className="textarea"> Comment:- 
                <textarea  name="reviewComment" id='reviewComment' placeholder='Enter comment....' onChange={handleChange} value={review.nReview}/>
                </lable>
                <button type='submit'>Submit Review</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default LiveReview