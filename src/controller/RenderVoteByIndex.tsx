import React from 'react';
import { VoteFivePart, VotePopular, VoteMaster, VoteCustom, VoteMessage } from "../presentation";

export default function (
    pageIndex: number, 
    handleVotePart: (increase: number) => void,
    isVoteBack: boolean,
    setIsVoteBack: (isVoteBack: boolean) => void,
): React.ReactNode {
    switch(pageIndex) {
        case 0:
            return <VoteFivePart
                handleVotePart={handleVotePart}
                isVoteBack={isVoteBack}
                setIsVoteBack={setIsVoteBack} />;
        case 1:
            return <VotePopular
                handleVotePart={handleVotePart}
                isVoteBack={isVoteBack}
                setIsVoteBack={setIsVoteBack} />;
        case 2:
            return <VoteMaster
                handleVotePart={handleVotePart}
                setIsVoteBack={setIsVoteBack} />;
        case 3:
            return <VoteCustom handleVotePart={handleVotePart} />
        case 4:
            return <VoteMessage handleVotePart={handleVotePart} />

    }
}