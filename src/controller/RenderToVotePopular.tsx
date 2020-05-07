import React, { ReactNode } from "react";
import { VotePopularDescription, GrowVoteCard, UnitVoteCard } from "../presentation";
import { SleepVoteCard, NewVoteCard } from "../presentation";

export default function (pageStep:number):ReactNode {
    switch(pageStep) {
        case 0:
            return <VotePopularDescription />
        case 1:
            return <SleepVoteCard />
        case 2:
            return <NewVoteCard />
        case 3:
            return <GrowVoteCard />
        case 4:
            return <UnitVoteCard />
    }
}