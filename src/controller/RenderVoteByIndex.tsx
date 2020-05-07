import React from 'react';
import { VoteFivePart, VotePopular, VoteMaster, VoteCustom, VoteMessage } from "../presentation";

export default function (pageIndex: number, handleVotePart: (increase: number) => void): React.ReactNode {
    switch(pageIndex) {
        case 0:
            return <VoteFivePart handleVotePart={handleVotePart}/>;
        case 1:            
            return <VotePopular handleVotePart={handleVotePart}/>;
        case 2:
            return <VoteMaster handleVotePart={handleVotePart} />;
        case 3:
            return <VoteCustom handleVotePart={handleVotePart} />
        case 4:
            return <VoteMessage handleVotePart={handleVotePart} />

    }
}