import { useParams } from 'react-router-dom';
import { Opportunity } from './opportunity';

export function OpportunityPage() {
  const { id } = useParams();

  // Fetch opportunity data based on the id parameter, e.g., from an API
  // Replace this with your actual data fetching logic
  const dummyOpportunityData = fetchOpportunityData(id);

  return <Opportunity dummyOpportunityData={dummyOpportunityData} />;
}

// Function to fetch opportunity data based on the id parameter
function fetchOpportunityData(id) {
    // You can replace this with your actual data fetching logic
    // For now, let's use dummy data based on the id
    switch (id) {
      case '1':
        return {
          logo: "/placeholder.svg",
          title: "Hackathon 2024",
          registrationEnd: "Registration ends on March 15, 2024 at 11:59 PM",
          timeline: [
            { phase: "Round 1: Idea Submission", description: "Submit your project idea" },
            { phase: "Round 2: Prototype Submission", description: "Submit your working prototype" },
            { phase: "Round 3: Final Presentation", description: "Teams will present their projects" }
          ],
          description: "The Hackathon 2024 is an opportunity for students to showcase their innovative ideas and coding skills. Participants will have 24 hours to collaborate and develop a working prototype of their project. The event will be judged by a panel of industry experts, and the top teams will receive exciting prizes.",
          mode: "Online",
          rewards: "1st Place: $1000, 2nd Place: $500, 3rd Place: $250",
          faqs: [
            { question: "How many members can be in a team?", answer: "A team can have a minimum of 2 and a maximum of 4 members." },
            { question: "Can I participate individually?", answer: "No, participation is only allowed in teams." }
          ],
          organizerContact: "Email: info@example.com"
        };
      case '2':
        return {
          logo: "/placeholder.svg",
          title: "Internship Program",
          registrationEnd: "Registration ends on April 1, 2024 at 11:59 PM",
          timeline: [
            { phase: "Application Submission", description: "Submit your internship application" },
            { phase: "Interviews", description: "Selected candidates will be invited for interviews" },
            { phase: "Offer Letters", description: "Offer letters will be sent to successful candidates" }
          ],
          description: "The Internship Program offers students the opportunity to gain real-world experience in their field of study. Participants will work on challenging projects under the guidance of experienced mentors and will receive valuable insights into the industry.",
          mode: "On-site",
          rewards: "Stipend provided, Real-world experience",
          faqs: [
            { question: "Is this internship paid?", answer: "Yes, a stipend will be provided to all selected candidates." },
            { question: "What is the duration of the internship?", answer: "The internship program runs for 3 months." }
          ],
          organizerContact: "Email: internship@example.com"
        };
      case '3':
        return {
          logo: "/placeholder.svg",
          title: "Volunteer Opportunity",
          registrationEnd: "Open registration",
          timeline: [
            { phase: "Application Submission", description: "Submit your volunteer application" },
            { phase: "Training", description: "Attend training sessions to prepare for volunteer work" },
            { phase: "Volunteer Work", description: "Engage in volunteer activities and projects" }
          ],
          description: "The Volunteer Opportunity allows individuals to contribute to their community by participating in various volunteering activities. Volunteers can choose from a range of projects and initiatives based on their interests and skills.",
          mode: "Flexible",
          rewards: "Personal fulfillment and community impact",
          faqs: [
            { question: "Are there any specific requirements to volunteer?", answer: "Volunteers must undergo basic training and adhere to the organization's guidelines." },
            { question: "Can I volunteer remotely?", answer: "Some opportunities may allow remote volunteering, while others may require on-site presence." }
          ],
          organizerContact: "Email: volunteer@example.com"
        };
        case '4':
            return {
              logo: "/placeholder.svg",
              title: "Hacakhon D",
              registrationEnd: "Registration ends on April 1, 2024 at 11:59 PM",
              timeline: [
                { phase: "Application Submission", description: "Submit your internship application" },
                { phase: "Interviews", description: "Selected candidates will be invited for interviews" },
                { phase: "Offer Letters", description: "Offer letters will be sent to successful candidates" }
              ],
              description: "The Internship Program offers students the opportunity to gain real-world experience in their field of study. Participants will work on challenging projects under the guidance of experienced mentors and will receive valuable insights into the industry.",
              mode: "On-site",
              rewards: "Making a diffrence",
              faqs: [
                { question: "Is this internship paid?", answer: "Yes, a stipend will be provided to all selected candidates." },
                { question: "What is the duration of the internship?", answer: "The internship program runs for 3 months." }
              ],
              organizerContact: "Email: Recuruitment@example.com"
            };
      // Add more cases for other opportunity IDs if needed
      default:
        return null; // Return null or handle the case when the opportunity with the given ID is not found
    }
  }
  
