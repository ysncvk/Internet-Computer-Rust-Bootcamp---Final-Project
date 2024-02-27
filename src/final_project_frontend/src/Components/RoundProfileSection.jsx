import React, { useState, useEffect } from "react";
import UserInput from "./Utilities/UserInput";
import ShadowButton from "./Utilities/ShadowButton";
import {final_project_backend} from "../../../declarations/final_project_backend";

const RoundProfileSection = ({
    proposalList,
    text,
    currentProposal,
    proposalCount,
}) => {
    const [loading, setLoading] = useState(false);
    const [proposal, setProposal] = useState("");

    const handleChange = (e) => {
        setProposal(e.target.value);
    };
    const handleProposeSend = async () => {
        const key =proposalCount + 1; // Generate a unique key for the new proposal.
        if (proposal !== "") { // Proceed only if the proposal text is not empty.
            setLoading(true); // Indicate the start of the process.
            await final_project_backend.create_proposal(key, {
                description: proposal,
                is_active: true,
            }); // Send the proposal to the backend.
            console.log("Proposal Sent"); // Log the successful operation.
            setLoading(false); // Indicate the end of the process.
            setProposal(""); // Reset the proposal text.
            window.location.reload(); // Refresh the page to reflect the new proposal.
        }

    };

    // Styles
    const textStyle =
        "text-white text-[18px] p-4 grid place-items-center gap-y-4 mt-4";
    const inputStyle =
        "grid lg:grid-flow-col md:auto-cols-1fr md:gap-x-[15em] place-items-center  items-center ";
    const container = `mt-4 ${currentProposal ? "" : "h-screen"} ${
        proposalList.length > 1 ? "" : "h-[60vh]"
    } md:mt-10 relative w-full `;
    return (
        <div className={container}>
            <div className="my-24 grid place-items-center mb-[12%]">
                <div className={inputStyle}>
                    <UserInput value={proposal} onChange={handleChange} />
                    <ShadowButton
                        loading={loading}
                        onClick={() => handleProposeSend()}
                    />
                </div>
                <p className={textStyle}>{text}</p>
            </div>
        </div>
    );
};

export default RoundProfileSection;
