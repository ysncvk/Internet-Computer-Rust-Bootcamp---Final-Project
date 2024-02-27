import React from "react";
import ProposalCard from "./Utilities/ProposalCard";


const HeroSection = ({ currentProposal, proposalCount }) => {
    // Styles

    const sectionContainer = "md:flex md:gap-x-[20vw] ";
    const customCard = "grid place-items-center mt-4";

    return (
        <div className="md:mt-16 mb-10 md:grid  md:place-items-center ">
            <div className={sectionContainer}>
                <div className={customCard}>
                    <ProposalCard
                        proposalCount={proposalCount}
                        proposal={currentProposal}
                    />

                </div>
            </div>
        </div>
    );
};

export default HeroSection;
