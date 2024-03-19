import React from 'react'
import { Button } from '../ui/button'
import { useParams } from 'react-router-dom';

const AcceptOpportunity = () => {
    const SendPatch = async () => {
        let {teamId}=useParams();
        try {
            const response = await fetch(`http://localhost:8080/hackmate/v1/team/${teamId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({}), // Example data to send with the PATCH request
            });

            if (response.ok) {
                // Handle success
                console.log('Invitation accepted successfully');
            } else {
                // Handle error
                console.error('Failed to accept invitation');
            }
        } catch (error) {
            console.error(error)
        }
        return (
            <div>
                <button onClick={SendPatch}>Accept Invite</button>
            </div>
        )
    }
}

export default AcceptOpportunity;
