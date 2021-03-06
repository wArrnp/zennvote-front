import React, { ReactNode } from "react";
import { VotePopularDescription, GrowVoteCard, UnitVoteCard } from "../presentation";
import { SleepVoteCard, NewVoteCard } from "../presentation";

export default function (pageStep:number, setCanPass: (canPass: boolean) => void):ReactNode {
    switch(pageStep) {
        case 0:
            return <VotePopularDescription setCanPass={setCanPass} />
        case 1:
            return <SleepVoteCard setCanPass={setCanPass} />
        case 2:
            return <NewVoteCard setCanPass={setCanPass} />
        case 3:
            return <GrowVoteCard setCanPass={setCanPass} />
        case 4:
            return <UnitVoteCard setCanPass={setCanPass} />
    }
}