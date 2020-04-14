import React, { ReactNode } from "react";
import { VotePopularDescription } from "../presentation";
import SleepVoteCard from "../presentation/VoteCards/SleepVoteCard";

export default function (pageStep:number):ReactNode {
    switch(pageStep) {
        case 0:
            return <VotePopularDescription />
        case 1:
            return <SleepVoteCard />
    }
}