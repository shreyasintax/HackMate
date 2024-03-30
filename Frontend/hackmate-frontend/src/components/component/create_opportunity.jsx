// /**
//  * This code was generated by v0 by Vercel.
//  * @see https://v0.dev/t/HRPR4bdT1jM
//  */
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Checkbox } from "../ui/checkbox"
import { Textarea } from "../ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "../ui/select"



import React, { useState } from 'react';

export function Create_opportunity() {
  const [image, setImage] = useState('hackathon3.jpeg');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    FAQs: [{ question: '', answer: '' }],
    mode: '',
    rewards: '',
  
    organizerContact: '',
    rounds: [
      { description: '', lastDate: '', result: '' } // Initial round
    ],
    eligibility: [ {
      yearOfGraduation:'',age:'',interCollegeAllowed:'false',interYearAllowed:'flase',teamMembersNumber:''
    }]
  });
  const handleRoundChange = (index, fieldName, value) => {
    const newRounds = [...formData.rounds];
    newRounds[index][fieldName] = value;
    setFormData({ ...formData, rounds: newRounds });
  };
  const addRound = () => {
    if (formData.rounds.length < 4) {
      setFormData({
        ...formData,
        rounds: [...formData.rounds, { description: '', lastDate: '', result: '' }]
      });
    }
  };
  const handleFaqChange = (index, fieldName, value) => {
    const newFaqs = [...formData.FAQs];
    newFaqs[index][fieldName] = value;
    setFormData({ ...formData, FAQs: newFaqs });
  };

  const addFaq = () => {
    setFormData({
      ...formData,
      FAQs: [...formData.FAQs, { question: '', answer: '' }]
    });
  };
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    if (id.startsWith('FAQ')) {
      const faqIndex = parseInt(id.split('-')[1]); // Extract FAQ index from id
      const updatedFaqs = [...formData.FAQs];
      updatedFaqs[faqIndex][id.split('-')[0]] = newValue; // Update question or answer based on id
      setFormData(prevState => ({
        ...prevState,
        FAQs: updatedFaqs
      }));
    }
    else if (id.startsWith('eligibility')) {
      const eligibilityField = id.split('[')[1].split(']')[0];
      const updatedEligibility = { ...formData.eligibility[0], [eligibilityField]: newValue };
      setFormData(prevState => ({
        ...prevState,
        eligibility: [updatedEligibility]
      }));
    } else {
      // For other fields, update normally
      setFormData({ ...formData, [id]: newValue });
    }
  
   
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
   
    console.log('Form Data:', formData);
    const roundsType = typeof formData.eligibility;
    console.log('Type of eligibility:', roundsType);
    try {
      // Send the formData to your backend using fetch or any HTTP client library
      const response = await fetch('/api/registerTeam', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Handle success
        console.log('Team registration successful');
      } else {
        // Handle error
        console.error('Team registration failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        // Append image data to formData
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <div className="flex items-center justify-between border-b pb-4">
        {/* Your navigation buttons */}
        <Button className="flex items-center space-x-2" variant="ghost">
          <ArrowLeftIcon className="w-4 h-4" />
          <span>Back</span>
        </Button>
      </div>
      <div className="mt-6 ">
        <h1 className="text-2xl font-semibold mb-6">Basic Details</h1>
        <div >
       
        <input
          type="file"
          id="image"
          accept="image/jpg, image/png image/jpeg"
          onChange={handleImageChange}
          className="mb-4 mt-3 hidden"
         
        />
         <label htmlFor="image">Change opportunity logo</label>
      </div>
      {image && (
       <div className="mb-5" style={{ width: '250px', height: '150px',borderRadius:'10%', overflow: 'hidden', border: '2px dashed black' }}>
       <img src={image } alt="Uploaded" style={{ width: '100%', height: '100%', objectFit: 'cover' , }} />
   </div>
      )}
        <form onSubmit={handleSubmit}>


          <div className="grid gap-6">
            <div>
            <label htmlFor="name">Name</label>
            <Input id="name" placeholder="Name" type="text" onChange={handleChange} />
            </div>
           
            <Input id="regDeadline" placeholder="Registration Deadline" type="date" onChange={handleChange} />
           
            <Input id="eligibility[yearOfGraduation]" placeholder="Year of Graduation" type="number" onChange={handleChange} />
            <Input id="eligibility[age]" placeholder="Age" type="number" onChange={handleChange} />
            <Input id="eligibility[teamMembersNumber]" placeholder="Team Members Number" type="number" onChange={handleChange} />
            
                  <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          id="eligibility[interYearAllowed]"
          checked={formData.interYearAllowed}
          onChange={handleChange}
        />
        <label className="text-sm font-medium leading-none" htmlFor="eligibility[interYearAllowed]">
          Inter-year allowed?
        </label>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          id="eligibility[interCollegeAllowed]"
          checked={formData.interCollegeAllowed}
          onChange={handleChange}
        />
        <label className="text-sm font-medium leading-none" htmlFor="interCollegeAllowed">
          Inter-college allowed?
        </label>
      </div>

            <Textarea id="description" placeholder="Description" onChange={handleChange} />
            <div>
              <label className="block text-sm font-medium mb-1">
                Timeline (Multiple rounds with each round having a. Description b. last date c. Results)
              </label>
              <div className="grid gap-4">
              {formData.rounds.map((round, index) => (
        <div key={index}>
          <h3>Round {index + 1}</h3>
          <Textarea
            type="text"
            value={round.description}
            onChange={(e) => handleRoundChange(index, 'description', e.target.value)}
            placeholder="Description"
          />
          <br></br>
          <div className="flex gap-4">
          <Input
            type="date"
            value={round.lastDate}
            onChange={(e) => handleRoundChange(index, 'lastDate', e.target.value)}
            placeholder="Last Date"
          />
          <Input
            type="text"
            value={round.result}
            onChange={(e) => handleRoundChange(index, 'result', e.target.value)}
            placeholder="Result"
          />
          </div>
          {/* <button type="button" onClick={() => removeRound(index)}>
            Remove Round
          </button> */}
        </div>
      ))}
      {formData.rounds.length < 4 && (
        <button type="button" onClick={addRound}>
          Add Round
        </button>
      )}
     
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">ADD questions</label>
            </div>
            <div className="grid gap-4">
              {formData.FAQs.map((FAQ, index) => (
        <div key={index}>
          <h3>Question {index + 1}</h3>
          <Textarea
            type="text"
            value={FAQ.question}
            onChange={(e) =>handleFaqChange(index, 'question', e.target.value)}
            placeholder="question"
          />
          <br></br>
          <Textarea
            type="text"
            value={FAQ.answer}
            onChange={(e) =>handleFaqChange(index, 'answer', e.target.value)}
            placeholder="answer"
          />
          {/* <button type="button" onClick={() => removeRound(index)}>
            Remove Round
          </button> */}
        </div>
      ))}
      {formData.rounds.length < 4 && (
        <button type="button" onClick={addFaq}>
          Add question
        </button>
      )}
     </div>

            <select id="mode" value = {formData.mode} onChange = {handleChange}>
                      <option value="">select mode</option>
                      <option value="offline">Offline</option>
                      <option value="online">Online</option>
                      {/* <option value="jpg">JPG</option> */}
                  </select>

            <Textarea id="rewards" placeholder="Rewards (description)" onChange={handleChange} />
            {/* <Textarea name="FAQs" placeholder="FAQs" onChange={handleChange} /> */}
            <Input id="organizerContact" placeholder="Organizer Contact" type="text" onChange={handleChange} />

            <button type="submit" className="mt-4">Next</button>
          </div>
        </form>
        
      </div>
    </div>
  );
}
// https://colorhunt.co/palette/cff5e7a0e4cb59c1bd0d4c92



function ArrowLeftIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>)
  );
}


// function ChevronRightIcon(props) {
//   return (
//     (<svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round">
//       <path d="m9 18 6-6-6-6" />
//     </svg>)
//   );
// }
