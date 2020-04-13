import React from 'react';
import { VoteFivePart, VotePopular } from "../presentation";

export default function (pageIndex: number, handleVotePart: (increase: number) => void): React.ReactNode {
    switch(pageIndex) {
        case 0:
            return <VoteFivePart handleVotePart={handleVotePart}/>;
        case 1:
            return <VotePopular handleVotePart={handleVotePart}/>;
    }
}