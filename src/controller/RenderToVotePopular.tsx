import React, { ReactNode } from "react";
import { VotePopularDescription } from "../presentation";
import { SleepVoteCard, NewVoteCard } from "../presentation";

export default function (pageStep:number):ReactNode {
    switch(pageStep) {
        case 0:
            return <VotePopularDescription />
        case 1:
            return <SleepVoteCard />
        case 2:
            return <NewVoteCard />
    }
}